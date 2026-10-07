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

/*! Portfolio Studio. Copyright (c) 2026 Roy Borkin. All rights reserved. */
(()=>{var F=e=>!!(e?.dataset.static||e?.dataset.motion==="off"||matchMedia("(prefers-reduced-motion: reduce)").matches);function w(e,t,a=0){return String(t||"").split(/\s+/).filter(Boolean).map((i,o)=>`<span class="k-m"><span style="--i:${a+o}">${e(i)}</span></span>`).join(" ")}var y=(e,t)=>e.querySelectorAll(".dk-prog .pf-nav-a").forEach((a,i)=>a.classList.toggle("is-done",i<=t)),$={id:"deck",name:"Deck",blurb:"Your site as a pitch deck: slide wipes, a progress bar you can click, a title slide you can draw on.",cursor:"bubble",magnetic:.4,transition(e,t,a,i,o,n){let c=n.querySelector(".dk-wipe");c.querySelector("b").textContent=t.getAttribute("aria-label")||"",c.querySelector("small").textContent=`${String(+t.dataset.i+1).padStart(2,"0")} / ${String(n.querySelectorAll(".pf-sec").length).padStart(2,"0")}`;let r="cubic-bezier(.76,0,.24,1)",s=a>0?["inset(0 0 0 100%)","inset(0 0 0 0)","inset(0 100% 0 0)"]:["inset(0 100% 0 0)","inset(0 0 0 0)","inset(0 0 0 100%)"];return[c.animate([{clipPath:s[0]},{clipPath:s[1],offset:.4},{clipPath:s[1],offset:.6},{clipPath:s[2]}],{duration:1250,easing:r}),c.querySelector(".dk-wl").animate([{transform:`translateX(${a*12}vw)`,opacity:0},{transform:"none",opacity:1,offset:.45},{transform:"none",opacity:1,offset:.55},{transform:`translateX(${-a*12}vw)`,opacity:0}],{duration:1250,easing:r}),e.animate([{transform:"none"},{transform:`translateX(${-a*6}vw)`,offset:.45},{opacity:0,offset:.46},{opacity:0}],{duration:1250,easing:r,fill:"forwards"}),t.animate([{opacity:0},{opacity:0,offset:.54},{opacity:1,transform:`translateX(${a*6}vw)`,offset:.55},{opacity:1,transform:"none"}],{duration:1250,easing:r,fill:"both"})]},variants:[{name:"Paper & ink",swatch:["#f6f1e7","#1a1c1c","#49c5b6"],vars:{bg:"#f6f1e7",surface:"#ebe4d5",fg:"#1a1c1c",muted:"#6f6b62",accent:"#2fa898",accent2:"#ff9398",line:"rgba(26,28,28,.14)",ink:"#1a1c1c",paper:"#f6f1e7"},fonts:{display:"Archivo:800;900",body:"Inter Tight:400;500;600",mono:"JetBrains Mono:400"}},{name:"Night shift",swatch:["#121414","#ede8df","#ff9398"],vars:{bg:"#121414",surface:"#1d2020",fg:"#ede8df",muted:"#8b8f8a",accent:"#ff9398",accent2:"#49c5b6",line:"rgba(237,232,223,.14)",ink:"#ede8df",paper:"#121414"},fonts:{display:"Archivo:800;900",body:"Inter Tight:400;500;600",mono:"JetBrains Mono:400"}},{name:"Sage",swatch:["#dde3d5","#1f2a24","#f2a0b5"],vars:{bg:"#dde3d5",surface:"#cfd7c5",fg:"#1f2a24",muted:"#5f6b62",accent:"#e1708f",accent2:"#1f2a24",line:"rgba(31,42,36,.15)",ink:"#1f2a24",paper:"#dde3d5"},fonts:{display:"Archivo:800;900",body:"Inter Tight:400;500;600",mono:"JetBrains Mono:400"}}],layout:{works:[15,15]},shell(e){let t=e.pad2(e.secs.length);return{nav:`<header class="dk-top">
          <button class="dk-brand" data-go="0" data-hover>${e.logo()}</button>
          <nav class="dk-prog" aria-label="Slides">${e.secs.map(a=>`<a class="pf-nav-a" href="#${a.id}" data-go="${a.i}" data-cursor="${e.esc(a.label)}"><i></i><span class="pf-nav-l">${e.esc(a.label)}</span></a>`).join("")}</nav>
          <button class="dk-hi" data-contact data-hover data-cursor="">Say hi</button>
        </header>
        <footer class="dk-foot"><span class="dk-who">${e.esc(e.name)}${e.P.location?` \xB7 ${e.esc(e.P.location)}`:""}</span><span class="dk-count"><b>01</b><i>/</i>${t}</span>
          <span class="dk-arrows"><button data-prev aria-label="Previous slide" data-hover data-cursor="">${e.I("arrowLeft")}</button><button data-next aria-label="Next slide" data-hover data-cursor="">${e.I("arrow")}</button></span></footer>
        <div class="dk-wipe" aria-hidden="true"><div class="dk-wl"><small></small><b></b></div></div>
        <div class="dk-load" aria-hidden="true"><svg viewBox="0 0 200 120"><text x="100" y="92" text-anchor="middle">${e.esc((e.first[0]||"")+(e.last[0]||""))}</text></svg><span class="dk-pct">0%</span></div>`}},home(e){let t=e.P,a=e.sec("works"),i=e.roles.map(o=>`<span>${e.esc(o)}</span><i>\u273A</i>`).join("");return`<div class="dk-hero">
      <canvas class="dk-draw" aria-hidden="true"></canvas>
      <p class="dk-status"><i></i>${e.esc(t.status||"Available for new work")}</p>
      <h1 class="dk-name"><span>${w(e.esc,e.first.toUpperCase())}</span><span>${w(e.esc,e.last.toUpperCase(),1)}</span></h1>
      <div class="dk-low">
        <p class="dk-tag">${e.esc(t.tagline||"")}</p>
        <div class="dk-cta">${a?`<button class="dk-btn dk-btn-p" data-go="${a.i}" data-hover data-cursor="">See ${e.esc(a.label.toLowerCase())}</button>`:""}<button class="dk-btn" data-contact data-hover data-cursor="">Say hi</button></div>
      </div>
      <p class="dk-hint">Drag anywhere to draw</p>
      <div class="dk-strip" aria-hidden="true"><div class="dk-run">${i}${i}${i}${i}</div></div>
    </div>`},head(e,t){return`<header class="pf-head"><span class="pf-head-n">${t.n} / ${e.pad2(e.secs.length)}</span><h2 class="pf-head-t">${w(e.esc,(t.title||t.label).toUpperCase())}</h2>${t.subtitle?`<p class="pf-head-s">${e.esc(t.subtitle)}</p>`:""}</header>`},mount(e,t,a){let i=[];y(t,Math.max(0,e.secs.findIndex(r=>r.id===t.dataset.cur)));let o=matchMedia("(pointer:fine)").matches,n=t.querySelector(".dk-draw");if(n&&o&&!t.dataset.static){n.dataset.drag="",n.dataset.cursor="Draw";let r=n.getContext("2d"),s=0,m=0,p=1,h=()=>{p=Math.min(2,devicePixelRatio||1),s=n.clientWidth,m=n.clientHeight,n.width=s*p,n.height=m*p};h();let u=new ResizeObserver(h);u.observe(n),i.push(()=>u.disconnect());let k=[],l=null,R=getComputedStyle(t).getPropertyValue("--accent").trim(),A=d=>{let f=n.getBoundingClientRect();return[d.clientX-f.left,d.clientY-f.top,performance.now()]},z=d=>{d.button===0&&(n.setPointerCapture(d.pointerId),l={p:[A(d)],born:performance.now()},k.push(l),t.classList.add("dk-drew"),E())},S=d=>{l&&(l.p.push(A(d)),E())},v=()=>{l&&(l.end=performance.now()),l=null};n.addEventListener("pointerdown",z),n.addEventListener("pointermove",S),n.addEventListener("pointerup",v),n.addEventListener("pointercancel",v),i.push(()=>{n.removeEventListener("pointerdown",z),n.removeEventListener("pointermove",S),n.removeEventListener("pointerup",v),n.removeEventListener("pointercancel",v)});let g=0,P=()=>{g=0;let d=performance.now();r.setTransform(p,0,0,p,0,0),r.clearRect(0,0,s,m),r.lineCap="round",r.lineJoin="round",r.strokeStyle=R;for(let f=k.length-1;f>=0;f--){let x=k[f],b=x.end?(d-x.end)/2600:0;if(b>=1){k.splice(f,1);continue}r.globalAlpha=1-b*b,r.lineWidth=9*(1-b*.5),r.beginPath(),x.p.forEach(([L,C],M)=>M?r.lineTo(L,C):r.moveTo(L,C)),r.stroke()}k.length&&(g=requestAnimationFrame(P))},E=()=>{g||(g=requestAnimationFrame(P))};i.push(()=>cancelAnimationFrame(g))}let c=t.querySelector(".dk-load");if(!window.__dkIntro&&!F(t)&&!a?.opts?.edit&&!a?.opts?.section){window.__dkIntro=1,c.classList.add("is-on");let r=c.querySelector(".dk-pct"),s=performance.now(),m=h=>{let u=Math.min(1,(h-s)/1500);r.textContent=Math.round((1-Math.pow(1-u,3))*100)+"%",u<1?p=requestAnimationFrame(m):c.animate([{clipPath:"inset(0 0 0 0)"},{clipPath:"inset(0 0 100% 0)"}],{duration:900,delay:150,easing:"cubic-bezier(.76,0,.24,1)",fill:"forwards"}).finished.then(()=>c.classList.remove("is-on")).catch(()=>{})},p=requestAnimationFrame(m);i.push(()=>cancelAnimationFrame(p))}return()=>i.forEach(r=>r())},onLeave(e,t,a,i){let o=i.querySelector(".dk-count b");o&&(o.textContent=e.pad2(a+1)),y(i,a)},onEnter(e,t,a,i){let o=i.querySelector(".dk-count b");o&&(o.textContent=e.pad2(t+1)),y(i,t)},css:()=>`
.pf[data-t=deck]{--pad-t:6.4em;--pad-r:2.6em;--pad-l:2.6em;--pad-b:5.4em;--radius:18px;--grain-o:0;--cursor:var(--ink);font-weight:400}
.pf[data-t=deck] .pf-cursor{--cl:var(--paper)}
.pf[data-t=deck] .pf-cursor .pf-cur-l{font-weight:700}
/* chrome */
.dk-top{position:absolute;z-index:30;inset:0 0 auto;display:flex;align-items:center;gap:2em;padding:1.5em 2.6em}
.dk-brand .pf-logo{height:2.2em}
.pf[data-v="0"] .dk-brand .pf-logo,.pf[data-v="2"] .dk-brand .pf-logo{filter:brightness(0)}
.pf[data-v="1"] .dk-brand .pf-logo{filter:brightness(0) invert(1)}
.dk-prog{flex:1;display:flex;gap:.4em}
.dk-prog .pf-nav-a{flex:1;display:flex;flex-direction:column;align-items:stretch;gap:.5em;padding:.6em 0;font-size:.74em;font-weight:500;color:var(--muted);transition:color .3s}
.dk-prog .pf-nav-a i{display:block;height:3px;border-radius:3px;background:var(--line);position:relative;overflow:hidden}
.dk-prog .pf-nav-a i::after{content:"";position:absolute;inset:0;background:var(--fg);transform:scaleX(0);transform-origin:left;transition:transform .7s cubic-bezier(.76,0,.24,1)}
.dk-prog .pf-nav-a.is-cur,.dk-prog .pf-nav-a:hover{color:var(--fg)}
.dk-prog .pf-nav-a.is-done i::after{transform:scaleX(1)}
.dk-hi{height:2.7em;padding:0 1.3em;border-radius:999px;background:var(--fg);color:var(--bg);font-weight:600;font-size:.88em}
.dk-foot{position:absolute;z-index:20;left:2.6em;right:2.6em;bottom:1.3em;display:flex;align-items:center;gap:1.4em;font-size:.84em}
.dk-who{color:var(--muted)}
.dk-count{margin-left:auto;font-family:var(--f-display);font-weight:900;font-size:2.2em;letter-spacing:-.04em;line-height:1;color:var(--muted)}
.dk-count b{color:var(--fg);font-weight:900}
.dk-count i{font-style:normal;margin:0 .1em;opacity:.5}
.dk-arrows{display:flex;gap:.35em}
.dk-arrows button{width:2.8em;height:2.8em;border-radius:50%;display:grid;place-items:center;border:1.5px solid var(--fg);transition:background-color .2s,color .2s}
@media (hover:hover){.dk-arrows button:hover{background:var(--fg);color:var(--bg)}}
.dk-arrows button:active{scale:.94}
/* wipe + loader */
.dk-wipe{position:absolute;z-index:80;inset:0;background:var(--ink);color:var(--paper);display:grid;place-items:center;clip-path:inset(0 0 0 100%);pointer-events:none}
.dk-wl{display:flex;flex-direction:column;align-items:center;gap:.4em}
.dk-wl small{font-family:var(--f-mono);font-size:.9em;opacity:.6}
.dk-wl b{font-family:var(--f-display);font-weight:900;font-size:clamp(3em,11vw,10em);letter-spacing:-.04em;line-height:.9;text-transform:uppercase}
.dk-load{position:absolute;z-index:90;inset:0;background:var(--ink);color:var(--paper);display:none;place-items:center}
.dk-load.is-on{display:grid}
.dk-load svg{width:min(60vw,420px);overflow:visible}
.dk-load text{font-family:var(--f-display);font-weight:900;font-size:110px;letter-spacing:-6px;fill:transparent;stroke:var(--paper);stroke-width:1.6;stroke-dasharray:900;stroke-dashoffset:900;animation:dkDraw 1.4s cubic-bezier(.65,0,.35,1) forwards,dkFill .4s 1.2s forwards}
@keyframes dkDraw{to{stroke-dashoffset:0}}
@keyframes dkFill{to{fill:var(--paper)}}
.dk-pct{position:absolute;left:2.6rem;bottom:2rem;font-family:var(--f-display);font-weight:900;font-size:clamp(3em,9vw,8em);letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}
/* hero */
.dk-hero{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;gap:1.2em}
.dk-draw{position:absolute;inset:calc(var(--pad-t) * -1) calc(var(--pad-r) * -1) calc(var(--pad-b) * -1) calc(var(--pad-l) * -1);width:calc(100% + var(--pad-l) + var(--pad-r));height:calc(100% + var(--pad-t) + var(--pad-b));z-index:0;touch-action:none}
.dk-hero>*:not(.dk-draw){position:relative;z-index:1}
.dk-hero :is(.dk-status,.dk-name,.dk-tag,.dk-hint,.dk-strip){pointer-events:none}
.dk-status{display:inline-flex;align-self:flex-start;align-items:center;gap:.6em;padding:.5em 1em;border-radius:999px;border:1px solid var(--line);font-size:.85em;font-weight:500}
.dk-status i{width:.55em;height:.55em;border-radius:50%;background:var(--accent);box-shadow:0 0 0 0 var(--accent);animation:dkPulse 2s infinite}
@keyframes dkPulse{70%{box-shadow:0 0 0 .55em transparent}100%{box-shadow:0 0 0 0 transparent}}
.dk-name{display:flex;flex-direction:column;font-family:var(--f-display);font-weight:900;font-size:clamp(4em,21vmin,17em);line-height:.82;letter-spacing:-.055em;margin-left:-.04em}
.dk-name>span:last-child{padding-left:.9em}
.dk-low{display:flex;align-items:flex-end;justify-content:space-between;gap:2em;flex-wrap:wrap}
.dk-tag{max-width:36ch;font-size:1.05em;line-height:1.45}
.dk-cta{display:flex;gap:.5em}
.dk-btn{height:3.2em;padding:0 1.6em;border-radius:999px;border:1.5px solid var(--fg);font-weight:600;transition:background-color .2s,color .2s,rotate .3s cubic-bezier(.34,1.56,.64,1)}
.dk-btn-p{background:var(--fg);color:var(--bg)}
@media (hover:hover){.dk-btn:hover{rotate:-3deg}.dk-btn:not(.dk-btn-p):hover{background:var(--fg);color:var(--bg)}}
.dk-btn:active{scale:.96}
.dk-hint{position:absolute!important;right:0;top:0;font-family:var(--f-mono);font-size:.74em;color:var(--muted);transition:opacity .4s}
.pf:not([data-static]) .dk-drew .dk-hint,.dk-drew .dk-hint{opacity:0}
.pf[data-w=xs] .dk-hint,.pf[data-w=sm] .dk-hint{display:none}
.dk-strip{position:absolute!important;left:calc(var(--pad-l) * -1 - 2vw);right:calc(var(--pad-r) * -1 - 2vw);bottom:-2.6em;rotate:-2deg;background:var(--accent);color:var(--ink);overflow:hidden;padding:.5em 0}
.pf[data-v="1"] .dk-strip{color:#121414}
.dk-run{display:flex;align-items:center;width:max-content;animation:dkRun 26s linear infinite}
.dk-run span{font-family:var(--f-display);font-weight:900;font-size:1.25em;text-transform:uppercase;letter-spacing:-.01em;white-space:nowrap}
.dk-run i{font-style:normal;margin:0 .9em}
@keyframes dkRun{to{transform:translateX(-50%)}}
/* entrance */
.dk-status,.dk-low,.dk-strip{opacity:0;transition:opacity .8s .6s,translate .9s cubic-bezier(.23,1,.32,1) .6s}
.dk-low{translate:0 1em}.dk-strip{translate:0 120%}
.pf-sec-home.is-on :is(.dk-status,.dk-low,.dk-strip),.pf[data-static] :is(.dk-status,.dk-low,.dk-strip){opacity:1;translate:none}
/* sections */
.pf[data-t=deck] .pf-head{align-items:flex-end}
.pf[data-t=deck] .pf-head-n{order:2;margin-left:auto;font-family:var(--f-mono);color:var(--muted)}
.pf[data-t=deck] .pf-head-t{font-weight:900;font-size:clamp(2.6em,9vmin,7em);letter-spacing:-.05em;line-height:.85}
.pf[data-t=deck] .pf-head-s{order:3;color:var(--muted);font-size:.95em}
.pf[data-t=deck] :is(.pf-chip,.pf-tab,.pf-pg,.pf-igp,.pf-btn){border-radius:999px;border:1.5px solid var(--fg);background:transparent;color:var(--fg);font-weight:600}
.pf[data-t=deck] :is(.pf-chip[aria-pressed=true],.pf-tab[aria-selected=true],.pf-btn:not(.pf-btn-ghost)){background:var(--fg);color:var(--bg)}
.pf[data-t=deck] .pf-card{border:0;background:var(--surface);transition:transform .45s cubic-bezier(.34,1.56,.64,1)}
@media (hover:hover){.pf[data-t=deck] .pf-card:hover{transform:rotate(-1.2deg) scale(1.02)}}
.pf[data-t=deck] .pf-card-title{font-weight:600}
.pf[data-t=deck] .pf-card-kind{padding:.15em .6em;border-radius:999px;background:var(--bg)}
.pf[data-t=deck] .pf-stats dd{font-family:var(--f-display);font-weight:900;letter-spacing:-.04em}
.pf[data-t=deck] .pf-port-t{font-family:var(--f-display);font-weight:900;text-transform:uppercase;letter-spacing:-.03em}
.pf[data-t=deck] .pf-port-item{border:0;background:var(--surface)}
.pf[data-t=deck] :is(.pf-xp,.pf-edu,.pf-skill){border:0;background:var(--surface)}
.pf[data-t=deck] .pf-modal-box{background:var(--bg)}
/* responsive */
.pf[data-t=deck][data-w=sm] .dk-prog .pf-nav-l,.pf[data-t=deck][data-w=xs] .dk-prog .pf-nav-l{display:none}
.pf[data-t=deck][data-w=xs]{--pad-r:1.2em;--pad-l:1.2em;--pad-t:5em;--pad-b:5em}
.pf[data-t=deck][data-w=xs] .dk-top{padding:1.1em 1.2em;gap:1em}
.pf[data-t=deck][data-w=xs] .dk-foot{left:1.2em;right:1.2em;bottom:1em}
.pf[data-t=deck][data-w=xs] .dk-who{display:none}
.pf[data-t=deck][data-w=xs] .dk-count{margin-left:0;font-size:1.8em}
.pf[data-t=deck][data-w=xs] .dk-arrows{margin-left:auto}
.pf[data-t=deck][data-o=p] .dk-name{font-size:clamp(3.2em,21vw,9em)}
.pf[data-t=deck][data-o=p] .dk-name>span:last-child{padding-left:.4em}
.pf[data-t=deck][data-o=p] .dk-low{flex-direction:column;align-items:flex-start}
.pf[data-t=deck][data-o=p] .dk-strip{bottom:-1.6em}
.pf[data-t=deck][data-h=tiny]{--pad-t:4.2em;--pad-b:3.6em}
.pf[data-t=deck][data-h=tiny] .dk-top{padding:.7em 1.6em}
.pf[data-t=deck][data-h=tiny] .dk-foot{bottom:.5em}
.pf[data-t=deck][data-h=tiny] .dk-count{font-size:1.5em}
.pf[data-t=deck][data-h=tiny] .dk-arrows button{width:2.2em;height:2.2em}
.pf[data-t=deck][data-h=tiny] :is(.dk-status,.dk-strip,.dk-tag){display:none}
.pf[data-t=deck][data-h=tiny] .dk-name{font-size:clamp(3em,22vmin,8em)}
`};window.PF=window.PF||{};window.PF.templates=window.PF.templates||{};window.PF.templates[$.id]=$;})();

