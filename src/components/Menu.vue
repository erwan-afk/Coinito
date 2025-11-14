<!-- Menu.vue -->
<style scoped>
.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    max-width: 1200px;
    width: 100%;
    min-width: 0;
    /* Utilisez 100% pour occuper la largeur de l'écran ou ajustez selon vos besoins */
    margin: 0 auto;
    /* Centrer le menu horizontalement */
    padding: 0 20px;
    /* Ajoutez une marge intérieure pour l'espace autour du contenu */
    box-sizing: border-box;
    flex-shrink: 0;
}

.container_link {
    display: flex;
    align-items: center;
}

.container_link div:nth-child(-n + 2) {
    padding-right: 24px;
}

.container {
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    justify-content: center;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;
    pointer-events: none;
    box-sizing: border-box;
}

.container * {
    pointer-events: auto;
}

.container a:link,
.container a:visited,
.container a:hover,
.container a:active {
    text-decoration: none;
    color: white;

}

.logo_img {
    width: 24px;
}

.logo_title {
    font-size: 18px;
    font-weight: 600;
    padding-left: 8px;
    text-decoration: none;
}

.links {
    display: flex;
    align-items: center;
}

.links div {
    color: #999999;
    font-weight: 500;
    font-size: 16px;
    padding-left: 12px;
    transition: all 0.3s;
}

.links div:hover {
    color: #ffffff;
    transition: all 0.3s;
}



.links img {
    width: 20px;
}

.btn {
    border: 2px solid rgba(255, 255, 255, .2);
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-radius: 12px;
    background: none;
    padding: 0px;
}

.btn:hover {
    border: 2px solid rgba(255, 255, 255, .4);

    transition: all 0.3s;
}

.btn div {
    padding: 8px 24px;
    margin: 1px;
    font-weight: 600;
    font-size: 16px;
    color: white;
    background-image: linear-gradient(-120deg, rgba(253, 119, 2, 1) 0px, rgba(255, 187, 0, 1) 100%);
    border-radius: 10px;
}



@media (max-width: 768px) {
    .menu {
        padding: 0 15px;
        height: 60px;
    }

    .logo_img {
        width: 20px;
    }

    .logo_title {
        font-size: 16px;
    }

    .links {
        display: none;
    }

    .btn div {
        padding: 6px 14px;
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .menu {
        padding: 0 10px;
        height: 55px;
    }

    .logo_img {
        width: 18px;
    }

    .logo_title {
        font-size: 15px;
    }

    .btn div {
        padding: 5px 10px;
        font-size: 13px;
    }
}

@media (min-width: 1024px) {}
</style>

<template>
    <nav class="container" role="navigation" aria-label="Navigation principale">
        <div class="menu">
            <router-link class="container_link" to='/' @click="handleMenuLinkClick" aria-label="Retour à l'accueil">
                <img class="logo_img" src="../images/logo.png" alt="Logo Coinito">
                <div class="logo_title">Coinito</div>
            </router-link>
            <div class="container_link links" role="list">
                <router-link to='/coin/bitcoin' class="links" @click="handleMenuLinkClick"
                    aria-label="Voir les détails de Bitcoin">
                    <img src="../images/bitcoin-logo.png" alt="Logo Bitcoin">
                    <div>Bitcoin</div>
                </router-link>
                <router-link to='/coin/ethereum' class="links" @click="handleMenuLinkClick"
                    aria-label="Voir les détails d'Ethereum">
                    <img src="../images/eth-logo.png" alt="Logo Ethereum">
                    <div>Ethereum</div>
                </router-link>
                <router-link to='/coin/tether' class="links" @click="handleMenuLinkClick"
                    aria-label="Voir les détails de Tether">
                    <img src="../images/tether-logo.png" alt="Logo Tether">
                    <div>Tether</div>
                </router-link>
            </div>

            <a href="#second_section" class="btn" @click.prevent="scrollToSection"
                aria-label="Aller à la section de découverte">
                <div>Découvrir</div>
            </a>
        </div>
    </nav>
</template>

<script>
import { gsap } from 'gsap';

export default {
    name: 'Menu',
    data() {
        return {
            animationsStarted: false,
            revealCompleteListener: null,
            fallbackTimeout: null
        };
    },
    mounted() {
        // Initialiser les animations du menu
        this.initializeMenuAnimations();

        // Vérifier si on vient du menu (navigation interne)
        const skipLoading = sessionStorage.getItem('skipLoadingScreen');
        const timeoutDelay = skipLoading === 'true' ? 0 : 3000;

        // Écouter l'événement reveal-complete du LoadingScreen
        this.revealCompleteListener = () => {
            this.startMenuAnimations();
        };
        window.addEventListener('reveal-complete', this.revealCompleteListener);

        // Fallback si l'événement n'est pas reçu
        // Timeout à 0 si on vient du menu, 3000ms sinon
        this.fallbackTimeout = setTimeout(() => {
            if (!this.animationsStarted) {
                this.startMenuAnimations();
            }
            this.fallbackTimeout = null;
        }, timeoutDelay);
    },
    beforeUnmount() {
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
        handleMenuLinkClick() {
            // Marquer qu'on vient du menu pour éviter l'animation du loading screen
            sessionStorage.setItem('skipLoadingScreen', 'true');
        },
        initializeMenuAnimations() {
            // Masquer les éléments du menu au départ
            // Logo
            gsap.set('.menu .container_link:first-child', {
                opacity: 0,
                y: -20
            });

            // Conteneur des liens
            gsap.set('.menu .container_link.links', {
                opacity: 0,
                y: -20
            });

            // Bouton
            gsap.set('.menu .btn', {
                opacity: 0,
                scale: 0.8
            });

            console.log('✅ Éléments du menu masqués');
        },

        startMenuAnimations() {
            if (this.animationsStarted) {
                return;
            }

            this.animationsStarted = true;
            console.log('🎬 Starting menu animations...');

            // Créer la timeline d'animation du menu
            const menuTimeline = gsap.timeline();

            // 1. Logo apparaît en premier
            menuTimeline.to('.menu .container_link:first-child', {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out',
                onStart: () => console.log('📝 Logo animating...'),
                onComplete: () => console.log('✅ Logo done')
            })

                // 2. Conteneur des liens apparaît
                .to('.menu .container_link.links', {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power3.out',
                    onStart: () => console.log('📝 Links container animating...'),
                    onComplete: () => console.log('✅ Links container done')
                }, '-=0.3')

                // 3. Bouton "Découvrir" apparaît avec un scale
                .to('.menu .btn', {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: 'back.out(1.7)',
                    onStart: () => console.log('📝 Button animating...'),
                    onComplete: () => console.log('✅ Button done')
                }, '-=0.2');
        },

        scrollToSection(event) {
            const targetId = event.currentTarget.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
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
            }
        }
    }
};
</script>
