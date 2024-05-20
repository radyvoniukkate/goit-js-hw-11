import{i as a,S as f}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}})();async function l(o){const e=`https://pixabay.com/api/?key=43969055-d0c46f522fb3643e2ec2eb3d1&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await(await fetch(e)).json()).hits}catch(s){throw new Error("Error fetching images:",s)}}const c=document.getElementById("loader");document.getElementById("search-form").addEventListener("submit",async function(o){o.preventDefault();const r=document.getElementById("search-input").value.trim();if(!r){a.error({title:"Error",message:"Please enter a search term!"});return}c.style.display="block";try{const e=await l(r);m(e)}catch(e){console.error("Error fetching images:",e),a.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{c.style.display="none"}});const d=new f(".image-link");function m(o){const r=document.getElementById("gallery");if(r.innerHTML="",o.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}o.forEach(e=>{const s=`
      <a href="${e.largeImageURL}" class="image-link">
        <div class="card">
          <img src="${e.webformatURL}" alt="${e.tags}">
          <div class="card-info">
            <div class="info-item">
              <p>Likes</p>
              <span>${e.likes}</span>
            </div>
            <div class="info-item">
              <p>Views</p>
              <span>${e.views}</span>
            </div>
            <div class="info-item">
              <p>Comments</p>
              <span>${e.comments}</span>
            </div>
            <div class="info-item">
              <p>Downloads</p>
              <span>${e.downloads}</span>
            </div>
          </div>
        </div>
      </a>
    `;r.insertAdjacentHTML("beforeend",s)}),d.refresh()}document.addEventListener("DOMContentLoaded",function(){d.refresh()});document.getElementById("search-form").addEventListener("submit",async function(o){o.preventDefault();const r=document.getElementById("search-input").value.trim();if(!r){iziToast.error({title:"Error",message:"Please enter a search term!"});return}try{const e=await l(r);m(e)}catch(e){console.error("Error fetching images:",e)}});document.addEventListener("DOMContentLoaded",function(){new SimpleLightbox(".image-link")});
//# sourceMappingURL=commonHelpers.js.map
