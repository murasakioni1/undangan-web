document.addEventListener('DOMContentLoaded', function() {
    // Initialize elements
    const scrollElements = document.querySelectorAll('.couple-section, .event-details, .map-section, .gallery-section, .wishes-section, footer');
    
    // 1. Countdown Timer
    function updateCountdown() {
        // Set wedding date (YYYY, MM-1, DD, HH, MM, SS)
        const weddingDate = new Date(2025, 11, 12, 9, 0, 0).getTime();
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        // Calculate days, hours, minutes, seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update display
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        
        // Update date automatically if needed
        if (distance < 0) {
            document.querySelector('.date').textContent = "Telah Dilaksanakan";
            clearInterval(countdownInterval);
        }
    }
    
    // Run countdown immediately and then every second
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // 2. Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 3. Scroll Animation
    function checkScroll() {
        scrollElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.85;
            
            if (elementTop < triggerPoint) {
                el.classList.add('animated');
            }
        });
    }
    
    // Set initial state
    scrollElements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
    });
    
    // Check on load and scroll
    checkScroll();
    window.addEventListener('scroll', checkScroll);
    
    // 4. Music Player - Auto play (optional)
    const musicPlayer = document.querySelector('audio');
    if (musicPlayer) {
        // musicPlayer.play().catch(e => console.log("Auto-play prevented:", e));
    }
});