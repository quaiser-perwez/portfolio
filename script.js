document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
        
        // Toggle body overflow when menu is open
        if (navList.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navList.classList.contains('active')) {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
            
            // Add active class to clicked link
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Add hover effect for desktop
    if (window.innerWidth > 768) {
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) rotateX(10deg)';
                this.style.boxShadow = '0 15px 25px rgba(0, 255, 0, 0.3)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
            });
        });
    }
    
    // Logo hover effect
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseenter', function() {
        this.querySelector('.logo-text').style.textShadow = '0 0 15px var(--green)';
    });
    
    logo.addEventListener('mouseleave', function() {
        this.querySelector('.logo-text').style.textShadow = '0 0 10px rgba(0, 255, 0, 0.3)';
    });
});

// Add 3D hover effect to the hero image
const heroImage = document.querySelector('.hero-image');
const imageWrapper = document.querySelector('.image-wrapper');

if (heroImage && imageWrapper) {
    imageWrapper.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 20;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
        heroImage.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    imageWrapper.addEventListener('mouseenter', () => {
        heroImage.style.transition = 'none';
        document.querySelector('.image-border').style.animation = 'rotateBorder 4s linear infinite';
    });

    imageWrapper.addEventListener('mouseleave', () => {
        heroImage.style.transition = 'all 0.5s ease';
        heroImage.style.transform = 'rotateY(0deg) rotateX(0deg)';
        document.querySelector('.image-border').style.animation = 'rotateBorder 8s linear infinite';
    });
}

// 3D Hexagon Tilt Effect
const hexagon = document.querySelector('.hexagon');

if (hexagon) {
    hexagon.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 20;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
        hexagon.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    hexagon.addEventListener('mouseenter', () => {
        hexagon.style.transition = 'none';
        document.querySelector('.hexagon-border').style.animation = 'rotateGradient 4s linear infinite';
    });

    hexagon.addEventListener('mouseleave', () => {
        hexagon.style.transition = 'all 0.5s ease';
        hexagon.style.transform = 'rotateY(0deg) rotateX(0deg)';
        document.querySelector('.hexagon-border').style.animation = 'rotateGradient 8s linear infinite';
    });
}

// Skill Items Animation
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Button Hover Effects
const buttons = document.querySelectorAll('.btn-custom');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
});

// Project Filtering
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 3D Tilt Effect for Project Cards
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 20;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
            card.style.transform = `translateY(-10px) rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transition = 'all 0.5s ease';
            card.style.transform = 'translateY(-10px) rotateX(0deg) rotateY(0deg)';
        });
    });
});

// Back to Top Button Animation
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.querySelector('.back-to-top-btn');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.visibility = 'visible';
                backToTopBtn.style.transform = 'translateY(0)';
            } else {
                backToTopBtn.style.opacity = '0';
                backToTopBtn.style.visibility = 'hidden';
                backToTopBtn.style.transform = 'translateY(20px)';
            }
        });
        
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            
            // Simulate submission
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i>';
                this.reset();
                
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i>';
                }, 2000);
            }, 1500);
        });
    }

    // Floating Tech Items
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 255, 136, 0.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});

// Back to Top Button Animation
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.querySelector('.back-to-top-btn');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.visibility = 'visible';
                backToTopBtn.style.transform = 'translateY(0)';
            } else {
                backToTopBtn.style.opacity = '0';
                backToTopBtn.style.visibility = 'hidden';
                backToTopBtn.style.transform = 'translateY(20px)';
            }
        });
        
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            
            // Simulate submission
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i>';
                this.reset();
                
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i>';
                }, 2000);
            }, 1500);
        });
    }

    // Floating Tech Items
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 255, 136, 0.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});

// Contact Form Animation
document.addEventListener('DOMContentLoaded', function() {
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        
        input.addEventListener('focus', () => {
            group.querySelector('.underline').style.width = '100%';
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                group.querySelector('.underline').style.width = '0';
            }
        });
    });

    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                
                setTimeout(() => {
                    submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
                    submitBtn.disabled = false;
                    this.reset();
                    
                    // Reset labels
                    document.querySelectorAll('.form-group label').forEach(label => {
                        if (!label.previousElementSibling.value) {
                            label.style.top = '10px';
                            label.style.fontSize = '1rem';
                            label.style.color = '#777';
                        }
                    });
                }, 2000);
            }, 1500);
        });
    }

    // 3D Effect on Form Container
    const formContainer = document.querySelector('.contact-form-container');
    
    // if (formContainer) {
    //     formContainer.addEventListener('mousemove', (e) => {
    //         const xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    //         const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    //         formContainer.querySelector('.contact-form').style.transform = `translateY(-10px) rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
    //     });
        
    //     formContainer.addEventListener('mouseenter', () => {
    //         formContainer.querySelector('.contact-form').style.transition = 'none';
    //     });
        
    //     formContainer.addEventListener('mouseleave', () => {
    //         formContainer.querySelector('.contact-form').style.transition = 'all 0.5s ease';
    //         formContainer.querySelector('.contact-form').style.transform = 'translateY(-10px) rotateX(0deg) rotateY(0deg)';
    //     });
    // }
});