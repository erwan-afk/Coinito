<template>

    <div class="third_section" id="third_section">
        <div class="title">Internet,<br>
            notre terrain de jeu.
        </div>

        <div class="icon internet">
            <img class="" src="../images/logo_imac.png" alt="">
        </div>

        <div class="description">Dans une logique de professionnalisation, les étudiants <br>d’ <b>IMAC</b> mettent en
            application
            leurs connaissances en réalisant<br> de multiples projets. Aujourd’hui le sujet est le developpement<br>
            d’une
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
            <img class="img_vue" src="../images/vue_logo.png" alt="">


        </div>
        <svg width="303" height="278" viewBox="0 0 303 278" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="151.5" cy="139" rx="151.5" ry="139" fill="#00BB7D" />
        </svg>

        <div class="title footer-title">Une collaboration future ?
        </div>

        <div class="share">
            <div class="icon">
                <a href="https://www.instagram.com/erwan.tbd/" target="_blank">
                    <img src="../images/logo_instagram.png" alt="">
                </a>
            </div>
            <div class="icon">
                <a href="https://github.com/erwan-afk" target="_blank">
                    <img src="../images/logo_github.png" alt="">
                </a>
            </div>
            <div class="icon">
                <img src="../images/logo_erwan.png" alt="">
            </div>
            <div class="icon">
                <a href="mailto:thibauderwan40@gmail.com" target="_blank">
                    <img src="../images/logo_gmail.png" alt="">
                </a>
            </div>
            <div class="icon">
                <a href="https://www.linkedin.com/in/erwan-thibaud-8723101a6" target="_blank">
                    <img src="../images/logo_linkedin.png" alt="">
                </a>
            </div>
        </div>


        <div class="icon thanks">Merci !</div>

        <div class="copyright">Copyright © 2024 Erwan THIBAUD.<br>
            All rights reserved.</div>



    </div>
</template>

<script>
export default {
    name: 'Footer',
    mounted() {

        const imgVueFooter = document.querySelector('.img_vue');

        document.addEventListener('mousemove', (event) => {
            const smooth = 0.03;
            const translateX = (event.clientX - window.innerWidth / 2) * smooth;
            const translateY = (event.clientY - window.innerHeight / 2) * smooth;

            imgVueFooter.style.setProperty('--translate-x', `${translateX}px`);
            imgVueFooter.style.setProperty('--translate-y', `${translateY}px`);
        });
    }
};
</script>
