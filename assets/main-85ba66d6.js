(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();let c=!0,l=(o=500)=>{document.documentElement.classList.contains("lock")?d(o):u(o)},d=(o=500)=>{if(c){const n=document.querySelectorAll("[data-lp]");setTimeout(()=>{n.forEach(i=>{i.style.paddingRight=""}),document.body.style.paddingRight="",document.documentElement.classList.remove("lock")},o),c=!1,setTimeout(function(){c=!0},o)}},u=(o=500)=>{if(c){const n=document.querySelectorAll("[data-lp]"),i=window.innerWidth-document.body.offsetWidth+"px";n.forEach(s=>{s.style.paddingRight=i}),document.body.style.paddingRight=i,document.documentElement.classList.add("lock"),c=!1,setTimeout(function(){c=!0},o)}};function m(){console.log("Меню бургер"),document.querySelector(".icon-menu")&&document.addEventListener("click",function(o){c&&o.target.closest(".icon-menu")&&(l(),document.documentElement.classList.toggle("menu-open"))})}setTimeout(()=>{},0);console.log("скріпт працює");window.FLS=!0;m();
//# sourceMappingURL=main-85ba66d6.js.map
