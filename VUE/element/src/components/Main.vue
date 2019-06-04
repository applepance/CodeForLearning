<template>
  <div class="main-content">
    <Header></Header>
    <Slide></Slide>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Slide from '@/components/common/Slide'
export default {
  name: 'mianContent',
  data () {
    return {
      msg: 'hello world'
    }
  },
  components: {
    Header,
    Slide
  }
}
</script>
