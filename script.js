document.addEventListener('DOMContentLoaded', function() {
    // mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });
    
    // smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // lose mobile menu if open
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            alert(`Thank you, ${name}! Your message has been received. We'll contact you at ${email} soon.`);
            
            // reset the form
            contactForm.reset();
        });
    }
    
    // add animation class when elements come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .team-member');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    // run once on page load
    animateOnScroll();
    
    // run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // add animation for schedule table rows
    const scheduleRows = document.querySelectorAll('.schedule-table tr');
    scheduleRows.forEach((row, index) => {
        row.style.opacity = '0';
        row.style.transform = 'translateX(-20px)';
        row.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            row.style.opacity = '1';
            row.style.transform = 'translateX(0)';
        }, 100);
    });
});
