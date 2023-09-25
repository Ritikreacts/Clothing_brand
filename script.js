
function whatsApp(number){
    // Specify your WhatsApp phone number
    var phoneNumber = '+918625972852';

            // Specify the pretyped message
            var message = encodeURIComponent("I want to choose size for Product Number #" + number);

            // Create the WhatsApp link with the phone number and pretyped message
            var whatsappLink = 'https://wa.me/' + phoneNumber + '?text=' + message;

            // Redirect the user to WhatsApp
            window.location.href = whatsappLink;
};



    document.addEventListener('DOMContentLoaded', function () {
        const menuCheckbox = document.getElementById('menu-checkbox');
    
        // Close the menu when clicking anywhere outside of it
        document.addEventListener('click', function (event) {
            if (!menuCheckbox.checked) {
                return; // Menu is already closed, do nothing
            }
    
            if (!event.target.closest('#hamburger-menu') && !event.target.closest('#hamburger-button')) {
                menuCheckbox.checked = false;
            }
        });
        const menuItems = document.querySelectorAll('#hamburger-menu a');
        menuItems.forEach(function (menuItem) {
            menuItem.addEventListener('click', function () {
                menuCheckbox.checked = false;
    });

    
       
});
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// ********SLIDESHOW****************

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides() {
    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Wrap around to the last slide if at the beginning
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    // Wrap around to the first slide if at the end
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    // Show the current slide
    slides[slideIndex].style.display = 'block';

    // Auto advance to the next slide every 5 seconds
    setTimeout(function() {
        plusSlides(1);
    }, 8000);
}

// Pause automatic transition when manually navigating
prevButton.addEventListener('click', function() {
    clearTimeout();
});

nextButton.addEventListener('click', function() {
    clearTimeout();
});
