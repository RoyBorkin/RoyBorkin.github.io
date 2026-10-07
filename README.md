# Roy Borkin — portfolio website

© 2026 Roy Borkin. All rights reserved — the content, text and images of this site.
The site code (engine, templates) is Portfolio Studio © 2026 Roy Borkin. All rights reserved.

Built with Portfolio Studio. Template: **Lab** (Samurai variant).

## What's inside

```
index.html              the page (one screen, no scrolling)
assets/css/engine.css   shared layout, components and motion
assets/js/content.js    all your content (generated from data/content.json)
assets/js/engine.js     the site runtime: navigation, paging, embeds, modals
assets/js/template.js   the "Lab" design
assets/img/             your images
apps/                   mini web apps you uploaded as HTML files
data/content.json       your content as plain JSON
project.portfolio.json  the full project — open it in Portfolio Studio to keep editing
```

## Publish on GitHub Pages

1. Create a repository (for a personal site name it `<your-user>.github.io`).
2. Upload every file and folder from this ZIP to the repository root (keep `.nojekyll`).
3. In the repository: **Settings → Pages → Build and deployment → Deploy from a branch → main / root**.
4. The site appears at `https://<your-user>.github.io/` within a minute or two.

Netlify, Vercel or any static host also work: drag the unzipped folder onto Netlify Drop.

## Opening it locally

Double-click `index.html`. Everything works offline except: Google Fonts, GitHub projects,
Instagram / LinkedIn embeds and Google Drive viewers, which need an internet connection.
GitHub projects only load when the site is served over http(s), not from a file:// path.

## Embeds — checklist

- **Google Drive** (resume, portfolios): set each file to *Anyone with the link → Viewer*, or the viewer shows a sign-in page.
- **Instagram**: use single-post links (`instagram.com/p/…` or `/reel/…`). Private accounts can't be embedded.
- **LinkedIn**: on the post, choose *… → Embed this post* and paste the code (or the post link) into Portfolio Studio.
- **Instagram auto-feed with a token**: the token is visible in `content.js` to anyone who views the source. Use a token
  with read-only scope, or a feed service URL (for example a Behold.so JSON feed) instead.

## Editing

Open Portfolio Studio, choose **Open project**, select `project.portfolio.json`, make changes, and export again.

## Instagram: automatic posts (set up once)

Your site reads `data/instagram.json`. The workflow in `.github/workflows/publish.yml` refreshes it every hour,
saves the images into `assets/ig/`, and republishes the site, so a new Instagram post appears on your website
within about an hour with nothing to do on your side.

1. **Make the account professional.** In the Instagram app: Settings → Account type and tools → Switch to professional
   account (Creator or Business; it stays free and can stay personal-looking).
2. **Create a Meta app.** Go to developers.facebook.com → My Apps → Create app and pick the Instagram use case
   (named something like "Manage messaging & content on Instagram"). Open **API setup with Instagram login**.
3. **Generate a token.** In "Generate access tokens", add your Instagram account and click **Generate token**.
   Copy it. This is a long-lived token (about 60 days); the workflow renews it automatically.
4. **Add it to GitHub.** Repository → Settings → Secrets and variables → Actions → New repository secret:
   name `IG_TOKEN`, value = the token.
5. **Optional, recommended:** create a fine-grained personal access token (github.com/settings/tokens) limited to this
   repository with **Secrets: Read and write**, and save it as the secret `GH_PAT`. Then renewed tokens are saved back
   on their own and you never have to touch the token again.
6. **Switch Pages to Actions.** Settings → Pages → Build and deployment → Source: **GitHub Actions**.
7. Push the site. Open Actions → **Publish site** → **Run workflow** to fetch your posts right away.

If the token ever expires (for example without GH_PAT and after 60 days), the workflow run fails and GitHub emails you.
Generate a new token (step 3) and update `IG_TOKEN`.
