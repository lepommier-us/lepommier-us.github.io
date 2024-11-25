(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();const d=()=>`
<div class="apple-tree-wrapper">
  <img src="/apple-tree.png" onclick="window.dispatchEvent(new CustomEvent('showLove'))" alt="A beautiful apple tree with red apples" class="apple-tree-img" />
</div>
`,c=()=>`
  <div class="dog-scene">
    <div class="dog">
      <img src="/doggy.gif" />

    <div class="butterfly butterfly-1">🦋</div>
    <div class="butterfly butterfly-2">🦋</div>
    <div class="butterfly butterfly-3">🦋</div>
    </div>
  </div>
`,s=["Like our apple tree, our love grows stronger each day! 🌱","Can't wait to plant our tree together! 🌳","You're the sweetest apple in my orchard of love! 🍎","Our love story blooms like apple blossoms in spring! 🌸","Together, we'll grow a garden of endless love! 💖"];function m(){return s[Math.floor(Math.random()*s.length)]}document.querySelector("#app").innerHTML=`
  <div class="container animate__animated animate__fadeIn">
    <div class="balloon-container">To: Lizzy</div>
    <h1 class="animate__animated animate__heartBeat">Happy Birthday My Love!</h1>
    
    <div class="scene-container">
      <div class="tree-container animate__animated animate__bounceIn">
        ${d()}
      </div>
      ${c()}
    </div>

    <p class="message animate__animated animate__fadeIn">${m()}</p>
    <div class="heart animate__animated animate__pulse animate__infinite">❤️</div>
    <button style="display:none">Send Love! 💕</button>
  </div>
`;let l=0;window.addEventListener("showLove",()=>{const i=document.querySelector(".container");i.style.animation="none",i.offsetHeight,i.classList.add("animate__animated","animate__heartBeat");const a=document.querySelector(".message");l=(l+1)%s.length,a.textContent=s[l],a.classList.add("animate__animated","animate__bounceIn");const t=document.createElement("div"),o=["❤️","💕","💓","💝","💗","💖"];t.innerHTML=o[Math.ceil(Math.random()*(o.length-1))],t.style.position="fixed",t.style.left=Math.random()*90+"vw",t.style.bottom=Math.random()*90+"vh",t.style.animation="float 4s ease-in-out",t.style.fontSize="2rem",t.style.pointerEvents="none",document.body.appendChild(t),setTimeout(()=>document.body.removeChild(t),4e3)});
