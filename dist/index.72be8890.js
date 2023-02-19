"use strict";
function main() {
    console.log("MAIN function has started...");
    const mobileNavMenuButton = document.getElementById("mobile-navigation-control");
    const navMenu = document.getElementById("navigation-menu");
    const primaryNavigation = document.getElementById("primary-navigation");
    const mobileNavMenuButtonTextValue = document.querySelector(".mobile-navigation-control-text-content");
    function toggleAriaExpandedOfElement(targetElement) {
        if (targetElement.getAttribute("aria-expanded") === "true") targetElement.setAttribute("aria-expanded", "false");
        else targetElement.setAttribute("aria-expanded", "true");
    }
    function toggleTextValueOfElement(targetElement) {
        if (targetElement.innerHTML === "Menu") targetElement.innerHTML = "Close";
        else targetElement.innerHTML = "Menu";
    }
    // function toggleActiveClassForNavigationMenu() {
    // 	navMenu.classList.toggle('active');
    // }
    function toggleActiveClassForNavigation() {
        primaryNavigation.classList.toggle("active");
    }
    mobileNavMenuButton.addEventListener("click", function() {
        console.log("menu button clicked...");
        toggleAriaExpandedOfElement(this);
        toggleTextValueOfElement(mobileNavMenuButtonTextValue);
        // toggleActiveClassForNavigationMenu();
        toggleActiveClassForNavigation();
    });
    document.addEventListener("touchstart", function() {}, true);
}
window.addEventListener("DOMContentLoaded", ()=>{
    console.log("DOM fully loaded and parsed.");
    console.log("Executing MAIN function -> ...");
    main();
});

//# sourceMappingURL=index.72be8890.js.map
