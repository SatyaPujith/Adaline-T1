// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize parallax on page load
document.addEventListener('DOMContentLoaded', () => {
    initParallax();
    initScrollAnimations();
    initShapeAnimations();
    initButtonInteractions();
});

/**
 * Initialize parallax layers with scroll-based movement
 */
function initParallax() {
    const layers = document.querySelectorAll('.parallax-layer');
    
    layers.forEach((layer) => {
        const speed = parseFloat(layer.dataset.speed) || 0.5;
        
        gsap.to(layer, {
            y: (i, target) => {
                return ScrollTrigger.getVelocity(target) * speed * -0.1;
            },
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
                onUpdate: (self) => {
                    gsap.to(layer, {
                        y: self.getVelocity() * speed * -0.1,
                        overwrite: 'auto',
                        duration: 0.5,
                    });
                },
            },
        });
    });

    // Parallax background gradient
    gsap.to('.gradient-bg', {
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
        },
        y: 150,
        opacity: 0.5,
        ease: 'none',
    });
}

/**
 * Initialize scroll-triggered animations for content sections
 */
function initScrollAnimations() {
    // Hero content fade out
    gsap.to('.hero-content', {
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom center',
            scrub: 1,
        },
        opacity: 0,
        y: -100,
        scale: 0.9,
        ease: 'power2.inOut',
    });

    // Section animations
    const sections = document.querySelectorAll('.content-section');
    
    sections.forEach((section, index) => {
        const content = section.querySelector('.section-content');
        
        // Stagger entrance animations
        gsap.from(content, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 1,
            },
            opacity: 0,
            y: 80,
            scale: 0.95,
            ease: 'power2.out',
        });

        // Subtle parallax on section content
        gsap.to(content, {
            scrollTrigger: {
                trigger: section,
                start: 'top center',
                end: 'bottom center',
                scrub: 1,
            },
            y: -30,
            ease: 'none',
        });
    });
}

/**
 * Initialize continuous shape animations
 */
function initShapeAnimations() {
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const duration = 15 + index * 2;
        const rotation = index % 2 === 0 ? 360 : -360;
        
        // Continuous rotation
        gsap.to(shape, {
            rotation: rotation,
            duration: duration,
            repeat: -1,
            ease: 'none',
        });

        // Floating animation
        gsap.to(shape, {
            y: index % 2 === 0 ? -20 : 20,
            duration: 4 + index,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });

        // Opacity pulse
        gsap.to(shape, {
            opacity: 0.1 + (index % 3) * 0.05,
            duration: 3 + index,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });
    });
}

/**
 * Initialize button interactions
 */
function initButtonInteractions() {
    const button = document.querySelector('.cta-button');
    
    if (!button) return;

    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            duration: 0.3,
            scale: 1.08,
            ease: 'back.out',
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            duration: 0.3,
            scale: 1,
            ease: 'back.out',
        });
    });

    button.addEventListener('click', (e) => {
        // Ripple effect
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(button, {
            duration: 0.6,
            scale: 0.95,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut',
        });

        // Scroll to first content section
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: '.content-section',
                offsetY: 100,
            },
            ease: 'power2.inOut',
        });
    });
}

/**
 * Handle window resize to refresh ScrollTrigger
 */
window.addEventListener('resize', () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.refresh());
});

/**
 * Optimize performance on mobile
 */
function isMobile() {
    return window.innerWidth <= 768;
}

// Reduce animation complexity on mobile
if (isMobile()) {
    document.querySelectorAll('.shape').forEach(shape => {
        gsap.to(shape, {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: 'none',
        });
    });
}
