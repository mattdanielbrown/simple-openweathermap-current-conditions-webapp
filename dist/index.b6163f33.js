"use strict";function main(){console.log("MAIN function has started...");const e=document.getElementById("mobile-navigation-control"),t=(document.getElementById("navigation-menu"),document.getElementById("primary-navigation")),n=document.querySelector(".mobile-navigation-control-text-content");e.addEventListener("click",(function(){var e;console.log("menu button clicked..."),"true"===(e=this).getAttribute("aria-expanded")?e.setAttribute("aria-expanded","false"):e.setAttribute("aria-expanded","true"),function(e){"Menu"===e.innerHTML?e.innerHTML="Close":e.innerHTML="Menu"}(n),t.classList.toggle("active")})),document.addEventListener("touchstart",(function(){}),!0)}window.addEventListener("DOMContentLoaded",(()=>{console.log("DOM fully loaded and parsed."),console.log("Executing MAIN function -> ..."),main()}));
//# sourceMappingURL=index.b6163f33.js.map