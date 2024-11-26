(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const d=()=>`
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
`,i=["Like our apple tree, our love grows stronger each day! 🌱","Can't wait to plant our tree together! 🌳","You're the sweetest apple in my orchard of love! 🍎","Our love story blooms like apple blossoms in spring! 🌸","Together, we'll grow a garden of endless love! 💖"];function m(){return i[Math.floor(Math.random()*i.length)]}document.querySelector("#app").innerHTML=`
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
`;let l=0;window.addEventListener("showLove",()=>{const s=document.querySelector(".container");s.style.animation="none",s.offsetHeight,s.classList.add("animate__animated","animate__heartBeat");const n=document.querySelector(".message");l=(l+1)%i.length,n.textContent=i[l],n.classList.add("animate__animated","animate__bounceIn");const t=document.createElement("div"),a=["❤️","💕","💓","💝","💗","💖"],e=["I love you!","Love you for ten thousand years","I like you so much","It's great to have you","You are the most important person in my life","I miss you every day","You are my little sun","Miss you so much","I miss you every minute","Love you every minute","Let's make a baby🍼","I wanna kiss you"];t.innerHTML=a[Math.ceil(Math.random()*(a.length-1))]+"&nbsp;"+e[Math.ceil(Math.random()*(e.length-1))],t.style.position="fixed",t.style.left=10+Math.random()*60+"vw",t.style.bottom=Math.random()*90+"vh",t.style.animation="float 4s ease-in-out",t.style.fontSize="0.7rem",t.style.pointerEvents="none",document.body.appendChild(t),setTimeout(()=>document.body.removeChild(t),4e3)});
