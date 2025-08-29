<template>
  <div id="app">
    <Header />
    <Hero />
    <Products />
    <About />
    <Reservation />
    <Orders />
    <History />
    <Location />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Products from './components/Products.vue'
import About from './components/About.vue'
import Reservation from './components/Reservation.vue'
import Orders from './components/Orders.vue'
import History from './components/History.vue'
import Location from './components/Location.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Products,
    About,
    Reservation,
    Orders,
    History,
    Location,
    Footer
  },
  mounted() {
    this.setMinDate();
    this.initSlideshow();
    this.initIntersectionObserver();
  },
  methods: {
    setMinDate() {
      const dateInput = document.querySelector('input[type="date"]');
      if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
      }
    },
    initSlideshow() {
      let currentSlide = 0;
      const slides = document.querySelectorAll('.slide');
      
      function showNextSlide() {
        if (slides.length > 0) {
          slides[currentSlide].classList.remove('active');
          currentSlide = (currentSlide + 1) % slides.length;
          slides[currentSlide].classList.add('active');
        }
      }
      
      setInterval(showNextSlide, 4000);
    },
    initIntersectionObserver() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, observerOptions);

      document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
      });
    }
  }
}
</script>