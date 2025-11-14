<template>
  <section class="loading-screen">
    <!-- Overlay noir avec découpe transparente -->
    <div class="reveal-mask">
      <svg class="mask-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="revealMask">
            <!-- Fond blanc (visible = noir à l'écran) -->
            <rect width="100" height="100" fill="white" />
            <!-- SVG personnalisé au centre (noir = transparent = révèle le contenu) -->
            <g class="reveal-shape" transform="translate(50, 50)">
              <rect x="-7.5" y="-7.5" width="15" height="15" rx="2" fill="black" />
            </g>
          </mask>
        </defs>
        <!-- Rectangle noir avec le masque appliqué -->
        <rect width="100" height="100" fill="black" mask="url(#revealMask)" />
      </svg>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'LoadingScreen',
  data() {
    return {
      hasAnimated: false,
      preloader: null,
      timeoutId: null
    };
  },
  mounted() {
    // Démarrer l'animation du masque de révélation
    this.$nextTick(() => {
      setTimeout(() => {
        this.startAnimation();
      }, 100);
    });

    // Fallback au cas où l'animation ne se lance pas
    this.timeoutId = setTimeout(() => {
      if (!this.hasAnimated) {
        console.log('⚠️ Animation fallback triggered');
        this.forceComplete();
      }
    }, 10000);
  },
  beforeUnmount() {
    this.cleanup();
  },
  methods: {
    startAnimation() {
      console.log('🎭 Starting reveal mask animation...');

      // Créer la timeline d'animation
      const preloader = gsap.timeline({
        paused: false,
        onComplete: () => {
          console.log('✅ Reveal animation completed');
          sessionStorage.setItem('loadingScreenAnimated', 'true');
          document.body.classList.add('loading-animated');
          this.hasAnimated = true;
          this.$emit('animation-complete');
        }
      });

      this.preloader = preloader;

      /*
       * ANIMATION DE RÉVÉLATION PAR SCALE (~4.5 secondes)
       * =================================================
       *
       * Le carré avec corner radius s'agrandit progressivement
       * pour révéler tout le site. Il grandit beaucoup plus grand
       * pour couvrir n'importe quel écran (même 16:9 ultra-wide)
       *
       * 0.0s → 0.5s : Délai initial (écran noir, carré invisible)
       * 0.5s → 1.8s : Le carré scale de 0 à 0.5
       * 1.8s → 2.4s : BOUNCE - Le carré se rétracte à 0.43
       * 2.4s → 4.0s : Le carré scale jusqu'à 10 (couvre largement tout)
       * 4.0s → 4.5s : Le masque noir disparaît complètement
       */

      // Phase 1 : Carré invisible au départ
      gsap.set('.reveal-shape', {
        scale: 0,
        transformOrigin: 'center center'
      });

      // Phase 2 : Attendre un peu avant de commencer
      preloader.to('.reveal-shape', {
        duration: 0.5
      })
        // Phase 3 : Le carré s'agrandit
        .to('.reveal-shape', {
          scale: 0.5,
          duration: 1.3,
          ease: 'power1.inOut'
        })
        // Phase 4 : BOUNCE - Le carré se rétracte légèrement
        .to('.reveal-shape', {
          scale: 0.43,
          duration: 0.6,
          ease: 'power1.inOut'
        })
        // Phase 5 : Le carré s'agrandit énormément pour couvrir tout écran
        .to('.reveal-shape', {
          scale: 10,
          duration: 1.6,
          ease: 'power1.inOut'
        })
        // Phase 5 : Faire disparaître complètement le masque
        .to('.reveal-mask', {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => {
            // Émettre un événement personnalisé pour déclencher les animations de home.vue
            window.dispatchEvent(new CustomEvent('reveal-complete'));
          }
        });

      // Lancer l'animation
      setTimeout(() => {
        preloader.play();
      }, 100);
    },

    forceComplete() {
      console.log('🔧 Force completing animation...');
      gsap.set('.reveal-mask', { opacity: 0 });
      gsap.set('.reveal-shape', { scale: 10 });
      window.dispatchEvent(new CustomEvent('reveal-complete'));
      this.$emit('animation-complete');
    },

    cleanup() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      if (this.preloader && !this.hasAnimated) {
        this.preloader.kill();
      }
    }
  }
};
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  pointer-events: none;
}

.reveal-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.mask-svg {
  width: 100%;
  height: 100%;
  /* Force le SVG à couvrir tout en gardant les proportions */
}

.reveal-shape {
  /* Le carré commence invisible et s'agrandit par scale */
  transform-origin: 0 0;
}
</style>