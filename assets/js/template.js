/*! Portfolio Studio. Copyright (c) 2026 Roy Borkin. All rights reserved. */
(()=>{var p={id:"classic",name:"Classic+",blurb:"Your current site, refined: photo veil, tracked name, typewriter roles.",transition:"depth",variants:[{name:"Charcoal",swatch:["#2b2b2c","#f4f4f2","#bfbfbf"],vars:{bg:"#232324",surface:"rgba(30,30,32,.62)",fg:"#f4f4f2",muted:"#a9a9a6",accent:"#e8e6e1",accent2:"#666666",line:"rgba(255,255,255,.16)",veil:"rgba(22,22,24,.76)"},fonts:{display:"Comfortaa:400;700",body:"Manrope:400;500;600;700",mono:"JetBrains Mono:400"}},{name:"Midnight gold",swatch:["#1b2130","#cc9932","#f3efe6"],vars:{bg:"#161b27",surface:"rgba(24,30,44,.66)",fg:"#f3efe6",muted:"#9ea6b6",accent:"#cc9932",accent2:"#333a46",line:"rgba(204,153,50,.22)",veil:"rgba(17,22,34,.8)"},fonts:{display:"Manrope:300;700;800",body:"Manrope:400;500;600;700",mono:"JetBrains Mono:400"}},{name:"Fog",swatch:["#ecebe8","#2b2f36","#8a8f98"],vars:{bg:"#e9e8e5",surface:"rgba(255,255,255,.62)",fg:"#23272e",muted:"#5f646d",accent:"#23272e",accent2:"#b9b4ac",line:"rgba(35,39,46,.14)",veil:"rgba(236,235,232,.8)"},fonts:{display:"Comfortaa:400;700",body:"Manrope:400;500;600;700",mono:"JetBrains Mono:400"}}],layout:{works:[15,14]},shell(a){let t=a.img(a.P.photo);return{bg:`<div class="cl-photo" style="background-image:url('${a.esc(t)}')"></div><div class="cl-veil"></div>`,nav:`<header class="cl-top"><button class="cl-brand" data-go="0" aria-label="Home" data-hover>${a.logo()}</button>
        <nav class="cl-nav" aria-label="Sections">${a.nav()}</nav>
        <button class="cl-menu" aria-label="Open menu" data-hover><i></i><i></i></button></header>
        <nav class="cl-dots" aria-label="Section progress">${a.secs.map(e=>`<a href="#${e.id}" data-go="${e.i}" aria-label="${a.esc(e.label)}"><i></i><span>${a.esc(e.label)}</span></a>`).join("")}</nav>
        <footer class="cl-foot"><div class="cl-cts">${a.contactLinks({limit:6})}</div><span class="cl-hint" data-next><i></i><span>Scroll</span></span></footer>
        <div class="cl-drawer" aria-hidden="true"><nav>${a.nav({num:!0})}</nav><div class="cl-drawer-ct">${a.contactLinks({text:!0})}</div></div>`}},home(a){let t=a.P;return`<div class="cl-hero">
      <p class="cl-hi">${a.esc(t.intro||"Hi, my name is")}</p>
      <h1 class="cl-name" aria-label="${a.esc(a.name)}">${a.split(a.name.toUpperCase())}</h1>
      <p class="cl-type"><span>and I am ${/^[aeiou]/i.test(a.roles[0]||"")?"an":"a"}</span> <b class="cl-role">${a.esc(a.roles[0]||"")}</b><i class="cl-caret"></i></p>
      <div class="cl-cta">
        ${a.data.about?.resume?.url?`<button class="pf-btn" data-open="resume" data-magnetic data-hover><span>${a.esc(a.data.about.resume.label||"Resume")}</span></button>`:""}
        ${a.sec("works")?`<button class="pf-btn pf-btn-ghost" data-go="${a.sec("works").i}" data-magnetic data-hover><span>See my works</span></button>`:""}
      </div></div>`},mount(a,t){let e=t.querySelector(".cl-role"),u=t.querySelector(".cl-type span"),i=a.roles,l=0,s,o=!0,v=t.dataset.static||t.dataset.motion==="off",d=()=>{if(!o||i.length<2||v)return;let r=i[l%i.length],f=r.length,m=()=>{if(o)if(e.textContent=r.slice(0,f--),f>=0)s=setTimeout(m,38/a.param("typeSpeed",1));else{l++;let n=i[l%i.length];u.textContent="and I am "+(/^[aeiou]/i.test(n)?"an":"a"),g(n,0)}},g=(n,c)=>{o&&(e.textContent=n.slice(0,c),c<n.length?s=setTimeout(()=>g(n,c+1),70/a.param("typeSpeed",1)):s=setTimeout(d,a.param("hold",2.2)*1e3))};m()};s=setTimeout(d,2600);let h=t.querySelector(".cl-menu"),b=()=>t.classList.toggle("cl-open");return h.addEventListener("click",b),t.querySelector(".cl-drawer").addEventListener("click",r=>{r.target.closest("a,[data-go]")&&t.classList.remove("cl-open")}),()=>{o=!1,clearTimeout(s)}},css:()=>`
.pf[data-t=classic]{--pad-t:6.4em;--pad-r:5.2em;--pad-l:5.2em;--pad-b:5em;--radius:16px}
.cl-photo{position:absolute;inset:-4%;background-size:cover;background-position:50% 35%;transform:translate3d(calc(var(--mx)*-1.2%),calc(var(--my)*-1.2%),0) scale(1.04);transition:filter 1.2s var(--out),transform .2s linear;animation:clKen 30s ease-in-out infinite alternate}
@keyframes clKen{to{background-position:50% 22%;scale:1.08}}
.pf[data-v="2"] .cl-photo{filter:grayscale(.6)}
.pf:not([data-cur=home]) .cl-photo{filter:blur(14px) saturate(.8);}
.cl-veil{position:absolute;inset:0;background:var(--veil);transition:background-color 1s}
.pf:not([data-cur=home]) .cl-veil{background:color-mix(in srgb,var(--veil) 100%,var(--bg) 25%)}
.cl-top{position:absolute;z-index:20;top:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:1.4em 2.2em}
.cl-brand .pf-logo{height:2.1em;filter:brightness(0) invert(1)}
.pf[data-v="1"] .cl-brand .pf-logo{filter:none}
.pf[data-v="2"] .cl-brand .pf-logo{filter:brightness(0)}
.cl-nav{display:flex;gap:2.2em;font-size:.9em;letter-spacing:.08em}
.cl-nav .pf-nav-a{position:relative;color:var(--muted);padding:.3em 0}
.cl-nav .pf-nav-a::after{content:"";position:absolute;left:0;right:0;bottom:-.1em;height:1px;background:var(--accent);transform:scaleX(0);transform-origin:right;transition:transform .5s var(--out)}
.cl-nav .pf-nav-a:hover,.cl-nav .pf-nav-a.is-cur{color:var(--fg)}
.cl-nav .pf-nav-a.is-cur::after{transform:scaleX(1);transform-origin:left}
.cl-menu{display:none;width:2.6em;height:2.6em;position:relative}
.cl-menu i{position:absolute;left:.55em;right:.55em;height:1.5px;background:var(--fg);transition:transform .4s var(--out)}
.cl-menu i:first-child{top:1.05em}.cl-menu i:last-child{top:1.5em}
.cl-open .cl-menu i:first-child{transform:translateY(.22em) rotate(45deg)}
.cl-open .cl-menu i:last-child{transform:translateY(-.22em) rotate(-45deg)}
.cl-drawer{position:absolute;inset:0;z-index:19;background:var(--bg);display:flex;flex-direction:column;justify-content:center;gap:2em;padding:2em;clip-path:circle(0 at calc(100% - 3em) 2.6em);transition:clip-path .7s var(--ease);visibility:hidden}
.cl-open .cl-drawer{clip-path:circle(150% at calc(100% - 3em) 2.6em);visibility:visible}
.cl-drawer nav{display:flex;flex-direction:column;gap:.4em}
.cl-drawer .pf-nav-a{font-family:var(--f-display);font-size:2em;font-weight:700}
.cl-drawer .pf-nav-n{color:var(--accent);font-size:.4em}
.cl-drawer-ct{display:flex;flex-direction:column;gap:.7em;font-size:.95em;color:var(--muted)}
.cl-dots{position:absolute;z-index:20;right:2.2em;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:1em}
.cl-dots a{display:flex;align-items:center;gap:.8em;flex-direction:row-reverse}
.cl-dots i{width:7px;height:7px;border-radius:50%;border:1px solid var(--fg);opacity:.5;transition:all .4s var(--out)}
.cl-dots a.is-cur i{background:var(--accent);border-color:var(--accent);opacity:1;transform:scale(1.4)}
.cl-dots span{font-size:.72em;opacity:0;transform:translateX(.6em);transition:all .35s var(--out);color:var(--muted)}
.cl-dots a:hover span{opacity:1;transform:none}
.cl-foot{position:absolute;z-index:20;left:2.2em;right:2.2em;bottom:1.4em;display:flex;justify-content:space-between;align-items:center}
.cl-cts{display:flex;gap:.4em}
.cl-cts .pf-ct{width:2.4em;height:2.4em;border-radius:50%;color:var(--muted)}
.cl-cts .pf-ct:hover{color:var(--bg);background:var(--fg)}
.cl-hint{display:flex;align-items:center;gap:.8em;font-size:.72em;letter-spacing:.2em;color:var(--muted);cursor:pointer;transition:opacity .4s}
.cl-hint i{width:3.5em;height:1px;background:currentColor;position:relative;overflow:hidden}
.cl-hint i::after{content:"";position:absolute;inset:0;background:var(--accent);animation:clLine 2.4s var(--ease) infinite}
@keyframes clLine{0%{transform:translateX(-100%)}60%,100%{transform:translateX(100%)}}
.pf:not([data-cur=home]) .cl-hint{opacity:0;pointer-events:none}
/* hero */
.cl-hero{margin:auto;text-align:center;display:flex;flex-direction:column;align-items:center;gap:1.1em;max-width:100%}
.cl-hi{font-size:clamp(.9em,1.8vmin,1.15em);letter-spacing:.32em;color:var(--muted);opacity:0;transform:translateY(.6em);transition:all 1s var(--out) .15s}
.cl-name{font-family:var(--f-display);font-weight:700;font-size:clamp(2.1em,7.4vmin,6.2em);letter-spacing:.24em;line-height:1;margin-right:-.24em;white-space:nowrap;display:flex;flex-wrap:nowrap;justify-content:center}
.pf[data-v="1"] .cl-name{font-weight:800;letter-spacing:.2em}
.pf[data-w=xs] .cl-name{letter-spacing:.12em;margin-right:-.12em;font-size:clamp(1.7em,9vw,3em);white-space:normal;flex-wrap:wrap;row-gap:.2em}
.cl-name .pf-sp{width:.35em}
.cl-name .ch{display:inline-block;opacity:0;filter:blur(12px);transform:translate(calc((var(--c) - 5) * .35em),0) scale(1.6);transition:opacity 1.1s var(--out),filter 1.1s var(--out),transform 1.4s var(--out);transition-delay:calc(.25s + var(--c) * 55ms)}
.pf-sec-home.is-on .cl-name .ch,.pf[data-static] .cl-name .ch{opacity:1;filter:none;transform:none}
.pf-sec-home.is-on .cl-hi,.pf-sec-home.is-on .cl-type,.pf-sec-home.is-on .cl-cta,.pf[data-static] .cl-hi,.pf[data-static] .cl-type,.pf[data-static] .cl-cta{opacity:1;transform:none}
.cl-type{font-size:clamp(1em,2.2vmin,1.35em);letter-spacing:.1em;color:var(--fg);opacity:0;transform:translateY(.6em);transition:all 1s var(--out) 1.1s;min-height:1.5em}
.cl-type span{color:var(--muted)}
.cl-role{font-weight:600;color:var(--accent)}
.pf[data-v="0"] .cl-role{color:var(--fg)}
.cl-caret{display:inline-block;width:1px;height:1.1em;background:var(--accent);margin-left:.15em;vertical-align:-.15em;animation:clBlink 1s steps(1) infinite}
@keyframes clBlink{50%{opacity:0}}
.cl-cta{display:flex;gap:.7em;flex-wrap:wrap;justify-content:center;margin-top:.8em;opacity:0;transform:translateY(.6em);transition:all 1s var(--out) 1.3s}
.pf[data-t=classic] .pf-btn:not(.pf-btn-ghost){background:var(--accent);color:var(--bg);letter-spacing:.06em}
.pf[data-t=classic][data-v="0"] .pf-btn:not(.pf-btn-ghost){background:var(--fg)}
.pf[data-t=classic] .pf-btn-ghost{background:transparent;color:var(--fg);border:1px solid var(--line);backdrop-filter:blur(8px)}
/* sections */
.pf[data-t=classic] .pf-head{justify-content:center;text-align:center;flex-direction:column;align-items:center}
.pf[data-t=classic] .pf-head-n{display:none}
.pf[data-t=classic] .pf-head-t{font-weight:700;letter-spacing:.18em;font-size:clamp(1.5em,3.6vmin,2.6em);text-transform:uppercase;margin-right:-.18em}
.pf[data-t=classic] .pf-head-s{text-align:center;flex-basis:auto}
.pf[data-t=classic] .pf-chips,.pf[data-t=classic] .pf-tabs{justify-content:center}
.pf[data-t=classic] .pf-card,.pf[data-t=classic] .pf-xp,.pf[data-t=classic] .pf-edu,.pf[data-t=classic] .pf-skill,.pf[data-t=classic] .pf-port-item{background:var(--surface);backdrop-filter:blur(18px) saturate(1.2);-webkit-backdrop-filter:blur(18px) saturate(1.2)}
.pf[data-t=classic] .pf-card:hover{transform:translateY(-4px)}
.pf[data-t=classic] .pf-pager-nav{align-self:center}
.pf[data-t=classic] .pf-sec-in>*{transition:opacity .9s var(--out),transform .9s var(--out)}
.pf[data-t=classic] .pf-sec:not(.is-on) .pf-sec-in>*{opacity:0;transform:translateY(1.2em)}
.pf[data-t=classic] .pf-sec.is-on .pf-sec-in>:nth-child(2){transition-delay:.12s}
.pf[data-w=md] .cl-nav{gap:1.4em}
.pf[data-w=sm] .cl-nav,.pf[data-w=xs] .cl-nav{display:none}
.pf[data-w=sm] .cl-menu,.pf[data-w=xs] .cl-menu{display:block}
.pf[data-w=xs] .cl-dots,.pf[data-h=tiny] .cl-dots{display:none}
.pf[data-w=xs]{--pad-t:5em;--pad-b:4.6em}
.pf[data-w=xs] .cl-top{padding:1em 1.1em}
.pf[data-w=xs] .cl-foot{left:1.1em;right:1.1em;bottom:1em}
.pf[data-w=xs] .cl-hint span{display:none}
.pf[data-w=sm]{--pad-r:2.2em;--pad-l:2.2em}
.pf[data-h=tiny] .cl-top{padding:.6em 1.2em}
.pf[data-h=tiny] .cl-foot{bottom:.5em}
.pf[data-h=tiny] .cl-hero{gap:.5em}
.pf[data-h=tiny] .cl-cta{margin-top:0}
`};window.PF=window.PF||{};window.PF.templates=window.PF.templates||{};window.PF.templates[p.id]=p;})();
