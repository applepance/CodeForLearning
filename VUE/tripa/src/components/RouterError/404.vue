<template>
  <div class="md-example-child md-example-child-result-page md-example-child-result-page-0">
    <md-result-page
      type="lost">
    </md-result-page>
  </div>
</template>

<script>
import {ResultPage} from 'mand-mobile'

export default {
  name: 'result-page-demo',
  /* DELETE */
  title: '404',
  /* DELETE */
  components: {
    [ResultPage.name]: ResultPage,
  },
}

</script>

<style lang="stylus">
.md-example-child-result-page-0
  background #ffffff
  position absolute
  top 50%
  left 50%
  transform translate(-50%,-50%)
  margin-top -100%
</style>