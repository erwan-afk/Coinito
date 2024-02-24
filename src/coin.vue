<style>
.flex_container {
    display: flex;
    flex-direction: column;
    width: 100%;

}

.coin-section {
    position: relative;
    padding: 10vh 0px;
}


.flex_info {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 30px;
    padding-bottom: 30px;
}

.gradient2 {
    background: radial-gradient(211.50000000000003% 113.1% at -66.4% 35.9%, var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, #000000)
        /* {"name":"BG Night"} */
        39.13195153221485%, var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, rgb(0, 0, 0))
        /* {"name":"BG Night"} */
        51.424349881796694%, var(--token-61e699c7-742b-47d0-bb16-f42065b06637, rgb(2, 12, 253))
        /* {"name":"Orange"} */
        80%, var(--token-be530db7-18b2-4273-89ab-17e94ce4aa9f, rgb(0, 255, 0))
        /* {"name":"Yellow"} */
        100%);
    inset: -70px 0px;
    overflow: hidden;
    pointer-events: none;
    display: flex;
    z-index: -1;
    width: 100%;
    overflow: hidden;
    border-radius: 20px;
    position: absolute;
    padding-bottom: 70px;

}

.gradient3 {
    background: radial-gradient(211.50000000000003% 113.1% at -66.4% 35.9%, var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, #000000)
        /* {"name":"BG Night"} */
        39.13195153221485%, var(--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb, rgb(0, 0, 0))
        /* {"name":"BG Night"} */
        51.424349881796694%, var(--token-61e699c7-742b-47d0-bb16-f42065b06637, rgb(2, 12, 253))
        /* {"name":"Orange"} */
        80%, var(--token-be530db7-18b2-4273-89ab-17e94ce4aa9f, rgb(255, 0, 0))
        /* {"name":"Yellow"} */
        100%);
    inset: -70px 0px;
    overflow: hidden;
    pointer-events: none;
    display: flex;
    z-index: -1;
    width: 100%;
    overflow: hidden;
    border-radius: 20px;
    position: absolute;
    padding-bottom: 70px;

}

.collab {
    margin-top: 10vh !important;
}

.icon {
    margin-top: 5vh;
}

@media (min-width: 1055px) {

    .flex_container {
        display: flex;
        flex-direction: row;
        gap: 30px;
        width: 100%;
    }

    .flex_info {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: end;
        gap: 30px;
        padding-bottom: 30px;

    }

    .flex_info:nth-child(2) {
        align-items: start;

    }

    .detailsinfo,
    .chart_container {
        flex: 1;
    }



}
</style>

<template>
    <Menu />
    <div>


        <div class="coin-section" id="first_section">

            <div class="flex_container" ref="coin_section">

                <div class="flex_info">

                    <CoinDetails :id="coinId" @price-change="handlePriceChange"></CoinDetails>
                </div>
                <div class="flex_info">
                    <CoinChart :id="coinId"></CoinChart>
                    <CoinTimeTableFollow :id="coinId"></CoinTimeTableFollow>

                </div>

                <div style=" height: 100%;" :class="{ 'gradient2': isPositiveChange, 'gradient3': !isPositiveChange }"
                    ref="gradient2"></div>
                <div class="ombre">
                    <div
                        style="width: 100vw; height: 100vh; border-radius: 0px; background-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.03) 11.872%, rgba(0, 0, 0, 0.1) 22.496%, rgba(0, 0, 0, 0.22) 32.184%, rgba(0, 0, 0, 0.35) 41.248%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.65) 58.752%, rgba(0, 0, 0, 0.78) 67.816%, rgba(0, 0, 0, 0.9) 77.504%, rgba(0, 0, 0, 0.97) 88.128%, rgb(0, 0, 0) 100%);">
                    </div>
                </div>

            </div>

        </div>



        <div class="second_section" id="second_section">
            <div class="title">Plongez-vous dans l’histoire <br>
                de cette monnaie
            </div>
            <div>
                <CoinDesc :id="coinId"></CoinDesc>
            </div>

        </div>






        <div class="third_section" id="third_section">
            <div class="title">Internet,<br>
                notre terrain de jeu.
            </div>

            <div class="icon">
                <img src="./images/logo_imac.png" alt="">
            </div>

            <div class="description">Dans une logique de professionnalisation, les étudiants <br>d’ <b>IMAC</b> mettent en
                application
                leurs connaissances en réalisant<br> de multiples projets. Aujourd’hui le sujet est le developpement<br>
                d’une
                web
                app
                dynamique avec un framework.
            </div>


            <div class="title collab">Une collaboration future ?
            </div>

            <div class="share">
                <div class="icon">
                    <img src="./images/logo_instagram.png" alt="">
                </div>
                <div class="icon">
                    <img src="./images/logo_github.png" alt="">
                </div>
                <div class="icon">
                    <img src="./images/logo_erwan.png" alt="">
                </div>
                <div class="icon">
                    <img src="./images/logo_gmail.png" alt="">
                </div>
                <div class="icon">
                    <img src="./images/logo_linkedin.png" alt="">
                </div>
            </div>


            <div class="icon thanks">Merci !</div>

            <div class="copyright">Copyright © 2024 Erwan THIBAUD. <br>
                All rights reserved.</div>

        </div>


    </div>
</template>
  
<script>

import CoinDetails from './components/CoinDetails.vue'
import CoinChart from './components/CoinChart.vue'
import CoinTimeTableFollow from './components/CoinTimeTableFollow.vue'
import CoinDesc from './components/CoinDesc.vue'
import Menu from './components/Menu.vue'


export default {
    name: 'Coin',
    components: {
        CoinDetails,
        CoinChart,
        CoinTimeTableFollow,
        CoinDesc,
        Menu,
    },
    data() {
        return {
            coinId: null,
            isPositiveChange: true,
        };
    },
    created() {
        this.coinId = this.$route.params.id;
    },
    methods: {
        handlePriceChange(isPositiveChange) {
            // Mettre à jour la propriété en fonction de la tendance de la variation de prix
            this.isPositiveChange = isPositiveChange;
        }
    }




};
</script>
  