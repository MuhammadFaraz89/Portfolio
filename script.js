let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


// Highlight active link based on scroll position
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; // Current scroll position
        let offset = sec.offsetTop - 150; // Offset for active link
        let height = sec.offsetHeight; // Height of section
        let id = sec.getAttribute('id'); // Section ID

        // Check if the current section is in view
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Remove active class from all links
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active'); // Add active class
        }
    });
};

// Menu icon click event
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x'); // Toggle icon for animation
    navbar.classList.toggle('active');   // Toggle navbar display
};
