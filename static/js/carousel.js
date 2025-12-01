class Carousel {
    constructor() {
        this.slides = document.querySelectorAll('.carousel-slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.currentSlide = 0;
        this.autoplayInterval = null;
        this.autoplayDelay = 5000;

        this.init();
    }

    init() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        this.updateSlideInfo();
        this.startAutoplay();

        document.querySelector('.carousel-container').addEventListener('mouseenter', () => {
            this.stopAutoplay();
        });

        document.querySelector('.carousel-container').addEventListener('mouseleave', () => {
            this.startAutoplay();
        });
    }

    goToSlide(index) {
        this.slides[this.currentSlide].classList.remove('active');
        this.indicators[this.currentSlide].classList.remove('active');

        this.currentSlide = index;

        this.slides[this.currentSlide].classList.add('active');
        this.indicators[this.currentSlide].classList.add('active');

        this.updateSlideInfo();
    }

    nextSlide() {
        let next = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(next);
    }

    prevSlide() {
        let prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prev);
    }

    updateSlideInfo() {
        document.getElementById('currentSlide').textContent =
            String(this.currentSlide + 1).padStart(2, '0');
        document.getElementById('totalSlides').textContent =
            String(this.slides.length).padStart(2, '0');
    }

    startAutoplay() {
        this.autoplayInterval = setInterval(() => this.nextSlide(), this.autoplayDelay);
    }

    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
});