/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

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

// Booking form submission
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('submitBooking')) {
        document.getElementById('submitBooking').addEventListener('click', function () {
            const form = document.getElementById('bookingForm');
            
            // Basic form validation
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to your server
            // For demo purposes, we'll just show a success message
            
            // Clear the form
            form.reset();
            
            // Display success message
            const modalBody = document.querySelector('#bookingModal .modal-body');
            const originalContent = modalBody.innerHTML;
            
            modalBody.innerHTML = `
                <div class="text-center">
                    <i class="fas fa-check-circle text-success" style="font-size: 3rem;"></i>
                    <h4 class="mt-3">Booking Successful!</h4>
                    <p>Thank you, ${name}! We've received your session request for ${date} (${time}).</p>
                    <p>We'll contact you at ${email} within 24 hours to confirm your appointment.</p>
                </div>
            `;
            
            // Change footer button to close only
            const modalFooter = document.querySelector('#bookingModal .modal-footer');
            const originalFooter = modalFooter.innerHTML;
            
            modalFooter.innerHTML = `
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
            `;
            
            // Reset modal when hidden
            const bookingModal = document.getElementById('bookingModal');
            bookingModal.addEventListener('hidden.bs.modal', function () {
                modalBody.innerHTML = originalContent;
                modalFooter.innerHTML = originalFooter;
            }, { once: true });
        });
    }
});