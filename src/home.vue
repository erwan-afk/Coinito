<style>
.first_section {
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-position: 0% 10%;
    overflow: hidden;
    position: relative;
    z-index: 10;

    padding-top: 10vh;

}

.second_section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 5vh;

}

.hero_section {
    width: 100%;
    gap: 50px;
    margin-top: -1vh;
    position: relative;
    z-index: 5;
    margin-bottom: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url("/src/images/bgherosection.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-bottom: 10vh;
}



.small_title {

    color: #FFBB00;
    filter: drop-shadow(0px 0px 2px #FFBB00);
    font-size: 16px;
    font-weight: 600;
    margin-top: 10vh;
    z-index: 1;
}

.main_title {
    margin-top: 10vh;

}






.gradient {
    background: radial-gradient(211.50000000000003% 113.1% at -66.4% 35.9%, var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, #000000)
        /* {"name":"BG Night"} */
        39.13195153221485%, var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, rgb(0, 0, 0))
        /* {"name":"BG Night"} */
        51.424349881796694%, var(--token-61e699c7-742b-47d0-bb16-f42065b06637, rgb(253, 119, 2))
        /* {"name":"Orange"} */
        67.59505338573997%, var(--token-be530db7-18b2-4273-89ab-17e94ce4aa9f, rgb(255, 187, 0))
        /* {"name":"Yellow"} */
        84.18320664414415%);
    inset: 0px;
    flex: 0 0 auto;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 105vh;
    overflow: hidden;
    border-radius: 0px 0px 20px 20px;
}

.ombre {
    inset: -200px 0px;
    position: absolute;
    z-index: -1;
    overflow: hidden;
    width: 100%;

}

.icon {

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, .1);
    border: 1px white solid;
    border-radius: 20px;
}

.third_section:first-child .icon {
    margin-top: 5vh;
}

