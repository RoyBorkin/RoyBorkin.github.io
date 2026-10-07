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
(()=>{var y=(r,d)=>r+Math.random()*(d-r),X={id:"gravity",name:"Gravity",blurb:"Your name as physical keycaps: grab, throw, and tilt your phone to move them.",transition(r,d,i){return[r.animate([{transform:"none",opacity:1},{transform:`translateY(${-i*6}%) rotate(${-i*1.5}deg)`,opacity:0}],{duration:420,easing:"cubic-bezier(.5,0,.75,0)",fill:"forwards"}),d.animate([{transform:`translateY(${i*-40}%)`,opacity:0},{transform:"translateY(2.5%)",opacity:1,offset:.62},{transform:"translateY(-.8%)",offset:.82},{transform:"none",opacity:1}],{duration:900,delay:220,easing:"cubic-bezier(.3,0,.4,1)",fill:"both"})]},variants:[{name:"Workbench",swatch:["#d9d7d2","#efece6","#ff6a2b"],vars:{bg:"#d8d6d0",surface:"#efece6",fg:"#1f1e1c",muted:"#6e6b65",accent:"#ff6a2b",accent2:"#cc9932",line:"rgba(31,30,28,.14)",cap:"#f1eee8",capSide:"#bdb8ae",capFg:"#2a2825",capA:"#ff6a2b",capAFg:"#fff",capB:"#3a3d44",capBFg:"#f1eee8"},fonts:{display:"Space Grotesk:500;700",body:"Space Grotesk:400;500",mono:"JetBrains Mono:400;500"}},{name:"Arcade",swatch:["#1b2140","#ffcf3f","#ff4f7b"],vars:{bg:"#1a2040",surface:"#252c55",fg:"#f6f3ff",muted:"#a3a8cf",accent:"#ffcf3f",accent2:"#4fd1ff",line:"rgba(246,243,255,.14)",cap:"#ff4f7b",capSide:"#b92f55",capFg:"#fff",capA:"#ffcf3f",capAFg:"#2a2000",capB:"#4fd1ff",capBFg:"#06263a"},fonts:{display:"Rubik:500;800",body:"Rubik:400;500",mono:"JetBrains Mono:400;500"}},{name:"Mono",swatch:["#f4f4f2","#111111","#e6e6e3"],vars:{bg:"#f3f3f1",surface:"#ffffff",fg:"#111111",muted:"#6d6d6a",accent:"#111111",accent2:"#8a8a86",line:"rgba(17,17,17,.12)",cap:"#141414",capSide:"#000000",capFg:"#f3f3f1",capA:"#ffffff",capAFg:"#111",capB:"#dcdcd8",capBFg:"#111"},fonts:{display:"IBM Plex Sans:500;700",body:"IBM Plex Sans:400;500",mono:"IBM Plex Mono:400;500"}}],layout:{works:[15,15]},shell(r){return{bg:'<div class="gv-mat"></div>',nav:`<header class="gv-top"><button class="gv-brand" data-go="0" data-hover>${r.logo()}<span>${r.esc(r.name)}</span></button><nav class="gv-nav" aria-label="Sections">${r.secs.map(d=>`<a class="pf-nav-a" href="#${d.id}" data-go="${d.i}"><kbd>${d.i+1}</kbd><span class="pf-nav-l">${r.esc(d.label)}</span></a>`).join("")}</nav>${r.menuBtn()}</header>
        <p class="gv-help" aria-hidden="true">Press <kbd>1</kbd>\u2013<kbd>${r.secs.length}</kbd> or <kbd>\u2191</kbd><kbd>\u2193</kbd> to move around</p>
        ${r.drawer()}`}},home(r){let d=r.P,i=r.sec("works"),E=[...r.first+" "+r.last].filter(n=>n.trim()),w=r.contacts.slice(0,5),f=[...E.map((n,b)=>`<span class="gv-cap" data-k="${b}" style="--w:1">${r.esc(n.toUpperCase())}</span>`),`<span class="gv-cap gv-a" style="--w:1.6"><small>${r.esc((r.roles[0]||"").split(" ")[0])}</small></span>`,`<span class="gv-cap gv-b" style="--w:1.3"><img src="${r.esc(r.img(d.logo))}" alt="" draggable="false"></span>`,...w.map(n=>`<a class="gv-cap gv-ct" href="${r.esc(r.contactHref(n))}" ${/^https?:/.test(r.contactHref(n))?'target="_blank" rel="noopener"':""} style="--w:.8" aria-label="${r.esc(n.label||n.type)}" draggable="false">${r.contactIcon(n)}</a>`)].join("");return`<div class="gv-hero">
      <div class="gv-txt">
        <p class="gv-hi">${r.esc(d.intro||"")}</p>
        <h1 class="gv-name">${r.esc(r.name)}</h1>
        <p class="gv-roles">${r.roles.map(n=>r.esc(n)).join(" / ")}</p>
        <p class="gv-pitch">${r.esc(d.tagline||"")}</p>
        <div class="gv-cta">${i?`<button class="gv-key" data-go="${i.i}" data-hover><span>${r.esc(i.label)}</span><kbd>\u21B5</kbd></button>`:""}${r.data.about?.resume?.url?`<button class="gv-key gv-key-2" data-open="resume" data-hover><span>${r.esc(r.data.about.resume.label||"Resume")}</span></button>`:""}</div>
        <p class="gv-tip"><i></i>Grab a key and throw it</p>
      </div>
      <div class="gv-world" data-drag aria-hidden="true">${f}</div>
    </div>`},mount(r,d){let i=d.querySelector(".gv-world");if(!i)return;let E=[...i.querySelectorAll(".gv-cap")],w=d.dataset.static||d.dataset.motion==="off"||matchMedia("(prefers-reduced-motion: reduce)").matches,f=0,n=0,b=60,l=E.map(e=>({el:e,w:parseFloat(e.style.getPropertyValue("--w"))||1,x:0,y:0,vx:0,vy:0,a:0,va:0,r:0})),L=e=>{f=i.clientWidth,n=i.clientHeight,b=Math.max(40,Math.min(120,Math.sqrt(f*n/(l.reduce((t,o)=>t+o.w*o.w,0)*2.1)))),i.style.setProperty("--u",b+"px"),l.forEach((t,o)=>{t.r=b*t.w/2*.98,e&&(t.x=y(t.r,f-t.r),t.y=-y(t.r,n*1.2)-o*18,t.vx=y(-2,2),t.vy=0,t.a=y(-.6,.6),t.va=y(-.05,.05))})},D=()=>{let e=0,t=n,o=[];l.forEach(a=>{let c=a.r*2;e+c>f&&(e=0,t-=b*1.05),a.x=e+a.r,a.y=t-a.r,a.a=y(-.15,.15),e+=c*1.02,o.push(a)})};L(!0),w&&(D(),I());let j=new ResizeObserver(()=>{let e=f,t=n;L(!1),l.forEach(o=>{o.x*=f/(e||f),o.y*=n/(t||n)}),w&&(D(),I())});j.observe(i);function I(){for(let e of l)e.el.style.transform=`translate(${(e.x-e.r).toFixed(1)}px,${(e.y-e.r).toFixed(1)}px) rotate(${e.a.toFixed(3)}rad)`}if(w)return()=>j.disconnect();let q=0,M=1,J=e=>{e.gamma!=null&&(q=Math.max(-1,Math.min(1,e.gamma/45)),M=Math.max(-1,Math.min(1,(e.beta-20)/45)),Math.abs(M)<.15&&Math.abs(q)<.15&&(M=.4))};window.addEventListener("deviceorientation",J);let v=null,k=-1e4,$=-1e4,F=0,A=0,U=0,N=e=>{let t=i.getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},O=e=>{let t=e.target.closest?.(".gv-cap");if(!t||!i.contains(t))return;let o=l.find(s=>s.el===t),[a,c]=N(e);v={b:o,ox:o.x-a,oy:o.y-c,sx:e.clientX,sy:e.clientY,moved:!1,link:t.tagName==="A"},t.setPointerCapture?.(e.pointerId),t.classList.add("is-grab"),e.preventDefault()},T=e=>{let[t,o]=N(e),a=performance.now(),c=Math.max(8,a-U);F=(t-k)/c*16,A=(o-$)/c*16,k=t,$=o,U=a,v&&Math.abs(e.clientX-v.sx)+Math.abs(e.clientY-v.sy)>6&&(v.moved=!0)},V=e=>{if(!v)return;let t=v;v=null,t.b.el.classList.remove("is-grab"),t.moved?(t.b.vx=Math.max(-40,Math.min(40,F)),t.b.vy=Math.max(-40,Math.min(40,A))):t.link?t.b.el.click():(t.b.vy=-14,t.b.va=y(-.3,.3))};i.addEventListener("pointerdown",O),window.addEventListener("pointermove",T,{passive:!0}),window.addEventListener("pointerup",V),i.addEventListener("click",e=>{e.target.closest?.(".gv-ct")&&e.isTrusted&&e.preventDefault()});let K=()=>{k=$=-1e4};i.addEventListener("pointerleave",K);let R=!1,Q=r.loop(()=>{if(d.dataset.cur!=="home"){R=!1;return}R||(R=!0,L(!0));let e=.55,t=3;for(let o=0;o<t;o++){for(let a of l){if(v&&v.b===a){let g=k+v.ox,m=$+v.oy;a.vx=(g-a.x)*.35,a.vy=(m-a.y)*.35,a.va*=.8}else a.vx+=q*e/t,a.vy+=M*e/t;let c=a.x-k,s=a.y-$,p=c*c+s*s,u=(a.r+b*.5)**2;if(!v&&p<u&&p>1){let g=Math.sqrt(p),m=(1-g/Math.sqrt(u))*1.2/t;a.vx+=c/g*m+F*.02,a.vy+=s/g*m+A*.02}a.x+=a.vx/t,a.y+=a.vy/t,a.a+=a.va/t,a.y>n-a.r&&(a.y=n-a.r,a.vy>0&&(a.vy*=-.35),a.va+=(a.vx/a.r-a.va)*.3,a.vx*=.92),a.y<a.r-n*1.5&&(a.y=a.r-n*1.5,a.vy=Math.abs(a.vy)*.3),a.x<a.r&&(a.x=a.r,a.vx<0&&(a.vx*=-.4),a.va+=(-a.vy/a.r-a.va)*.2),a.x>f-a.r&&(a.x=f-a.r,a.vx>0&&(a.vx*=-.4),a.va+=(a.vy/a.r-a.va)*.2)}for(let a=0;a<l.length;a++)for(let c=a+1;c<l.length;c++){let s=l[a],p=l[c],u=p.x-s.x,g=p.y-s.y,m=s.r+p.r,G=u*u+g*g;if(G>=m*m||G===0)continue;let C=Math.sqrt(G),x=u/C,h=g/C,B=(m-C)*.5,H=s.w*s.w,W=p.w*p.w,S=W/(H+W),z=H/(H+W);s.x-=x*B*S*2,s.y-=h*B*S*2,p.x+=x*B*z*2,p.y+=h*B*z*2;let P=(p.vx-s.vx)*x+(p.vy-s.vy)*h;if(P<0){let Y=-1.25*P;s.vx-=x*Y*S,s.vy-=h*Y*S,p.vx+=x*Y*z,p.vy+=h*Y*z}let Z=p.vx-s.vx-P*x,aa=p.vy-s.vy-P*h,_=Z*-h+aa*x;s.va+=_*.004,p.va-=_*.004}}for(let o of l)o.va*=.97,o.vx*=.995,Math.abs(o.va)<5e-4&&o.y>n-o.r-2&&(o.a+=(Math.round(o.a/(Math.PI/2))*(Math.PI/2)-o.a)*.02);F*=.8,A*=.8,I()});return()=>{Q(),j.disconnect(),window.removeEventListener("deviceorientation",J),i.removeEventListener("pointerdown",O),window.removeEventListener("pointermove",T),window.removeEventListener("pointerup",V)}},css:()=>`
.pf[data-t=gravity]{--pad-t:5.4em;--pad-r:2.4em;--pad-l:3.4em;--pad-b:2.4em;--radius:16px;--grain-o:.05}
.gv-mat{position:absolute;inset:0;background-image:radial-gradient(color-mix(in srgb,var(--fg) 14%,transparent) 1px,transparent 1.2px);background-size:24px 24px;mask-image:linear-gradient(transparent,#000 30%)}
.pf[data-v="0"] .gv-mat{background-color:#d3d1cb}
.gv-top{position:absolute;z-index:20;inset:0 0 auto;display:flex;align-items:center;justify-content:space-between;padding:1.1em 2em 1.1em 3.4em}
.gv-brand{display:flex;align-items:center;gap:.7em;font-family:var(--f-display);font-weight:700;font-size:.95em}
.gv-brand .pf-logo{height:2em}
.pf[data-v="0"] .gv-brand .pf-logo,.pf[data-v="2"] .gv-brand .pf-logo{filter:brightness(0)}
.pf[data-v="1"] .gv-brand .pf-logo{filter:brightness(0) invert(1)}
.gv-nav{display:flex;gap:1.2em;font-size:.86em}
.gv-nav .pf-nav-a{display:flex;align-items:center;gap:.5em;color:var(--muted);transition:color .2s}
.gv-nav .pf-nav-a:hover,.gv-nav .pf-nav-a.is-cur{color:var(--fg)}
.pf[data-t=gravity] kbd{display:inline-grid;place-items:center;min-width:1.7em;height:1.7em;padding:0 .35em;border-radius:.4em;font-family:var(--f-mono);font-size:.78em;background:var(--cap);color:var(--capFg);box-shadow:0 2px 0 var(--capSide),0 3px 6px -2px rgba(0,0,0,.25);transition:transform .12s,box-shadow .12s}
.gv-nav .pf-nav-a.is-cur kbd{background:var(--capA);color:var(--capAFg);transform:translateY(2px);box-shadow:0 0 0 var(--capSide)}
.gv-help{position:absolute;z-index:20;left:3.4em;bottom:1.1em;font-size:.74em;color:var(--muted);display:flex;align-items:center;gap:.35em;transition:opacity .4s}
.pf:not([data-cur=home]) .gv-help{opacity:0}
/* hero */
.gv-hero{position:absolute;inset:0;display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.3fr);gap:2em}
.gv-txt{display:flex;flex-direction:column;justify-content:center;gap:1em;align-items:flex-start;z-index:2;padding-bottom:2em}
.gv-hi{font-family:var(--f-mono);font-size:.8em;color:var(--muted)}
.gv-name{font-family:var(--f-display);font-weight:700;font-size:clamp(2.4em,7vmin,5.6em);line-height:.95;letter-spacing:-.04em}
.pf[data-v="1"] .gv-name{font-weight:800;letter-spacing:-.03em}
.gv-roles{font-family:var(--f-mono);font-size:.82em;color:var(--accent2)}
.pf[data-v="0"] .gv-roles{color:#9a6f1c}
.pf[data-v="2"] .gv-roles{color:var(--muted)}
.gv-pitch{max-width:38ch;line-height:1.55;color:var(--muted)}
.gv-cta{display:flex;flex-wrap:wrap;gap:.7em;margin-top:.4em}
.gv-key{display:inline-flex;align-items:center;gap:.9em;padding:.85em 1.2em;border-radius:.8em;font-weight:600;font-size:.9em;background:var(--capA);color:var(--capAFg);box-shadow:0 5px 0 color-mix(in srgb,var(--capA) 55%,#000),0 8px 16px -6px rgba(0,0,0,.3);transition:transform .1s,box-shadow .1s}
.gv-key:hover{transform:translateY(1px);box-shadow:0 4px 0 color-mix(in srgb,var(--capA) 55%,#000),0 6px 12px -6px rgba(0,0,0,.3)}
.gv-key:active{transform:translateY(5px);box-shadow:0 0 0 color-mix(in srgb,var(--capA) 55%,#000)}
.gv-key kbd{background:rgba(255,255,255,.25)!important;color:inherit!important;box-shadow:none!important}
.gv-key-2{background:var(--cap);color:var(--capFg);box-shadow:0 5px 0 var(--capSide),0 8px 16px -6px rgba(0,0,0,.3)}
.gv-key-2:hover{box-shadow:0 4px 0 var(--capSide),0 6px 12px -6px rgba(0,0,0,.3)}
.gv-key-2:active{box-shadow:0 0 0 var(--capSide)}
.gv-tip{display:flex;align-items:center;gap:.6em;font-size:.76em;color:var(--muted);margin-top:.6em}
.gv-tip i{width:1.6em;height:1px;background:currentColor}
.gv-world{position:relative;margin:calc(var(--pad-t) * -1) calc(var(--pad-r) * -1) calc(var(--pad-b) * -1) 0;overflow:hidden;touch-action:none;--u:64px}
.gv-cap{position:absolute;left:0;top:0;width:calc(var(--u) * var(--w));height:calc(var(--u) * var(--w));display:grid;place-items:center;border-radius:22%;background:linear-gradient(180deg,color-mix(in srgb,var(--cap) 86%,#fff) 0%,var(--cap) 60%);color:var(--capFg);font-family:var(--f-display);font-weight:700;font-size:calc(var(--u) * var(--w) * .46);line-height:1;box-shadow:inset 0 -.09em 0 var(--capSide),inset 0 0 0 .02em color-mix(in srgb,var(--capSide) 60%,transparent),0 .06em .1em rgba(0,0,0,.18),0 .25em .5em -.1em rgba(0,0,0,.28);cursor:grab;user-select:none;will-change:transform;-webkit-user-drag:none}
.gv-cap::after{content:"";position:absolute;inset:12% 12% 22%;border-radius:18%;background:linear-gradient(180deg,rgba(255,255,255,.35),transparent 60%);pointer-events:none;opacity:.6}
.gv-cap.is-grab{cursor:grabbing;filter:brightness(1.05);z-index:5}
.gv-a{background:linear-gradient(180deg,color-mix(in srgb,var(--capA) 86%,#fff),var(--capA) 60%);color:var(--capAFg);box-shadow:inset 0 -.09em 0 color-mix(in srgb,var(--capA) 55%,#000),0 .25em .5em -.1em rgba(0,0,0,.28)}
.gv-a small{font-family:var(--f-mono);font-size:.22em;font-weight:500;letter-spacing:.02em;max-width:80%;text-align:center;line-height:1.1}
.gv-b{background:linear-gradient(180deg,color-mix(in srgb,var(--capB) 86%,#fff),var(--capB) 60%);box-shadow:inset 0 -.09em 0 color-mix(in srgb,var(--capB) 55%,#000),0 .25em .5em -.1em rgba(0,0,0,.28)}
.gv-b img{width:52%;height:52%;object-fit:contain;pointer-events:none}
.pf[data-v="2"] .gv-b img{filter:brightness(0)}
.gv-ct{background:linear-gradient(180deg,color-mix(in srgb,var(--capB) 86%,#fff),var(--capB) 60%);color:var(--capBFg);box-shadow:inset 0 -.09em 0 color-mix(in srgb,var(--capB) 55%,#000),0 .25em .5em -.1em rgba(0,0,0,.28)}
.gv-ct svg{width:44%;height:44%}
.gv-txt>*{opacity:0;transform:translateY(.8em);transition:opacity .7s,transform .9s var(--out)}
.gv-txt>:nth-child(2){transition-delay:.06s}.gv-txt>:nth-child(3){transition-delay:.12s}.gv-txt>:nth-child(4){transition-delay:.18s}.gv-txt>:nth-child(5){transition-delay:.24s}.gv-txt>:nth-child(6){transition-delay:1.6s}
.pf-sec-home.is-on .gv-txt>*,.pf[data-static] .gv-txt>*{opacity:1;transform:none}
/* sections: keycap cards */
.pf[data-t=gravity] .pf-head-n{display:none}
.pf[data-t=gravity] .pf-head-t{font-weight:700;letter-spacing:-.04em;font-size:clamp(2em,5.6vmin,4.2em)}
.pf[data-t=gravity] .pf-card,.pf[data-t=gravity] .pf-port-item,.pf[data-t=gravity] .pf-xp,.pf[data-t=gravity] .pf-edu,.pf[data-t=gravity] .pf-skill{background:var(--surface);border:0;border-radius:var(--radius);box-shadow:0 6px 0 color-mix(in srgb,var(--surface) 70%,#000),0 12px 24px -10px rgba(0,0,0,.3);transition:transform .15s,box-shadow .15s}
.pf[data-t=gravity] .pf-card:hover,.pf[data-t=gravity] .pf-port-item:hover{transform:translateY(3px);box-shadow:0 3px 0 color-mix(in srgb,var(--surface) 70%,#000),0 6px 14px -8px rgba(0,0,0,.3)}
.pf[data-t=gravity] .pf-card:active{transform:translateY(6px);box-shadow:0 0 0 color-mix(in srgb,var(--surface) 70%,#000)}
.pf[data-t=gravity] .pf-card-media{margin:.45em .45em 0;border-radius:calc(var(--radius) - .45em)}
.pf[data-t=gravity] .pf-chip,.pf[data-t=gravity] .pf-tab{border:0;border-radius:.6em;background:var(--cap);color:var(--capFg);box-shadow:0 3px 0 var(--capSide);transition:transform .1s,box-shadow .1s}
.pf[data-t=gravity] .pf-chip[aria-pressed=true],.pf[data-t=gravity] .pf-tab[aria-selected=true]{background:var(--capA);color:var(--capAFg);transform:translateY(3px);box-shadow:0 0 0 var(--capSide)}
.pf[data-t=gravity] .pf-btn{border-radius:.7em;background:var(--capA);color:var(--capAFg);box-shadow:0 4px 0 color-mix(in srgb,var(--capA) 55%,#000)}
.pf[data-t=gravity] .pf-btn-ghost{background:var(--cap);color:var(--capFg);box-shadow:0 4px 0 var(--capSide);border:0}
.pf[data-t=gravity] .pf-pg{border:0;border-radius:.6em;background:var(--cap);color:var(--capFg);box-shadow:0 3px 0 var(--capSide)}
.pf[data-t=gravity] .pf-stats dd{letter-spacing:-.04em}
.pf[data-t=gravity] .pf-port-t{letter-spacing:-.03em}
.pf[data-t=gravity] .pf-ph{background:var(--capA);color:var(--capAFg)}
/* responsive */
.pf[data-w=sm] .gv-nav,.pf[data-w=xs] .gv-nav,.pf[data-w=xs] .gv-help,.pf[data-w=sm] .gv-help{display:none}
.pf[data-w=sm] .pf-burger,.pf[data-w=xs] .pf-burger{display:block}
.pf[data-w=xs]{--pad-r:1.1em;--pad-l:1.1em;--pad-b:1.1em;--pad-t:4.6em}
.pf[data-w=xs] .gv-top{padding:.9em 1.1em}
.pf[data-w=xs] .gv-brand span{display:none}
.pf[data-o=p] .gv-hero{grid-template-columns:1fr;grid-template-rows:auto minmax(0,1fr);gap:.5em}
.pf[data-o=p] .gv-txt{padding-bottom:0}
.pf[data-o=p] .gv-pitch,.pf[data-o=p] .gv-hi{display:none}
.pf[data-o=p] .gv-world{margin:0 calc(var(--pad-r) * -1) calc(var(--pad-b) * -1) calc(var(--pad-l) * -1)}
.pf[data-o=p] .gv-tip{display:none}
.pf[data-h=tiny] .gv-pitch,.pf[data-h=tiny] .gv-hi,.pf[data-h=tiny] .gv-tip,.pf[data-h=tiny] .gv-help{display:none}
.pf[data-h=tiny] .gv-top{padding:.5em 1.4em}
.pf[data-h=tiny]{--pad-t:3.6em}
`};window.PF=window.PF||{};window.PF.templates=window.PF.templates||{};window.PF.templates[X.id]=X;})();