/*! Portfolio Studio. Copyright (c) 2026 Roy Borkin. All rights reserved. */
(()=>{var W=a=>!!(a?.dataset.static||a?.dataset.motion==="off"||matchMedia("(prefers-reduced-motion: reduce)").matches);function H(a,n,d=0){return String(n||"").split(/\s+/).filter(Boolean).map((p,l)=>`<span class="k-m"><span style="--i:${d+l}">${a(p)}</span></span>`).join(" ")}function tt(a,n){let d=parseInt(a.replace("#","").slice(0,6),16),p=d>>16&255,l=d>>8&255,o=d&255,x=n<0?0:255,b=Math.abs(n);return p=Math.round((x-p)*b+p),l=Math.round((x-l)*b+l),o=Math.round((x-o)*b+o),`rgb(${p},${l},${o})`}var X={id:"kinetic",name:"Kinetic",blurb:"A live physics cluster you can shove and burst, tilt cards with a sheen, a counter preloader.",cursor:"ring",magnetic:.35,transition(a,n,d,p,l,o){let x=o.querySelector(".kn-wipe"),b="cubic-bezier(.19,1,.22,1)";return[x.animate([{transform:`translateY(${d>0?100:-100}%)`},{transform:"none",offset:.42},{transform:"none",offset:.5},{transform:`translateY(${d>0?-100:100}%)`}],{duration:1200,easing:"cubic-bezier(.76,0,.24,1)"}),a.animate([{opacity:1,transform:"none"},{opacity:0,transform:`translateY(${-d*6}vh)`,offset:.45},{opacity:0}],{duration:1200,easing:b,fill:"forwards"}),n.animate([{opacity:0},{opacity:0,offset:.48},{opacity:1,transform:`translateY(${d*6}vh)`,offset:.49},{opacity:1,transform:"none"}],{duration:1300,easing:b,fill:"both"})]},variants:[{name:"Signal blue",swatch:["#f0f1fa","#1a2ffb","#0d0d12"],vars:{bg:"#f0f1fa",surface:"#ffffff",fg:"#0d0d12",muted:"#6a6e85",accent:"#1a2ffb",accent2:"#0d0d12",line:"rgba(13,13,18,.1)",j1:"#1a2ffb",j2:"#ffffff",j3:"#26262b"},fonts:{display:"Outfit:400;500;600",body:"Outfit:400;500",mono:"DM Mono:400;500"}},{name:"Ember night",swatch:["#0e0d0c","#ff5a1f","#f3efe8"],vars:{bg:"#0e0d0c",surface:"#1a1817",fg:"#f3efe8",muted:"#9a9089",accent:"#ff5a1f",accent2:"#f3efe8",line:"rgba(243,239,232,.1)",j1:"#ff5a1f",j2:"#e9e2d8",j3:"#3a3633"},fonts:{display:"Outfit:400;500;600",body:"Outfit:400;500",mono:"DM Mono:400;500"}},{name:"Mint lab",swatch:["#eef4ef","#00a676","#11201a"],vars:{bg:"#eef4ef",surface:"#ffffff",fg:"#11201a",muted:"#5d7268",accent:"#00a676",accent2:"#11201a",line:"rgba(17,32,26,.1)",j1:"#00a676",j2:"#ffffff",j3:"#1d3b30"},fonts:{display:"Outfit:400;500;600",body:"Outfit:400;500",mono:"DM Mono:400;500"}}],layout:{works:[15,15]},shell(a){return{bg:'<canvas class="kn-cv"></canvas>',nav:`<header class="kn-top">
          <button class="kn-brand" data-go="0" data-hover>${a.logo()}<span>${a.esc(a.name)}</span></button>
          <nav class="kn-nav" aria-label="Sections">${a.secs.map(n=>`<a class="pf-nav-a" href="#${n.id}" data-go="${n.i}"><span class="pf-nav-l">${a.esc(n.label)}</span></a>`).join("")}</nav>
          <button class="kn-talk" data-contact data-hover data-cursor=""><span>Let\u2019s talk</span><i>${a.I("email")}</i></button>
          ${a.menuBtn("kn-burger")}
        </header>
        <footer class="kn-foot"><span>${a.esc(a.P.location||"")}</span><span class="kn-cts">${a.contactLinks({limit:6})}</span><span>\xA9 ${new Date().getFullYear()}</span></footer>
        <div class="kn-wipe" aria-hidden="true"></div>
        <div class="kn-load" aria-hidden="true"><span class="kn-n">000</span><i></i></div>
        ${a.drawer("kn-drawer")}`}},home(a){let n=a.P,d=a.sec("works");return`<div class="kn-hero">
      <ul class="kn-tags">${a.roles.map(p=>`<li>${a.esc(p)}</li>`).join("")}</ul>
      <h1 class="kn-name">${H(a.esc,a.name)}</h1>
      <p class="kn-tag">${a.esc(n.tagline||"")}</p>
      <div class="kn-cta">${d?`<button class="kn-btn kn-btn-p" data-go="${d.i}" data-hover data-cursor="">${a.esc(d.label)}</button>`:""}${a.data.about?.resume?.url?`<button class="kn-btn" data-open="resume" data-hover data-cursor="">${a.esc(a.data.about.resume.label||"Resume")}</button>`:""}</div>
      ${a.slot?.("bg")===!1?"":'<p class="kn-hint">Push them around. Click to burst.</p>'}
    </div>`},head(a,n){return`<header class="pf-head"><span class="pf-head-n">(${n.n})</span><h2 class="pf-head-t">${H(a.esc,n.title||n.label)}</h2>${n.subtitle?`<p class="pf-head-s">${a.esc(n.subtitle)}</p>`:""}</header>`},mount(a,n,d){let p=[],l=n.querySelector(".kn-cv"),o=l.getContext("2d"),x=getComputedStyle(n),b=["--j1","--j2","--j3"].map(t=>x.getPropertyValue(t).trim()||"#888888"),u=0,g=0,S=1,A=40,m=[],z=0,E=0,$=1,L=1,_=()=>g>u,et=t=>t==="home"?_()?[u*.5,g*.66,1]:[u*.68,g*.5,1]:_()?[u*1.02,g*1.04,.42]:[u*.99,g*.97,.5],G=t=>{let e=et(t);z=e[0],E=e[1],L=e[2]},U=()=>{S=Math.min(2,devicePixelRatio||1),u=l.clientWidth,g=l.clientHeight,l.width=u*S,l.height=g*S,A=Math.min(u,g)*(_()?.085:.07);let t=u<600?11:16;for(;m.length<t;){let e=m.length;m.push({x:u*.5+(Math.random()-.5)*u*.6,y:-Math.random()*g*.6-40,vx:0,vy:0,a:Math.random()*6.28,va:0,b:Math.random()*6.28,s:.8+Math.random()*.45,col:e%3})}m.length=t,G(n.dataset.cur||"home")};U();let N=new ResizeObserver(()=>{U(),W(n)&&(D(),O())});N.observe(l),p.push(()=>N.disconnect());let F=-999,C=-999,I=0,T=0,Y=-999,q=-999,V=t=>{let e=n.getBoundingClientRect();F=t.clientX-e.left,C=t.clientY-e.top};window.addEventListener("pointermove",V,{passive:!0}),p.push(()=>window.removeEventListener("pointermove",V));let K=(t,e,i=14)=>m.forEach(r=>{let s=r.x-t,c=r.y-e,f=Math.hypot(s,c)||1,h=i*Math.min(1,260/f);r.vx+=s/f*h,r.vy+=c/f*h,r.va+=(Math.random()-.5)*.3}),J=t=>{if(n.dataset.cur!=="home"||t.target.closest("a,button,[data-hover]"))return;let e=n.getBoundingClientRect();K(t.clientX-e.left,t.clientY-e.top,18)};n.addEventListener("pointerdown",J),p.push(()=>n.removeEventListener("pointerdown",J)),n._knGo=t=>{G(t),K(z,E,6),m.forEach(e=>{e.vx+=(z-e.x)*.02,e.vy+=(E-e.y)*.02})};let at=(t,e)=>{let i=b[t.col],r=tt(i,.55),s=tt(i,-.45),c=e*.42,f=e,h=Math.cos(t.b),M=Math.sin(t.b);o.save(),o.translate(t.x,t.y),o.rotate(t.a);let v=w=>{let j=o.createLinearGradient(0,-c/2,0,c/2);j.addColorStop(0,r),j.addColorStop(.35,i),j.addColorStop(1,s),o.fillStyle=j,o.beginPath(),o.roundRect(-w,-c/2,w*2,c,c/2),o.fill()},y=()=>{let w=o.createRadialGradient(-c*.25,-c*.3,c*.05,0,0,c*.8);w.addColorStop(0,r),w.addColorStop(.5,i),w.addColorStop(1,s),o.fillStyle=w,o.beginPath(),o.arc(0,0,c*.78,0,6.283),o.fill()},R=f*(.35+.65*Math.abs(h)),k=M>0;k&&(o.save(),o.rotate(Math.PI/2),v(R),o.restore()),v(f),y(),k||(o.save(),o.rotate(Math.PI/2),v(R),o.restore()),o.restore()},B=W(n),nt=()=>{$+=(L-$)*.05,I=Y<-900?0:F-Y,T=q<-900?0:C-q,Y=F,q=C;for(let t of m){t.vx+=(z-t.x)*.0016,t.vy+=(E-t.y)*.0016,t.vx*=.94,t.vy*=.94,t.x+=t.vx,t.y+=t.vy,t.va+=t.vx*6e-4,t.va*=.96,t.a+=t.va+.002,t.b+=.01+Math.hypot(t.vx,t.vy)*.006;let e=A*t.s*$*.95,i=t.x-F,r=t.y-C,s=Math.hypot(i,r),c=46;if(s<c+e&&s>0){let f=c+e-s;t.x+=i/s*f*.5,t.y+=r/s*f*.5,t.vx+=i/s*f*.12+I*.12,t.vy+=r/s*f*.12+T*.12,t.va+=(i*T-r*I)*2e-5}}for(let t=0;t<m.length;t++)for(let e=t+1;e<m.length;e++){let i=m[t],r=m[e],s=r.x-i.x,c=r.y-i.y,f=Math.hypot(s,c)||.01,h=(i.s+r.s)*A*$*.82;if(f<h){let M=(h-f)/2,v=s/f,y=c/f;i.x-=v*M,i.y-=y*M,r.x+=v*M,r.y+=y*M;let R=(r.vx-i.vx)*v+(r.vy-i.vy)*y;if(R<0){let k=R*.6;i.vx+=v*k,i.vy+=y*k,r.vx-=v*k,r.vy-=y*k,i.va-=k*.004,r.va+=k*.004}}}};function O(){o.setTransform(S,0,0,S,0,0),o.clearRect(0,0,u,g),[...m].sort((t,e)=>t.s-e.s).forEach(t=>at(t,A*t.s*$))}function D(){m.forEach((t,e)=>{let i=e*2.4,r=Math.sqrt(e)*A*.85*L;t.x=z+Math.cos(i)*r,t.y=E+Math.sin(i)*r}),$=L}B?(D(),O()):p.push(a.loop(()=>{nt(),O()}));let Q=t=>{let e=t.target.closest?.(".pf-sec.is-on .pf-card, .pf-sec.is-on .pf-port-item");if(!e)return;let i=e.getBoundingClientRect(),r=(t.clientX-i.left)/i.width,s=(t.clientY-i.top)/i.height;e.style.setProperty("--rx",((.5-s)*8).toFixed(2)+"deg"),e.style.setProperty("--ry",((r-.5)*10).toFixed(2)+"deg"),e.style.setProperty("--sx",(r*100).toFixed(1)+"%"),e.style.setProperty("--sy",(s*100).toFixed(1)+"%")},Z=t=>{let e=t.target.closest?.(".pf-card, .pf-port-item");e&&!e.contains(t.relatedTarget)&&(e.style.removeProperty("--rx"),e.style.removeProperty("--ry"))};!B&&a.slot?.("sections")!==!1&&matchMedia("(pointer:fine)").matches&&(n.addEventListener("pointermove",Q,{passive:!0}),n.addEventListener("pointerout",Z),p.push(()=>{n.removeEventListener("pointermove",Q),n.removeEventListener("pointerout",Z)}));let P=n.querySelector(".kn-load");if(!window.__knIntro&&!B&&!d?.opts?.edit&&!d?.opts?.section){window.__knIntro=1,P.classList.add("is-on");let t=P.querySelector(".kn-n"),e=P.querySelector("i"),i=performance.now(),r=c=>{let f=Math.min(1,(c-i)/1300),h=1-Math.pow(1-f,3);t.textContent=String(Math.round(h*100)).padStart(3,"0"),e.style.transform=`scaleX(${h})`,f<1?s=requestAnimationFrame(r):P.animate([{transform:"none"},{transform:"translateY(-100%)"}],{duration:900,delay:120,easing:"cubic-bezier(.76,0,.24,1)",fill:"forwards"}).finished.then(()=>P.classList.remove("is-on")).catch(()=>{})},s=requestAnimationFrame(r);p.push(()=>cancelAnimationFrame(s))}else D();return()=>p.forEach(t=>t())},onLeave(a,n,d,p){p._knGo?.(a.secs[d].id)},css:()=>`
.pf[data-t=kinetic]{--pad-t:6.6em;--pad-r:2.6em;--pad-l:2.6em;--pad-b:4.6em;--radius:20px;--grain-o:0;--cursor:var(--accent);font-weight:400}
.pf[data-t=kinetic] .pf-cursor{--cl:#fff}
.kn-cv{position:absolute;inset:0;width:100%;height:100%}
/* chrome */
.kn-top{position:absolute;z-index:30;inset:0 0 auto;display:flex;align-items:center;gap:1.5em;padding:1.5em 2.6em}
.kn-brand{display:flex;align-items:center;gap:.65em;font-weight:600;letter-spacing:-.01em}
.kn-brand .pf-logo{height:1.8em}
.pf[data-v="0"] .kn-brand .pf-logo,.pf[data-v="2"] .kn-brand .pf-logo{filter:brightness(0)}
.pf[data-v="1"] .kn-brand .pf-logo{filter:brightness(0) invert(1)}
.kn-nav{margin:0 auto;display:flex;gap:.2em;padding:.3em;border-radius:999px;background:color-mix(in srgb,var(--surface) 75%,transparent);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px)}
.kn-nav .pf-nav-a{padding:.55em 1.05em;border-radius:999px;font-family:var(--f-mono);font-size:.74em;text-transform:uppercase;letter-spacing:.04em;transition:background-color .3s,color .3s}
.kn-nav .pf-nav-a.is-cur{background:var(--fg);color:var(--bg)}
@media (hover:hover){.kn-nav .pf-nav-a:not(.is-cur):hover{background:var(--line)}}
.kn-talk{display:flex;align-items:center;gap:.7em;height:2.8em;padding:0 .35em 0 1.2em;border-radius:999px;background:var(--accent);color:#fff;font-weight:500;font-size:.9em}
.kn-talk i{display:grid;place-items:center;width:2.15em;height:2.15em;border-radius:50%;background:#fff;color:var(--accent);transition:rotate .5s cubic-bezier(.34,1.56,.64,1)}
@media (hover:hover){.kn-talk:hover i{rotate:-12deg}}
.kn-burger{display:none}
.kn-foot{position:absolute;z-index:20;left:2.6em;right:2.6em;bottom:1.2em;display:flex;align-items:center;gap:1.5em;font-family:var(--f-mono);font-size:.72em;text-transform:uppercase;letter-spacing:.04em;color:var(--muted)}
.kn-cts{margin:0 auto;display:flex;gap:.2em}
.kn-cts .pf-ct{width:2.6em;height:2.6em;display:grid;place-items:center;border-radius:50%;color:var(--fg);transition:background-color .25s}
@media (hover:hover){.kn-cts .pf-ct:hover{background:var(--line)}}
.kn-wipe{position:absolute;z-index:80;inset:0;background:var(--accent);transform:translateY(100%);pointer-events:none}
.kn-load{position:absolute;z-index:90;inset:0;background:var(--bg);display:none;align-items:flex-end;justify-content:space-between;padding:2.6em}
.kn-load.is-on{display:flex}
.kn-n{font-family:var(--f-mono);font-size:clamp(3em,10vw,9em);line-height:.8;letter-spacing:-.04em;color:var(--fg);font-variant-numeric:tabular-nums}
.kn-load i{position:absolute;left:0;right:0;top:0;height:3px;background:var(--accent);transform:scaleX(0);transform-origin:left}
/* hero */
.kn-hero{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;gap:1.3em;max-width:min(52%,40em);pointer-events:none}
.kn-hero :is(button,a){pointer-events:auto}
.kn-tags{display:flex;flex-wrap:wrap;gap:.4em}
.kn-tags li{padding:.4em .8em;border-radius:999px;border:1px solid var(--line);background:color-mix(in srgb,var(--bg) 70%,transparent);font-family:var(--f-mono);font-size:.7em;text-transform:uppercase;letter-spacing:.04em}
.kn-name{font-family:var(--f-display);font-weight:500;font-size:clamp(3.4em,13vmin,10em);line-height:.92;letter-spacing:-.05em}
.kn-tag{max-width:30ch;font-size:clamp(1.05em,2.4vmin,1.4em);line-height:1.35;color:var(--fg)}
.kn-cta{display:flex;gap:.5em}
.kn-btn{height:3.1em;padding:0 1.5em;border-radius:999px;border:1px solid var(--fg);font-weight:500;background:color-mix(in srgb,var(--bg) 60%,transparent);transition:background-color .25s,color .25s,border-color .25s}
.kn-btn-p{background:var(--fg);color:var(--bg)}
@media (hover:hover){.kn-btn:hover{background:var(--accent);border-color:var(--accent);color:#fff}}
.kn-btn:active{scale:.97}
.kn-hint{font-family:var(--f-mono);font-size:.7em;text-transform:uppercase;letter-spacing:.05em;color:var(--muted)}
.kn-tags,.kn-tag,.kn-cta,.kn-hint{opacity:0;translate:0 .8em;transition:opacity .8s .5s,translate 1s cubic-bezier(.19,1,.22,1) .5s}
.pf-sec-home.is-on :is(.kn-tags,.kn-tag,.kn-cta,.kn-hint),.pf[data-static] :is(.kn-tags,.kn-tag,.kn-cta,.kn-hint){opacity:1;translate:none}
/* sections */
.pf[data-t=kinetic] .pf-head-n{font-family:var(--f-mono);color:var(--accent)}
.pf[data-t=kinetic] .pf-head-t{font-weight:500;font-size:clamp(2.4em,7.6vmin,6em);letter-spacing:-.05em;line-height:.95}
.pf[data-t=kinetic] .pf-head-s{color:var(--muted)}
.pf[data-t=kinetic] :is(.pf-chip,.pf-tab,.pf-pg,.pf-igp,.pf-btn){border-radius:999px;border:1px solid var(--line);background:var(--surface);color:var(--fg)}
.pf[data-t=kinetic] :is(.pf-chip,.pf-tab){font-family:var(--f-mono);font-size:.72em;text-transform:uppercase;letter-spacing:.04em;padding:.7em 1.1em}
.pf[data-t=kinetic] :is(.pf-chip[aria-pressed=true],.pf-tab[aria-selected=true],.pf-btn:not(.pf-btn-ghost)){background:var(--fg);color:var(--bg);border-color:var(--fg)}
.pf[data-t=kinetic] :is(.pf-card,.pf-port-item){border:0;background:var(--surface);box-shadow:0 1px 0 var(--line),0 20px 40px -24px rgba(13,13,30,.25);transform:perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));transition:transform .5s cubic-bezier(.19,1,.22,1),box-shadow .3s}
.pf[data-t=kinetic] :is(.pf-card,.pf-port-item)::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;background:radial-gradient(circle at var(--sx,50%) var(--sy,0%),rgba(255,255,255,.35),transparent 45%);opacity:0;transition:opacity .3s}
@media (hover:hover){.pf[data-t=kinetic] :is(.pf-card,.pf-port-item):hover::after{opacity:1}}
.pf[data-t=kinetic] .pf-card-media{margin:.45em .45em 0;border-radius:calc(var(--radius) - .45em)}
.pf[data-t=kinetic] .pf-card-meta{font-family:var(--f-mono);font-size:.64em;text-transform:uppercase;letter-spacing:.04em}
.pf[data-t=kinetic] .pf-card-title{font-weight:500}
.pf[data-t=kinetic] :is(.pf-xp,.pf-edu,.pf-skill){border:0;background:var(--surface)}
.pf[data-t=kinetic] .pf-stats dd{font-weight:500;letter-spacing:-.05em}
.pf[data-t=kinetic] .pf-port-t{font-weight:500;letter-spacing:-.03em}
.pf[data-t=kinetic] .pf-modal-box{background:var(--surface)}
/* responsive */
.pf[data-t=kinetic][data-w=sm] .kn-nav,.pf[data-t=kinetic][data-w=xs] .kn-nav{display:none}
.pf[data-t=kinetic][data-w=sm] .kn-talk{margin-left:auto}
.pf[data-t=kinetic][data-w=sm] .kn-burger,.pf[data-t=kinetic][data-w=xs] .kn-burger{display:block}
.pf[data-t=kinetic][data-w=xs] .kn-talk span{display:none}
.pf[data-t=kinetic][data-w=xs] .kn-talk{margin-left:auto;padding:0 .35em}
.pf[data-t=kinetic][data-w=xs]{--pad-r:1.2em;--pad-l:1.2em;--pad-t:5.4em;--pad-b:4.4em}
.pf[data-t=kinetic][data-w=xs] .kn-top{padding:1.1em 1.2em}
.pf[data-t=kinetic][data-w=xs] .kn-foot{left:1.2em;right:1.2em}
.pf[data-t=kinetic][data-w=xs] .kn-foot>span:not(.kn-cts){display:none}
.pf[data-t=kinetic][data-o=p] .kn-hero{max-width:none;justify-content:flex-start;padding-top:1em}
.pf[data-t=kinetic][data-o=p] .kn-name{font-size:clamp(3em,18vw,7em)}
.pf[data-t=kinetic][data-o=p] .kn-hint{display:none}
.pf[data-t=kinetic][data-h=tiny]{--pad-t:4.2em;--pad-b:3em}
.pf[data-t=kinetic][data-h=tiny] .kn-top{padding:.6em 1.6em}
.pf[data-t=kinetic][data-h=tiny] .kn-foot{bottom:.4em}
.pf[data-t=kinetic][data-h=tiny] :is(.kn-tags,.kn-hint){display:none}
.pf[data-t=kinetic][data-h=tiny] .kn-hero{gap:.7em}
`};window.PF=window.PF||{};window.PF.templates=window.PF.templates||{};window.PF.templates[X.id]=X;})();
