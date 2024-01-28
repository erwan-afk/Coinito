<style>
.global_stats {
  display: flex;

}
</style>

<template>
  <div class="global_stats">
    <h2 class="coinName"> Coins : {{ coinNb }}</h2>
    <h2 class="coinName"> Market : {{ market }}B €</h2>
    <h2 class="coinName"> 24h Vol : {{ Vol_24h }}B €</h2>
    <h2 class="coinName"> Dominance : {{ Dominance.largest1.key }} {{ Dominance.largest1.value.toFixed(1) }}% {{
      Dominance.largest2.key }} {{ Dominance.largest2.value.toFixed(1) }}%</h2>

  </div>
</template>

<script>

export default {
  name: 'GlobalDataWidget',
  props: {
    coinNb: Number,
    market: String,
    Vol_24h: String,
    Dominance: { type: Object },
  },

}
</script>

