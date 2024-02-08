<template>
    <div>
        <GlobalDataWidget />
        <CoinTable />
    </div>
</template>
  
<script>
import GlobalDataWidget from './components/GlobalDataWidget.vue'
import CoinTable from './components/CoinTable.vue'

export default {
    name: 'App',
    components: {
        GlobalDataWidget,
        CoinTable
    }
}
</script>
  