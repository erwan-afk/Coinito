<style>
.coinImg {
  width: 30px;
}

.coinDivImg {
  display: flex;
  align-items: center;
  padding-right: 20px;
}

.coin-row {
  display: table-row;
  border-top: 1px #eff2f5 solid;
}

.coinInfos {
  display: flex;
  flex-direction: row;
  padding: 10px 0px;

}

.cell {
  display: table-cell;
  text-align: right;
}

.cell:first-child,
.cell:nth-child(2) {
  display: table-cell;
  text-align: left;
}

.th td {
  font-weight: 600;
}



.coinTitle {
  display: flex;
  flex-direction: column;

  align-items: flex-start;
}

.coinSymbol {
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  color: #64748B;

}


.coinName {
  font-size: 14px;
  font-weight: 600;
  color: #334155;

}



@media (min-width: 1024px) {
  .coinTitle {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .coinSymbol {
    padding-left: 10px;
  }
}
</style>

<template>
  <tr class="coin-row">
    <td class="cell">{{ market_cap_rank }}</td>
    <td class="coinInfos">
      <div class="coinDivImg"><img class="coinImg" v-bind:src="image" /></div>
      <div class="coinTitle">
        <h2 class="coinName">{{ name }}</h2>
        <h2 class="coinSymbol">{{ symbol }}</h2>
      </div>
    </td>
    <td class="cell">{{ formattedPrice.formattedCurrentPrice }}€</td>
    <td class="cell">{{ formattedPrice.formattedPriceChangePercentage24h }}%</td>
    <td class="cell">{{ formattedPrice.formattedTotalVolume }}€</td>
    <td class="cell">{{ formattedPrice.formattedMarketCap }}€</td>



  </tr>
</template>

<script>

export default {
  name: 'CoinRow',
  props: {
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
        formattedPriceChangePercentage24h: internationalNumberFormat.format(this.price_change_percentage_24h.toFixed(1)),
        formattedMarketCap: internationalNumberFormat.format(this.market_cap),
        formattedTotalVolume: internationalNumberFormat.format(this.total_volume),

      };
    }
  }
}
</script>

