/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

function detectScrollPos() {
	let scrollPos = window.scrollY;
	let backToTop = document.querySelector('.back-to-top-link');
	console.log(backToTop);
	console.log('scrollPos: ' + scrollPos);
	if(scrollPos > 100) {
		backToTop.classList.add('in');
		setTimeout(function() {
			backToTop.classList.add('visible');
		},10);
	} else {
		backToTop.classList.remove('visible');
		backToTop.addEventListener('transitionend', function() {
			backToTop.classList.remove('in');
		}, {
			capture: false,
			once: true,
			passive: false
		});
	}
}




window.addEventListener('DOMContentLoaded', event => {

	var timeId2 = null;
    function startScroll() {
		clearTimeout(timeId2);
		timeId2 = setTimeout(detectScrollPos, 250);
	}

	window.addEventListener('scroll', startScroll);



    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

