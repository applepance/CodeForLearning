<template>
  <div class="search">
    <div class="search-box-wrapper">
      <v-searchBox ref="searchBox" @query="onQueryChange"/>
    </div>
  </div>
</template>

<script>
import searchBox from '@/components/searchBox'
export default {
  components: {
    'v-searchBox': searchBox
  }
}
</script>

<style>

</style>
