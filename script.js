document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');

    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            event.preventDefault();
        } else {
            alert('Thank you for your message!');
        }
    });

    // Toggle navigation on mobile
    navToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
            }
        });
    });
});
