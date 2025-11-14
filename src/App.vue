<style scoped></style>
<template>
  <div>
    <LoadingScreen v-if="showLoadingScreen" @animation-complete="onLoadingComplete" />
    <router-view />
  </div>
</template>

<script>
import LoadingScreen from './components/LoadingScreen.vue';
import Lenis from 'lenis';

export default {
  name: 'App',
  components: {
    LoadingScreen
  },
  data() {
    return {
      showLoadingScreen: true,
      lenis: null
    };
  },
  mounted() {
    console.log('🚀 App mounted - showing loading screen');

    // Initialiser Lenis pour le smooth scroll
    this.initLenis();
  },
  beforeUnmount() {
    // Nettoyer Lenis
    if (this.lenis) {
      this.lenis.destroy();
      // Retirer les classes Lenis du HTML
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
    }
  },
  methods: {
    onLoadingComplete() {
      console.log('✅ Loading complete - hiding loading screen');
      this.showLoadingScreen = false;
    },
    initLenis() {
      // Créer une instance Lenis
      this.lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      // Ajouter les classes Lenis au HTML
      document.documentElement.classList.add('lenis');
      document.documentElement.classList.add('lenis-smooth');

      // Fonction de rafraîchissement pour l'animation
      const raf = (time) => {
        this.lenis.raf(time);
        requestAnimationFrame(raf);
      };

      // Démarrer l'animation
      requestAnimationFrame(raf);

      // Rendre Lenis accessible globalement pour les composants enfants
      this.$root.lenis = this.lenis;
    }
  }
}
</script>
