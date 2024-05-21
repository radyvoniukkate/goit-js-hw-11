import{S as l,i as a}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d=new l(".image-link");function f(s){const o=document.getElementById("gallery");if(o.innerHTML="",s.length===0){console.log("No images found"),a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const n=s.map(t=>`
    <a href="${t.largeImageURL}" class="image-link">
      <div class="card">
        <img src="${t.webformatURL}" alt="${t.tags}">
        <div class="card-info">
          <div class="info-item">
            <p>Likes</p>
            <span>${t.likes}</span>
          </div>
          <div class="info-item">
            <p>Views</p>
            <span>${t.views}</span>
          </div>
          <div class="info-item">
            <p>Comments</p>
            <span>${t.comments}</span>
          </div>
          <div class="info-item">
            <p>Downloads</p>
            <span>${t.downloads}</span>
          </div>
        </div>
      </div>
    </a>
  `).join("");o.insertAdjacentHTML("beforeend",n),d.refresh()}async function m(s){const n=`https://pixabay.com/api/?key=43969055-d0c46f522fb3643e2ec2eb3d1&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await(await fetch(n)).json()).hits}catch(t){throw new Error("Error fetching images:",t)}}const c=document.getElementById("loader");document.getElementById("search-form").addEventListener("submit",async function(s){s.preventDefault();const o=document.getElementById("search-input").value.trim();if(!o){a.error({title:"Error",message:"Please enter a search term!"});return}c.style.display="block";try{const n=await m(o);console.log("Images fetched",n),f(n)}catch(n){console.error("Error fetching images:",n),a.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{c.style.display="none"}});document.addEventListener("DOMContentLoaded",function(){new l(".image-link")});
//# sourceMappingURL=commonHelpers.js.map
