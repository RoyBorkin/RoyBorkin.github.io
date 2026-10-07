/*! Portfolio Studio. Copyright (c) 2026 Roy Borkin. All rights reserved. Unauthorized copying, modification or distribution is prohibited without written permission. */
// Instagram → website sync.
// Runs inside .github/workflows/publish.yml. Reads your posts with the Instagram API (Instagram Login), saves the images into assets/ig/,
// writes data/instagram.json, and keeps your access token alive by refreshing it.
//
// Secrets (repository → Settings → Secrets and variables → Actions):
//   IG_TOKEN  long-lived Instagram access token (required)
//   GH_PAT    optional fine-grained token with "Secrets: Read and write" on this repo.
//             With it, a refreshed token is saved back automatically and you never touch it again.
import fs from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const TOKEN = process.env.IG_TOKEN;
const LIMIT = Math.max(1, Math.min(100, parseInt(process.env.IG_LIMIT || '24', 10)));
const OUT_JSON = process.env.IG_JSON || 'data/instagram.json';
const IMG_DIR = process.env.IG_IMG_DIR || 'assets/ig';
const API = 'https://graph.instagram.com';

if (!TOKEN) {
  console.error('IG_TOKEN secret is missing. Add it in Settings → Secrets and variables → Actions.');
  process.exit(1);
}

async function get(url) {
  const r = await fetch(url);
  const j = await r.json().catch(() => ({}));
  if (!r.ok || j.error) throw new Error(`${r.status} ${j.error?.message || r.statusText} (${url.replace(/access_token=[^&]+/, 'access_token=…')})`);
  return j;
}

async function refreshToken() {
  try {
    const j = await get(`${API}/refresh_access_token?grant_type=ig_refresh_token&access_token=${encodeURIComponent(TOKEN)}`);
    const days = Math.round((j.expires_in || 0) / 86400);
    console.log(`Token refreshed, valid for ~${days} days.`);
    if (j.access_token && j.access_token !== TOKEN) {
      if (process.env.GH_TOKEN) {
        execFileSync('gh', ['secret', 'set', 'IG_TOKEN', '--repo', process.env.GITHUB_REPOSITORY, '--body', j.access_token], { stdio: 'inherit' });
        console.log('Saved the new token to the IG_TOKEN secret.');
      } else {
        console.warn('Instagram returned a new token. Add a GH_PAT secret so it is saved automatically, or paste it into IG_TOKEN within 60 days.');
      }
    }
  } catch (e) {
    // Refresh is only allowed once a token is 24h old; a failure here is not fatal.
    console.warn('Token refresh skipped:', e.message);
  }
}

async function download(url, file) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`image ${r.status}`);
  await fs.writeFile(file, Buffer.from(await r.arrayBuffer()));
}

async function main() {
  await refreshToken();
  const tk = encodeURIComponent(TOKEN);
  let me = {};
  try { me = await get(`${API}/me?fields=user_id,username,name,profile_picture_url,followers_count,media_count&access_token=${tk}`); }
  catch { me = await get(`${API}/me?fields=id,username&access_token=${tk}`); }

  const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,children{media_type,media_url,thumbnail_url}';
  let url = `${API}/me/media?fields=${encodeURIComponent(fields)}&limit=${Math.min(LIMIT, 50)}&access_token=${tk}`;
  const media = [];
  while (url && media.length < LIMIT) { const j = await get(url); media.push(...(j.data || [])); url = j.paging?.next || null; }

  await fs.mkdir(IMG_DIR, { recursive: true });
  await fs.mkdir(path.dirname(OUT_JSON), { recursive: true });
  const keep = new Set();
  const posts = [];
  for (const m of media.slice(0, LIMIT)) {
    const first = m.media_type === 'CAROUSEL_ALBUM' ? (m.children?.data || [])[0] || m : m;
    const src = first.media_type === 'VIDEO' ? first.thumbnail_url || m.thumbnail_url : first.media_url || m.media_url;
    const file = `${IMG_DIR}/${m.id}.jpg`;
    keep.add(path.basename(file));
    if (src) {
      try { await fs.access(file); } catch { try { await download(src, file); } catch (e) { console.warn('Could not save image for', m.permalink, e.message); } }
    }
    posts.push({ id: m.id, url: m.permalink, image: src ? file : '', text: m.caption || '', date: m.timestamp, type: m.media_type });
  }
  let avatar = '';
  if (me.profile_picture_url) { avatar = `${IMG_DIR}/avatar.jpg`; keep.add('avatar.jpg'); try { await download(me.profile_picture_url, avatar); } catch { avatar = ''; } }
  for (const f of await fs.readdir(IMG_DIR)) if (!keep.has(f)) await fs.unlink(path.join(IMG_DIR, f));

  const profile = { username: me.username, name: me.name || '', avatar, followers: me.followers_count ?? null, posts: me.media_count ?? null };
  let prev = null; try { prev = JSON.parse(await fs.readFile(OUT_JSON, 'utf8')); } catch { /* first run */ }
  const sameContent = prev && JSON.stringify({ p: prev.profile, s: prev.posts }) === JSON.stringify({ p: profile, s: posts });
  // Keep the repo active (GitHub pauses scheduled workflows in repos idle for 60 days): touch once a month.
  const month = new Date().toISOString().slice(0, 7);
  const setOut = (v) => process.env.GITHUB_OUTPUT && fs.appendFile(process.env.GITHUB_OUTPUT, `changed=${v}\n`);
  if (sameContent && prev.checked === month) { console.log('No new posts.'); await setOut('false'); return; }
  await fs.writeFile(OUT_JSON, JSON.stringify({ updated: sameContent ? prev.updated : new Date().toISOString(), checked: month, profile, posts }, null, 2) + '\n');
  console.log(sameContent ? 'Monthly check-in saved.' : `Wrote ${posts.length} posts for @${me.username}.`);
  await setOut('true');
}

main().catch((e) => { console.error(e.message); process.exit(1); });
