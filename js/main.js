'use strict';

function main() {
	console.log('MAIN function has started...');
	
	
	let timeout = false, // holder for timeout id
			delay   = 250, // delay after event is "complete" to run callback
			calls   = 0;

	// window.resize callback function
	function getDimensions() {
		let screenWidth = window.innerWidth;
		calls += 1;
		if (screenWidth >= 600) {
			if (mobileNavigationIsActive === true) {
				mobileNavigationIsActive = false;
				mobileNavMenuButton.setAttribute('aria-expanded', 'false');
				mobileNavMenuButtonTextValue.innerHTML = "Menu";
				primaryNavigation.classList.remove('active');
			}
		}
	}

	
	
	const mobileNavMenuButton = document.getElementById('mobile-navigation-control');
	const navMenu = document.getElementById('navigation-menu');
	const primaryNavigation = document.getElementById('primary-navigation');
	const mobileNavMenuButtonTextValue = document.querySelector('.mobile-navigation-control-text-content');
	
	let mobileNavigationIsActive = false;
	
	function toggleMobileNavigationIsActive() {
		mobileNavigationIsActive = mobileNavigationIsActive !== true;
	}
	function toggleAriaExpandedOfElement(targetElement) {
		if (targetElement.getAttribute('aria-expanded') === 'true') {
			targetElement.setAttribute('aria-expanded', 'false');
		} else {
			targetElement.setAttribute('aria-expanded', 'true');
		}
	}
	function toggleTextValueOfElement(targetElement) {
		if (targetElement.innerHTML === "Menu") {
			targetElement.innerHTML = "Close";
		} else {
			targetElement.innerHTML = "Menu";
		}
	}
	// function toggleActiveClassForNavigationMenu() {
	// 	navMenu.classList.toggle('active');
	// }
	function toggleActiveClassForNavigation() {
		primaryNavigation.classList.toggle('active');
	}
	
	mobileNavMenuButton.addEventListener('click', function () {
		toggleMobileNavigationIsActive();
		toggleAriaExpandedOfElement(this);
		toggleTextValueOfElement(mobileNavMenuButtonTextValue);
		// toggleActiveClassForNavigationMenu();
		toggleActiveClassForNavigation();
	});
	
	document.addEventListener("touchstart", function () {}, true);
	
	// window.resize event listener
	window.addEventListener('resize', function () {
		// clear the timeout
		clearTimeout(timeout);
		// start timing for event "completion"
		timeout = setTimeout(getDimensions, delay);
	});
}

window.addEventListener('DOMContentLoaded', () => {
	console.log('DOM fully loaded and parsed.');
	console.log('Executing MAIN function -> ...');
	main();
});