.lueur_bleu {
    filter: drop-shadow(0px 0px 2px #0099FF);
}



.title {
    margin-top: 10vh;
}

.img_coin_left {
    position: absolute;
    width: 400px;
    --scale: 1;
    transform: translate(calc(-150% + var(--translate-x)), calc(-60% + var(--translate-y))) scale(var(--scale));
    transform-style: preserve-3d;
    transition: transform 1.5s cubic-bezier(0.05, 0.5, 0, 1);
    will-change: transform;
}

.img_coin_right {
    position: absolute;
    width: 450px;
    --scale: 1;
    transform: translate(calc(140% + var(--translate-x)), calc(20% + var(--translate-y))) scale(var(--scale));
    transform-style: preserve-3d;
    transition: transform 1.5s cubic-bezier(0.05, 0.5, 0, 1);
    will-change: transform;
}

.heroimage {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.heroimage img {
    border-radius: 20px;
    border: 4px solid rgba(255, 255, 255, 0.4);
    width: 50%;
    transition: transform 0.3s ease, border 0.3s ease;
    transform-origin: center center;
}

.heroimage img:hover {
    transform: scale(1.02);
    border: 4px solid rgba(255, 255, 255, .5);

}





@media (max-width: 768px) {}

@media (max-width: 500px) {

    .title {
        font-size: 40px;
        line-height: 55px;
    }

}
</style>

<template>
    <Menu />
    <div class="first_section" id="first_section" ref="first_section">
        <div class="small_title">Un projet Vue.js</div>
        <div class="main_title">Explorez le monde <br>des cryptos.</div>
        <div class="description">Coinito vous permet de trier, filtrer et rechercher <br>
            des informations sur les coins les plus connus du marché mondial. </div>
        <GlobalDataWidget />

        <img ref="imgCoinLeft" class="img_coin_left" src="./images/coin_left.png" alt="">
        <img ref="imgCoinRight" class="img_coin_right" src="./images/coin_right.png" alt="">

        <div class="gradient" ref="gradient"></div>

        <div class="ombre">
            <div
                style="width: 100vw; height: 100vh; border-radius: 0px; background-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.03) 11.872%, rgba(0, 0, 0, 0.1) 22.496%, rgba(0, 0, 0, 0.22) 32.184%, rgba(0, 0, 0, 0.35) 41.248%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.65) 58.752%, rgba(0, 0, 0, 0.78) 67.816%, rgba(0, 0, 0, 0.9) 77.504%, rgba(0, 0, 0, 0.97) 88.128%, rgb(0, 0, 0) 100%);">
            </div>
        </div>
    </div>

    <div class="hero_section">

        <div class="title">Partez à la découverte <br>
            de ces richesses.
        </div>
        <div class="description">Elle représentent une révolution financière en utilisant la blockchain pour <br>assurer
            la
            sécurité et la transparence des transactions, tout en défiant les <br>modèles traditionnels de monnaie émise
            par
            les gouvernements.
        </div>


        <div class="heroimage" @click="scrollToTable">
            <img src="./images/heroimage.jpg" alt="">
        </div>

    </div>

    <div class="second_section" id="second_section">




        <CoinTable />

    </div>

    <Footer />

</template>

<script>
import { gsap } from 'gsap'
import GlobalDataWidget from './components/GlobalDataWidget.vue'
import CoinTable from './components/CoinTable.vue'
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'

export default {
    name: 'App',
    components: {
        GlobalDataWidget,
        CoinTable,
        Menu,
        Footer
    },
    data() {
        return {
            animationsStarted: false,
            revealCompleteListener: null,
            fallbackTimeout: null
        };
    },
    mounted() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);

        const smooth = 0.03;
        const initialTranslateX = (window.innerWidth / 2) * smooth;
        const initialTranslateY = (window.innerHeight / 2) * smooth;

        // Appliquer les transformations initiales
        if (this.$refs.imgCoinLeft && this.$refs.imgCoinRight) {
            this.$refs.imgCoinLeft.style.setProperty('--translate-x', `${initialTranslateX}px`);
            this.$refs.imgCoinLeft.style.setProperty('--translate-y', `${initialTranslateY}px`);

            this.$refs.imgCoinRight.style.setProperty('--translate-x', `${-initialTranslateX}px`);
            this.$refs.imgCoinRight.style.setProperty('--translate-y', `${-initialTranslateY}px`);

            this.mousemoveHandler = (event) => {
                const translateX = (event.clientX - window.innerWidth / 2) * smooth;
                const translateY = (event.clientY - window.innerHeight / 2) * smooth;

                // Appliquer les transformations basées sur la souris en utilisant des variables CSS
                this.$refs.imgCoinLeft.style.setProperty('--translate-x', `${translateX}px`);
                this.$refs.imgCoinLeft.style.setProperty('--translate-y', `${translateY}px`);

                this.$refs.imgCoinRight.style.setProperty('--translate-x', `${translateX}px`);
                this.$refs.imgCoinRight.style.setProperty('--translate-y', `${translateY}px`);
            };

            document.addEventListener('mousemove', this.mousemoveHandler);
        }

        // Initialiser les animations des éléments
        this.initializeAnimations();

        // Vérifier si on vient du menu (navigation interne)
        const skipLoading = sessionStorage.getItem('skipLoadingScreen');
        const timeoutDelay = skipLoading === 'true' ? 0 : 2800;

        if (skipLoading === 'true') {
            // Si on vient du menu, lancer les animations immédiatement sans attendre le loading screen
            console.log('🚀 Home mounted - starting animations immediately (navigation from menu)');
            // Nettoyer le flag après utilisation
            sessionStorage.removeItem('skipLoadingScreen');
        }

        // Comportement normal : attendre l'événement reveal-complete du LoadingScreen
        this.revealCompleteListener = () => {
            this.startHomeAnimations();
        };
        window.addEventListener('reveal-complete', this.revealCompleteListener);

        // Vérifier si le loading screen a déjà été complété (fallback)
        // Timeout à 0 si on vient du menu, 2800ms sinon
        this.fallbackTimeout = setTimeout(() => {
            if (!this.animationsStarted) {
                this.startHomeAnimations();
            }
            this.fallbackTimeout = null;
        }, timeoutDelay);
    },

    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
        if (this.mousemoveHandler) {
            document.removeEventListener('mousemove', this.mousemoveHandler);
        }
        if (this.revealCompleteListener) {
            window.removeEventListener('reveal-complete', this.revealCompleteListener);
        }
        // Nettoyer le timeout fallback si présent
        if (this.fallbackTimeout) {
            clearTimeout(this.fallbackTimeout);
            this.fallbackTimeout = null;
        }
    },
    methods: {
        handleResize() {
            let height = this.$refs.first_section.clientHeight;
            this.$refs.gradient.style.height = (height + 50) + 'px';
        },

        scrollToTable() {
            const targetElement = document.querySelector('#second_section');
            if (targetElement) {
                // Utiliser Lenis pour le smooth scroll si disponible
                if (this.$root.lenis) {
                    this.$root.lenis.scrollTo(targetElement, {
                        offset: 0,
                        duration: 1.5,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                    });
                } else {
                    // Fallback vers le scroll natif
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        },

        initializeAnimations() {
            // Masquer tous les éléments au départ
            gsap.set([
                '.main_title',
                '.description',
                '.small_title',
                '.global_stats'
            ], {
                opacity: 0,
                y: 30
            });

            // Les images de coins commencent à scale 0.8 en utilisant la variable CSS --scale
            // Cela préserve les transformations translate() existantes
            const coinImages = gsap.utils.toArray(['.img_coin_left', '.img_coin_right']);
            coinImages.forEach(img => {
                gsap.set(img, {
                    opacity: 0,
                    '--scale': 0.8
                });
            });

            console.log('✅ Éléments de home.vue masqués');
        },

        startHomeAnimations() {
            if (this.animationsStarted) {
                return; // Éviter de lancer l'animation plusieurs fois
            }

            this.animationsStarted = true;
            console.log('🎬 Starting home elements animation sequence...');

            // Créer la timeline d'animation
            const homeTimeline = gsap.timeline();

            // Attendre 0.5s après la révélation pour commencer
            homeTimeline.to({}, { duration: 0.0 })

                // 1. Main title apparaît en premier
                .to(gsap.utils.toArray('.main_title'), {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    onStart: () => console.log('📝 Main title animating...'),
                    onComplete: () => console.log('✅ Main title done')
                }, '')

                // 2. Description apparaît ensuite
                .to(gsap.utils.toArray('.description'), {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    onStart: () => console.log('📝 Description animating...'),
                    onComplete: () => console.log('✅ Description done')
                }, '-=0.2')

                // 3. Small title apparaît
                .to(gsap.utils.toArray('.small_title'), {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    onStart: () => console.log('📝 Small title animating...'),
                    onComplete: () => console.log('✅ Small title done')
                }, '-=0.5')

                // 4. Images des coins apparaissent avec scale (en utilisant la variable CSS --scale)
                .to(gsap.utils.toArray('.img_coin_left, .img_coin_right'), {
                    opacity: 1,
                    '--scale': 1,
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.1,
                    onStart: () => console.log('📝 Coin images animating...'),
                    onComplete: () => console.log('✅ Coin images done')
                }, '-=1.5')

                // 5. GlobalDataWidget apparaît
                .to(gsap.utils.toArray('.global_stats'), {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    onStart: () => console.log('📝 GlobalDataWidget animating...'),
                    onComplete: () => console.log('✅ GlobalDataWidget done')
                }, '-=1.2')

                // 6. Animation des cartes crypto (si présentes)
                .to(gsap.utils.toArray('.coin-card'), {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    stagger: 0.1,
                    onStart: () => console.log('📝 Coin cards animating...'),
                    onComplete: () => console.log('✅ Coin cards done')
                }, '-=0.2');
        }
    }
}
</script>
