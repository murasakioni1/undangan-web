document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const scrollElements = document.querySelectorAll('.couple-section, .event-details, .map-section, .gallery-section, .wishes-section, footer');

    // === 1. Countdown Timer ===
    function updateCountdown() {
        const weddingDate = new Date(2025, 11, 12, 9, 0, 0).getTime();
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            document.querySelector('.date').textContent = "Telah Dilaksanakan";
            clearInterval(countdownInterval);
        }
    }
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);

    // === 2. Smooth Scroll ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // === 3. Scroll Animation ===
    function checkScroll() {
        scrollElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.85;
            if (elementTop < triggerPoint) {
                el.classList.add('animated');
            }
        });
    }

    scrollElements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
    });

    checkScroll();
    window.addEventListener('scroll', checkScroll);

    // === 4. Music Player Autoplay ===
    const music = document.getElementById('bg-music');
    if (music) {
        music.muted = false;
        const playPromise = music.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                document.addEventListener('click', () => {
                    music.muted = false;
                    music.play();
                }, { once: true });
            });
        }
    }
});
