<template>
  <div>
    <counter/>
    <!-- <counterBrother :i="a"/> -->
  </div>
</template>

<script>
// 两个兄弟组件,共享 count 数据
// count 不应该属于Counter组件私有，data(){}，props
import Counter from './components/Counter';
// import CounterBrother from './components/CounterBrother';
export default {
  data() {
    return {
      // a: 1
    }
  },
  components: {
    'counter': Counter,
    // 'counterBrother': CounterBrother
  },
  methods: {
    // incrementCount () {
    //   this.count++;
    // }
  },
}
</script>

<style>

</style>
