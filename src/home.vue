<style>
.first_section {
    /*background-image: url("./images/background_first_section.png"); */
    /*background: radial-gradient(50% 75% at 50% 100%, rgba(255, 187, 0, 0.2) 0%, rgba(255, 187, 0, 0) 100%);*/
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-position: 0% 10%;

}

.second_section {
    /*background-image: url("./images/background_first_section.png"); */
    /*background: radial-gradient(50% 75% at 50% 100%, rgba(255, 187, 0, 0.2) 0%, rgba(255, 187, 0, 0) 100%);*/
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 5vh;

}

.third_section {
    /*background-image: url("./images/background_first_section.png"); */
    /*background: radial-gradient(50% 75% at 50% 100%, rgba(255, 187, 0, 0.2) 0%, rgba(255, 187, 0, 0) 100%);*/
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 10vh;


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
    margin-top: 3vh;
    font-family: var(--fallback-font);
    color: white;
    font-size: 106px;
    text-align: center;
    letter-spacing: -3px;
    line-height: 100px;
    z-index: 1;
}

.title {
    margin-top: 3vh;
    font-family: var(--fallback-font);
    color: white;
    font-size: 64px;
    text-align: center;
    letter-spacing: -3px;
    line-height: 70px;
    z-index: 1;
}

.description {
    color: rgba(255, 255, 255, .7);
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    margin-top: 5vh;
    z-index: 1;
    line-height: 35px;
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
    border-radius: 20px;
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

.share {
    display: flex;
    margin-top: 5vh;
}

.share div:not(:last-child) {
    margin-right: 35px;
}

.thanks {
    margin-top: 10vh;

    color: white;
    font-weight: 600;
    font-size: 40px;
    padding: 30px 50px;

}

.copyright {
    margin: 5vh 0px;
    color: rgba(255, 255, 255, .7);
    text-align: center;
    line-height: 35px;
    font-weight: 500;
    font-size: 20px;
    padding: 30px 50px;
}

.framework {
    margin: 15vh 0px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    text-align: left;
    padding: 50px;
    z-index: 1;
    background-color: rgba(255, 255, 255, .1);
    backdrop-filter: blur(100px);
    gap: 35px;

}

.framework img {
    position: absolute;
    transform: translate(264px, 30px);
}

.third_section svg {
    position: absolute;
    z-index: -1;
    transform: translate(140px, -100px);

}

.framework .title {
    text-align: left;
    width: 480px;
    margin-top: 0px;
    font-size: 64px;
}

.description_framework {
    color: rgba(255, 255, 255, .7);
    font-weight: 400;
    font-size: 20px;
    line-height: 35px;
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
    </div>

    <div class="second_section" id="second_section">
        <div class="title">Partez à la découverte <br>
            de ces richesses.
        </div>
        <div class="description">Elle représentent une révolution financière en utilisant la blockchain pour <br>assurer la
            sécurité et la transparence des transactions, tout en défiant les <br>modèles traditionnels de monnaie émise par
            les gouvernements.
        </div>

        <div class="gradient" ref="gradient"></div>

        <div class="ombre">
            <div
                style="width: 100vw; height: 100vh; border-radius: 0px; background-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.03) 11.872%, rgba(0, 0, 0, 0.1) 22.496%, rgba(0, 0, 0, 0.22) 32.184%, rgba(0, 0, 0, 0.35) 41.248%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.65) 58.752%, rgba(0, 0, 0, 0.78) 67.816%, rgba(0, 0, 0, 0.9) 77.504%, rgba(0, 0, 0, 0.97) 88.128%, rgb(0, 0, 0) 100%);">
            </div>
        </div>

        <CoinTable />

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
            leurs connaissances en réalisant<br> de multiples projets. Aujourd’hui le sujet est le developpement<br> d’une
            web
            app
            dynamique avec un framework.
        </div>

        <div class="icon framework">
            <div class="title">Le Framework <br>JavaScript <br>
                Évolutif
            </div>
            <div class="description_framework">Un framework accessible,<br>
                performant et polyvalent pour <br>construire des interfaces utilisateur.
            </div>
            <img src="./images/vue_logo.png" alt="">


        </div>
        <svg width="303" height="278" viewBox="0 0 303 278" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="151.5" cy="139" rx="151.5" ry="139" fill="#00BB7D" />
        </svg>

        <div class="title">Une collaboration future ?
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




    <!--
     -->
</template>
  
<script>
import GlobalDataWidget from './components/GlobalDataWidget.vue'
import CoinTable from './components/CoinTable.vue'
import Menu from './components/Menu.vue'

export default {
    name: 'App',
    components: {
        GlobalDataWidget,
        CoinTable,
        Menu
    },
    mounted() {
        this.matchHeight()
    },
    methods: {
        matchHeight() {
            let height = this.$refs.first_section.clientHeight;
            this.$refs.gradient.style.height = (height + 50) + 'px';

        }
    }

}
</script>
  