$(document).ready(function(){
    // Popup animation
    $("#popup").fadeIn();
    $("#closePopup").click(function(){
        $("#popup").fadeOut();
    });

    // Dark Mode Toggle
    $("#darkModeToggle").click(function(){
        $("body").toggleClass("dark-mode");
    });

    // Typewriter Effect
    let i = 0, txt = "Elegant Calligraphy Designs";
    function typeWriter() {
        if (i < txt.length) {
            $(".typewriter").append(txt.charAt(i));
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
});
$(document).ready(function() {
    // Show welcome modal on page load
    // This creates a new Bootstrap Modal instance and displays it.
    var welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
    welcomeModal.show();

    // --- Header Writing Animation (Short Description) ---
    const descriptionElement = $('#animated-description'); // The HTML element where the text will be displayed
    const descriptions = [
        "Where elegance meets expression.",
        "Crafting beauty, stroke by stroke.",
        "Unleash the artist within you.",
        "The timeless art of beautiful writing."
    ];
    let currentIndex = 0;   // Keeps track of the current phrase being typed
    let charIndex = 0;      // Keeps track of the current character index within the phrase
    let isDeleting = false; // Flag to determine if text is being typed or deleted

    function typeEffect() {
        const currentText = descriptions[currentIndex]; // Get the current phrase

        if (isDeleting) {
            // If deleting, remove one character at a time
            descriptionElement.text(currentText.substring(0, charIndex - 1));
            charIndex--;
        } else {
            // If typing, add one character at a time
            descriptionElement.text(currentText.substring(0, charIndex + 1));
            charIndex++;
        }

        // Check if typing is complete
        if (!isDeleting && charIndex === currentText.length) {
            // Pause briefly after typing the full phrase, then set to start deleting
            setTimeout(() => isDeleting = true, 2000); // Pause for 2 seconds
        }
        // Check if deleting is complete
        else if (isDeleting && charIndex === 0) {
            // After deleting, reset flag, move to the next phrase, and pause before typing again
            isDeleting = false;
            currentIndex = (currentIndex + 1) % descriptions.length; // Cycle through phrases
            setTimeout(typeEffect, 500); // Short pause before starting the next phrase
            return; // Exit to prevent immediate re-call and ensure the pause
        }

        // Determine typing/deleting speed
        const typingSpeed = isDeleting ? 50 : 100; // Deletion is faster than typing
        setTimeout(typeEffect, typingSpeed); // Schedule the next character update
    }

    // Start the typing animation when the document is ready
    typeEffect();

    // --- Scroll-based Animations and General Interactions ---

    // Example of a simple scroll effect for the navbar (shrink or change color on scroll)
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('.navbar').addClass('navbar-scrolled'); // Add a class for scrolled state (if defined in CSS)
        } else {
            $('.navbar').removeClass('navbar-scrolled'); // Remove the class if at the top
        }
    });

    // Use Intersection Observer API for scroll-triggered entrance animations for category cards.
    // This makes elements animate as they come into the viewport, rather than all at once on load.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add classes that trigger the CSS animation (from Animate.css)
                $(entry.target).addClass('animate__animated animate__fadeInUp');
                // Stop observing this element once it has been animated to prevent re-triggering
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // The animation will trigger when 10% of the element is visible
    });

    // Loop through each category card and observe it
    $('.category-card').each(function() {
        observer.observe(this);
    });

    // Remove the 'animate__infinite' class from the footer WhatsApp icon after its initial animation loops.
    // This prevents the icon from constantly animating, making it more subtle after the initial draw.
    setTimeout(() => {
        $('.social-icons .fa-whatsapp').removeClass('animate__infinite');
    }, 5000); // The 5-second delay allows for a few 'tada' animations to complete.
});

 
