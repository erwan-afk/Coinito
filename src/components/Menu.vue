<!-- Menu.vue -->
<style scoped>
.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    max-width: 1200px;
    width: 100%;
    /* Utilisez 100% pour occuper la largeur de l'écran ou ajustez selon vos besoins */
    margin: 0 auto;
    /* Centrer le menu horizontalement */
    padding: 0 20px;
    /* Ajoutez une marge intérieure pour l'espace autour du contenu */
}

.container_link {
    display: flex;
    align-items: center;
}

.container_link div:nth-child(-n + 2) {
    padding-right: 24px;
}

.container {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    color: white;
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

.btn div {
    padding: 8px 24px;
    margin: 1px;
    font-weight: 600;
    font-size: 16px;
    color: white;
    background-image: linear-gradient(-120deg, rgba(253, 119, 2, 1) 0px, rgba(255, 187, 0, 1) 100%);
    border-radius: 10px;
}

/* Media query pour rendre le menu flexible en fonction de la largeur de l'écran */
@media (max-width: 768px) {
    .menu {
        flex-direction: column;
        /* Changez la direction en colonne pour les écrans plus petits */
        align-items: flex-start;
        /* Alignez les éléments à gauche */
    }
}
</style>

<template>
    <div class="container">
        <div class="menu">
            <router-link class="container_link" to='/'>
                <img class="logo_img" src="../images/logo.png" alt="">
                <div class="logo_title">Coinito</div>
            </router-link>
            <div class="container_link">
                <router-link to='/coin/bitcoin' class="links">
                    <img src="../images/bitcoin-logo.png" alt="">
                    <div>Bitcoin</div>
                </router-link>
                <router-link to='/coin/ethereum' class="links">
                    <img src="../images/eth-logo.png" alt="">
                    <div>Ethereum</div>
                </router-link>
                <router-link to='/coin/tether' class="links">
                    <img src="../images/tether-logo.png" alt="">
                    <div>Tether</div>
                </router-link>
            </div>

            <a href="#second_section" class="btn">
                <div>Découvrir</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu'
};
</script>



  
