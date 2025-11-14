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

<style>
.third_section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 10vh;
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

.footer-title {
    margin-top: 3vh;
    font-family: var(--fallback-font);
    color: white;
    font-size: 32px;
    text-align: center;
    letter-spacing: -2px;
    line-height: 40px;
    z-index: 1;
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
    transform: translate(calc(264px + var(--translate-x)), calc(30px + var(--translate-y)));
    transform-style: preserve-3d;
    transition: transform 1.5s cubic-bezier(0.05, 0.5, 0, 1);
    will-change: transform;
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

.description {
    color: rgba(255, 255, 255, .7);
    font-weight: 400;
    font-size: 20px;
    line-height: 35px;
    text-align: center;
    margin: 20px 0;
    z-index: 1;
}

.description_framework {
    color: rgba(255, 255, 255, .7);
    font-weight: 400;
    font-size: 20px;
    line-height: 35px;
}

.internet {
    margin-top: 5vh;
}

/* Responsive Design */
@media (max-width: 768px) {
    .third_section {
        margin-top: 5vh;
        padding: 0 20px;
    }

    .title, .footer-title {
        font-size: 32px;
        line-height: 40px;
        letter-spacing: -1px;
    }

    .framework {
        margin: 8vh 0px;
        padding: 30px 20px;
        gap: 20px;
    }

    .framework .title {
        width: 100%;
        font-size: 32px;
    }

    .framework img {
        position: relative;
        transform: none;
        margin-top: 20px;
        width: 80px;
        height: auto;
    }

    .third_section svg {
        transform: translate(50px, -50px);
        width: 150px;
        height: auto;
    }

    .share {
        flex-wrap: wrap;
        gap: 15px;
        justify-content: center;
    }

    .share div:not(:last-child) {
        margin-right: 0;
    }

    .thanks {
        margin-top: 5vh;
        font-size: 28px;
        padding: 20px 30px;
    }

    .copyright {
        margin: 3vh 0px;
        font-size: 16px;
        padding: 20px 30px;
        line-height: 25px;
    }

    .description {
        font-size: 16px;
        line-height: 25px;
        margin: 15px 0;
    }

    .description_framework {
        font-size: 16px;
        line-height: 25px;
    }
}

@media (max-width: 480px) {
    .third_section {
        padding: 0 15px;
    }

    .title, .footer-title {
        font-size: 24px;
        line-height: 30px;
    }

    .framework {
        padding: 20px 15px;
    }

    .framework .title {
        font-size: 24px;
    }

    .thanks {
        font-size: 24px;
        padding: 15px 20px;
    }

    .copyright {
        font-size: 14px;
        padding: 15px 20px;
    }
}
</style>

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
