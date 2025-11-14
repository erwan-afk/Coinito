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
      lenis: null,
      isInitialLoad: true
    };
  },
  watch: {
    '$route'(to, from) {
      // Si ce n'est pas le chargement initial et qu'on vient du menu, ne pas afficher le loading screen
      if (!this.isInitialLoad) {
        const skipLoading = sessionStorage.getItem('skipLoadingScreen');
        if (skipLoading === 'true') {
          console.log('🚀 Route change - skipping loading screen (navigation from menu)');
          this.showLoadingScreen = false;
          // Ne pas nettoyer le flag ici, laisser home.vue le faire après utilisation
        }
      }
    }
  },
  mounted() {
    // Vérifier si on doit sauter le loading screen au chargement initial
    const skipLoading = sessionStorage.getItem('skipLoadingScreen');
    if (skipLoading === 'true') {
      console.log('🚀 App mounted - skipping loading screen (navigation from menu)');
      this.showLoadingScreen = false;
      // Ne pas nettoyer le flag ici, laisser home.vue le faire après utilisation
    } else {
      console.log('🚀 App mounted - showing loading screen');
    }

    // Initialiser Lenis pour le smooth scroll
    this.initLenis();

    // Marquer que le chargement initial est terminé après un court délai
    setTimeout(() => {
      this.isInitialLoad = false;
    }, 100);
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
