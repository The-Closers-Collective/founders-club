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

// document.getElementById("contactForm").addEventListener("submit", async function(event) {
//   event.preventDefault();
  
//   const nameInput = document.getElementById("fullName");
//   const emailInput = document.getElementById("emailAddress");
//   const submitButton = document.getElementById("submitButton");
//   const successMessage = document.getElementById("submitSuccessMessage");
//   const errorMessage = document.getElementById("submitErrorMessage");

//   // Validate email
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(emailInput.value)) {
//     emailInput.setCustomValidity("Email is not valid.");
//     return;
//   } else {
//     emailInput.setCustomValidity("");
//   }

//   // Prepare form data
//   const formData = new FormData(event.target);

//   // Submit the form via POST
//   try {
//     submitButton.disabled = true;
//     const response = await fetch("https://icloseevent.activehosted.com/proc.php", {
//       method: "POST",
//       body: formData,
//     });

//     if (response.ok) {
//       // Show success message
//       successMessage.classList.remove("d-none");
//       errorMessage.classList.add("d-none");
//     } else {
//       // Show error message
//       successMessage.classList.add("d-none");
//       errorMessage.classList.remove("d-none");
//     }
//   } catch (error) {
//     // Show error message
//     successMessage.classList.add("d-none");
//     errorMessage.classList.remove("d-none");
//   } finally {
//     submitButton.disabled = false;
//   }
// });

//# sourceMappingURL=scripts.js.map
