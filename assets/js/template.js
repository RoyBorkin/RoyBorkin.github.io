/*! Portfolio Studio. Copyright (c) 2026 Roy Borkin. All rights reserved. */
(()=>{var p={id:"lab",name:"Lab",blurb:"Floating glass widgets you can drag, over a grayscale portrait.",transition:"circle",variants:[{name:"Lab",swatch:["#f2f2f0","#ff4d1f","#111111"],vars:{bg:"#f1f1ef",surface:"rgba(255,255,255,.66)",fg:"#121212",muted:"#6b6b69",accent:"#ff4d1f",accent2:"#121212",line:"rgba(18,18,18,.12)",glass:"rgba(255,255,255,.55)"},fonts:{display:"Bricolage Grotesque:600;800",body:"Manrope:400;500;700",mono:"Geist Mono:400"}},{name:"Samurai",swatch:["#141414","#ff6b4a","#d9d9d9"],vars:{bg:"#151515",surface:"rgba(40,40,40,.55)",fg:"#ededed",muted:"#8d8d8d",accent:"#ff6b4a",accent2:"#2a2a2a",line:"rgba(255,255,255,.1)",glass:"rgba(60,60,60,.38)"},fonts:{display:"Bricolage Grotesque:600;800",body:"Manrope:400;500;700",mono:"Geist Mono:400"}},{name:"Clay",swatch:["#e3a28c","#2a1f1c","#fff3ea"],vars:{bg:"#e2a18b",surface:"rgba(255,243,234,.6)",fg:"#2a1f1c",muted:"#6e4f46",accent:"#2a1f1c",accent2:"#fff3ea",line:"rgba(42,31,28,.14)",glass:"rgba(255,243,234,.5)"},fonts:{display:"Bricolage Grotesque:600;800",body:"Manrope:400;500;700",mono:"Geist Mono:400"}}],layout:{works:[15,15]},shell(a){return{bg:'<div class="lb-dots"></div>',nav:`<header class="lb-top"><button class="lb-brand" data-go="0" data-hover><b>${a.esc(a.first.toLowerCase())}.</b></button><nav class="lb-nav" aria-label="Sections">${a.nav({num:!0})}</nav>${a.menuBtn()}</header>
        <aside class="lb-ct">${a.contactLinks({limit:6})}</aside>
        <div class="lb-idx" aria-hidden="true"><b>${a.secs.map(o=>`<span>${o.n}</span>`).join("")}</b></div>
        ${a.drawer()}`}},home(a){let o=a.img(a.P.cutout)||a.img(a.P.photo),t=[...a.data.works?.items||[]].sort((e,r)=>new Date(r.date||0)-new Date(e.date||0))[0],s=a.data.about?.stats||[],i=a.contacts.find(e=>e.type==="email"),d=[38,62,48,84,56,92,70].map((e,r)=>`<i style="--h:${e}%;--i:${r}"></i>`).join("");return`<div class="lb-hero">
      <h1 class="lb-word"><span>${a.esc(a.first.toLowerCase())}.</span></h1>
      <p class="lb-side">${a.esc(a.P.location||"")}<br>${a.esc(a.P.status||"")}</p>
      <div class="lb-slab"></div>
      <figure class="lb-fig"><img src="${a.esc(o)}" alt="${a.esc(a.name)}" draggable="false"></figure>
      <div class="lb-card lb-roles" data-drag style="--d:1.4;--x:4%;--y:30%"><small>${a.esc(a.name)}</small><ul>${a.roles.map(e=>`<li>${a.esc(e)}</li>`).join("")}</ul></div>
      ${i?`<a class="lb-card lb-msg" data-drag href="${a.esc(a.contactHref(i))}" style="--d:2.2;--x:66%;--y:12%"><small>${a.I("email")} Message</small><p>Say hello \u2014 ${a.esc(i.value)}</p></a>`:""}
      ${s[0]?`<div class="lb-card lb-stat" data-drag style="--d:1.8;--x:72%;--y:56%"><small>${a.esc(s[0].label)}</small><strong>${a.esc(s[0].value)}</strong><div class="lb-bars">${d}</div></div>`:""}
      ${t?`<button class="lb-card lb-pill" data-drag data-open="work:${a.esc(t.id)}" style="--d:2.8;--x:24%;--y:76%"><span>${a.esc(t.title)}</span>${a.I("arrow")}</button>`:""}
      <p class="lb-tag">${a.esc(a.P.tagline||"")}</p>
    </div>`},mount(a,o){let t=null,s=e=>{let r=e.target.closest("[data-drag]");if(!r||e.button>0)return;let l=r.parentElement.getBoundingClientRect(),n=r.getBoundingClientRect();t={el:r,box:l,ox:e.clientX-n.left,oy:e.clientY-n.top,sx:e.clientX,sy:e.clientY,moved:!1},r.setPointerCapture?.(e.pointerId)},i=e=>{if(!t||(Math.abs(e.clientX-t.sx)+Math.abs(e.clientY-t.sy)>5&&(t.moved=!0),!t.moved))return;let r=(e.clientX-t.box.left-t.ox)/t.box.width*100,l=(e.clientY-t.box.top-t.oy)/t.box.height*100;t.el.style.setProperty("--x",Math.max(-2,Math.min(88,r))+"%"),t.el.style.setProperty("--y",Math.max(-2,Math.min(88,l))+"%"),t.el.classList.add("is-drag")},d=e=>{if(!t)return;let r=t;if(t=null,r.el.classList.remove("is-drag"),r.moved){let l=n=>{n.stopPropagation(),n.preventDefault()};r.el.addEventListener("click",l,{capture:!0,once:!0})}};return o.addEventListener("pointerdown",s),window.addEventListener("pointermove",i),window.addEventListener("pointerup",d),()=>{o.removeEventListener("pointerdown",s),window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",d)}},onEnter(a,o,t,s){s.style.setProperty("--k",o)},css:()=>`
.pf[data-t=lab]{--pad-t:5.8em;--pad-r:5.4em;--pad-l:3.4em;--pad-b:4em;--radius:20px;--grain-o:.05}
.lb-dots{position:absolute;inset:0;background-image:radial-gradient(var(--line) 1.2px,transparent 1.3px);background-size:22px 22px;transform:translate(calc(var(--mx)*-6px),calc(var(--my)*-6px))}
.lb-top{position:absolute;z-index:20;inset:0 0 auto;display:flex;align-items:center;justify-content:space-between;padding:1.3em 2em 1.3em 3.4em}
.lb-brand b{font-family:var(--f-display);font-weight:800;font-size:1.6em;letter-spacing:-.04em}
.lb-nav{display:flex;gap:.4em;padding:.35em;border-radius:999px;background:var(--glass);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid var(--line);font-size:.82em}
.lb-nav .pf-nav-a{padding:.45em .9em;border-radius:999px;transition:background-color .3s,color .3s}
.lb-nav .pf-nav-n{display:none}
.lb-nav .pf-nav-a.is-cur{background:var(--fg);color:var(--bg)}
.lb-ct{position:absolute;z-index:20;right:1.6em;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:.4em}
.lb-ct .pf-ct{width:2.5em;height:2.5em;border-radius:50%;background:var(--glass);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid var(--line)}
.lb-ct .pf-ct:hover{background:var(--accent);color:#fff;border-color:var(--accent)}
.lb-idx{position:absolute;z-index:0;left:2.2em;bottom:.6em;font-family:var(--f-display);font-weight:800;font-size:clamp(4em,15vmin,11em);line-height:.9;color:var(--accent);height:.9em;overflow:hidden;letter-spacing:-.05em;pointer-events:none}
.pf[data-v="2"] .lb-idx{color:var(--accent2)}
.lb-idx b{display:block}
.lb-idx span{display:block;transform:translateY(calc(var(--k,0) * -100%));transition:transform 1s var(--ease)}
/* hero */
.lb-hero{position:absolute;inset:0}
.lb-word{position:absolute;left:0;top:4%;font-family:var(--f-display);font-weight:800;font-size:clamp(4em,17vmin,13em);line-height:.85;letter-spacing:-.06em;z-index:1}
.lb-word span{display:inline-block;transform:translateY(30%);opacity:0;transition:transform 1.2s var(--out),opacity .8s}
.lb-side{position:absolute;right:0;top:4%;writing-mode:vertical-rl;font-size:.72em;color:var(--muted);line-height:1.6;z-index:1}
.lb-slab{position:absolute;left:52%;bottom:calc(var(--pad-b) * -1);width:min(26vw,36vh);height:68%;background:var(--accent);z-index:1;transform:translateX(-10%) scaleY(0);transform-origin:bottom;transition:transform 1.1s var(--ease) .15s}
.pf[data-v="2"] .lb-slab{background:var(--accent2)}
.lb-fig{position:absolute;left:50%;bottom:calc(var(--pad-b) * -1);height:calc(100% + var(--pad-b) + 1em);aspect-ratio:1606/1500;transform:translate(calc(-50% + var(--mx) * -10px),4%);z-index:2;opacity:0;transition:opacity 1s .3s,transform 1.3s var(--out) .3s}
.lb-fig img{width:100%;height:100%;object-fit:contain;object-position:bottom;filter:grayscale(1) contrast(1.12)}
.pf[data-v="2"] .lb-fig img{filter:grayscale(1) contrast(1.05) sepia(.25)}
.lb-card{position:absolute;z-index:5;left:var(--x);top:var(--y);transform:translate(calc(var(--mx) * var(--d) * -14px),calc(var(--my) * var(--d) * -10px));padding:1em 1.1em;border-radius:var(--radius);background:var(--glass);backdrop-filter:blur(18px) saturate(1.3);-webkit-backdrop-filter:blur(18px) saturate(1.3);border:1px solid color-mix(in srgb,var(--fg) 10%,transparent);box-shadow:0 20px 50px -20px rgba(0,0,0,.25);display:flex;flex-direction:column;gap:.5em;font-size:.84em;cursor:grab;touch-action:none;opacity:0;scale:.9;transition:opacity .7s,scale .8s var(--out)}
.lb-card.is-drag{cursor:grabbing;box-shadow:0 30px 70px -20px rgba(0,0,0,.4);scale:1.03!important}
.lb-card small{display:flex;align-items:center;gap:.5em;color:var(--muted);font-size:.8em}
.lb-roles ul{display:flex;flex-direction:column;gap:.15em;font-weight:700;font-family:var(--f-display);font-size:1.15em}
.lb-roles li:first-child{color:var(--accent)}
.pf[data-v="2"] .lb-roles li:first-child{color:var(--fg);text-decoration:underline}
.lb-msg{max-width:17em}
.lb-msg p{font-weight:600}
.lb-stat strong{font-family:var(--f-display);font-size:2.6em;line-height:1;font-weight:800}
.lb-bars{display:flex;align-items:flex-end;gap:4px;height:3em}
.lb-bars i{flex:1;width:8px;height:var(--h);background:var(--accent);border-radius:3px;transform:scaleY(0);transform-origin:bottom;transition:transform .9s var(--out);transition-delay:calc(1.4s + var(--i) * 60ms)}
.pf[data-v="2"] .lb-bars i{background:var(--fg)}
.lb-pill{flex-direction:row;align-items:center;gap:1em;border-radius:999px;padding:.8em 1.1em .8em 1.4em;font-weight:700}
.lb-pill svg{width:2em;height:2em;padding:.45em;border-radius:50%;background:var(--accent);color:#fff}
.pf[data-v="2"] .lb-pill svg{background:var(--fg)}
.lb-tag{position:absolute;left:0;bottom:32%;max-width:24ch;font-size:.86em;color:var(--muted);z-index:1;opacity:0;transition:opacity 1s 1.2s}
.pf-sec-home.is-on .lb-word span,.pf[data-static] .lb-word span{transform:none;opacity:1}
.pf-sec-home.is-on .lb-slab,.pf[data-static] .lb-slab{transform:translateX(-10%) scaleY(1)}
.pf-sec-home.is-on .lb-fig,.pf[data-static] .lb-fig{opacity:1;transform:translate(calc(-50% + var(--mx) * -10px),0)}
.pf-sec-home.is-on .lb-card,.pf[data-static] .lb-card{opacity:1;scale:1}
.pf-sec-home.is-on .lb-card:nth-of-type(2){transition-delay:.9s}.pf-sec-home.is-on .lb-card:nth-of-type(3){transition-delay:1.05s}.pf-sec-home.is-on .lb-card:nth-of-type(4){transition-delay:1.2s}.pf-sec-home.is-on .lb-card:nth-of-type(5){transition-delay:1.35s}
.pf-sec-home.is-on .lb-bars i,.pf[data-static] .lb-bars i{transform:none}
.pf-sec-home.is-on .lb-tag,.pf[data-static] .lb-tag{opacity:1}
/* sections */
.pf[data-t=lab] .pf-head{align-items:flex-end}
.pf[data-t=lab] .pf-head-n{display:none}
.pf[data-t=lab] .pf-head-t{font-weight:800;letter-spacing:-.04em;font-size:clamp(2em,5.6vmin,4.2em)}
.pf[data-t=lab] .pf-head-t::after{content:".";color:var(--accent)}
.pf[data-t=lab] .pf-card,.pf[data-t=lab] .pf-xp,.pf[data-t=lab] .pf-edu,.pf[data-t=lab] .pf-skill,.pf[data-t=lab] .pf-port-item{background:var(--glass);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-color:transparent;box-shadow:0 14px 40px -24px rgba(0,0,0,.3)}
.pf[data-t=lab] .pf-card:hover{transform:translateY(-5px)}
.pf[data-t=lab] .pf-card-media{margin:.5em .5em 0;border-radius:calc(var(--radius) - 8px)}
.pf[data-t=lab] .pf-card-media img{filter:grayscale(1);transition:filter .5s,transform .9s var(--out)}
.pf[data-t=lab] .pf-card:hover .pf-card-media img{filter:none}
.pf[data-t=lab] .pf-chip[aria-pressed=true],.pf[data-t=lab] .pf-tab[aria-selected=true]{background:var(--accent);color:#fff;border-color:var(--accent)}
.pf[data-t=lab][data-v="2"] .pf-chip[aria-pressed=true],.pf[data-t=lab][data-v="2"] .pf-tab[aria-selected=true]{background:var(--fg);border-color:var(--fg);color:var(--bg)}
.pf[data-t=lab] .pf-btn{background:var(--accent);color:#fff}
.pf[data-t=lab][data-v="2"] .pf-btn{background:var(--fg);color:var(--bg)}
.pf[data-t=lab] .pf-btn-ghost{background:transparent;color:var(--fg)}
.pf[data-t=lab] .pf-profile-img img{filter:grayscale(1)}
.pf[data-t=lab] .pf-port-t{font-weight:800;letter-spacing:-.03em}
/* responsive */
.pf[data-w=sm] .lb-nav,.pf[data-w=xs] .lb-nav{display:none}
.pf[data-w=sm] .pf-burger,.pf[data-w=xs] .pf-burger{display:block}
.pf[data-w=xs]{--pad-r:1.2em;--pad-l:1.2em}
.pf[data-w=xs] .lb-top{padding:1em 1.1em}
.pf[data-w=xs] .lb-ct{top:auto;bottom:1em;right:1em;transform:none;flex-direction:row}
.pf[data-w=xs] .lb-idx{left:1em;font-size:3.4em}
.pf[data-o=p] .lb-fig{height:64%}
.pf[data-o=p] .lb-slab{height:46%;width:42vw;left:46%}
.pf[data-o=p] .lb-word{font-size:clamp(3.4em,24vw,9em)}
.pf[data-o=p] .lb-side,.pf[data-o=p] .lb-tag,.pf[data-o=p] .lb-msg{display:none}
.pf[data-o=p] .lb-roles{--x:0%!important;--y:30%!important}
.pf[data-o=p] .lb-stat{--x:58%!important;--y:32%!important}
.pf[data-o=p] .lb-pill{--x:0%!important;--y:auto!important;top:auto;bottom:0}
.pf[data-h=tiny] .lb-stat,.pf[data-h=tiny] .lb-msg,.pf[data-h=tiny] .lb-tag{display:none}
.pf[data-h=tiny] .lb-top{padding:.5em 1.2em}
.pf[data-h=tiny]:not([data-cur=home]) .lb-idx,.pf[data-w=xs]:not([data-cur=home]) .lb-idx{display:none}
`};window.PF=window.PF||{};window.PF.templates=window.PF.templates||{};window.PF.templates[p.id]=p;})();
