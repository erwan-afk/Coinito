<style>
.coinImg {
  width: 30px;
}

.coinDivImg {
  display: flex;
  align-items: center;
  padding-right: 30px;
}

.coin-row {
  display: flex;
  border-top: .5px rgba(255, 255, 255, .4) solid;
  align-items: center;
  padding: 0px 50px;
  justify-content: space-between;
  text-decoration: none;
  color: white;
}

.coin-row:hover {
  background-color: rgba(255, 255, 255, .1);
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.coinInfos {
  display: flex;
  flex-direction: row;
  padding: 12px 0px;
  flex: 1;
  align-self: stretch;
  align-items: center;

}

.cell {
  display: flex;
  text-align: right;
  align-self: stretch;
  align-items: center;
  flex: 1;
  font-weight: 400;
  font-size: 16px;
}

.cell:first-child {
  font-weight: 600;
  font-size: 20px;
}


.cell:not(:first-child):not(:nth-child(2)) {
  justify-content: flex-end;
}


.cell:first-child,
.cell:nth-child(2) {
  display: flex;
  text-align: left;
}

.th td {
  font-weight: 600;
}



.coinTitle {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-items: center;
}

.coinSymbol {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  color: rgba(255, 255, 255, .7);
  padding-left: 10px;

}


.coinName {
  font-size: 20px;
  font-weight: 600;
  color: white;

}

.neg {
  color: #ff0000;
  filter: drop-shadow(0px 0px 2px #ff0000);


}

.neg:before {
  width: 25px;
  padding-top: 3px;
  padding-right: 3px;
  content: url('../images/fleche_haut.svg');
  color: inherit !important;

}

.pos {
  color: #00FF1A;
  filter: drop-shadow(0px 0px 2px #00FF1A);
}

.pos:before {

  width: 25px;
  padding-top: 3px;
  content: url('../images/fleche_bas.svg');
  border-radius: 10px;
  color: inherit !important;

}
</style>

<template>
  <router-link :to="'coin/' + id" class="coin-row">
    <!-- <router-link :to="{ path: `/coin/${id}` }">Voir les détails</router-link>-->
    <td class="cell">{{ market_cap_rank }}</td>
    <td class="coinInfos">
      <div class="coinDivImg"><img class="coinImg" v-bind:src="image" /></div>
      <div class="coinTitle">
        <h2 class="coinName">{{ name }}</h2>
        <h2 class="coinSymbol">{{ symbol }}</h2>
      </div>
    </td>
    <td class="cell">{{ formattedPrice.formattedCurrentPrice }}€</td>
    <td class="cell percent"
      :class="{ 'pos': price_change_percentage_24h >= 0, 'neg': price_change_percentage_24h < 0 }">
      {{ formattedPrice.formattedPriceChangePercentage24h }}%</td>
    <td class="cell">{{ formattedPrice.formattedTotalVolume }}€</td>
    <td class="cell">{{ formattedPrice.formattedMarketCap }}€</td>

  </router-link>
</template>

<script>

export default {
  name: 'CoinRow',
  props: {
    id: String,
    market_cap_rank: Number,
    image: { type: String, default: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" },
    name: { type: String, required: true },
    symbol: String,
    current_price: Number,
    price_change_percentage_24h: Number,
    total_volume: Number,
    market_cap: Number,
  },
  computed: {
    formattedPrice() {
      const internationalNumberFormat = new Intl.NumberFormat('fr-FR')
      return {
        formattedCurrentPrice: internationalNumberFormat.format(this.current_price),
        formattedPriceChangePercentage24h: internationalNumberFormat.format(Math.abs(this.price_change_percentage_24h.toFixed(1))),
        formattedMarketCap: internationalNumberFormat.format(this.market_cap),
        formattedTotalVolume: internationalNumberFormat.format(this.total_volume),

      };
    }
  }
}
</script>
