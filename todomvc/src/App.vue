<template>
  <div>
    <counter/>
    <!-- <counterBrother :count="count"/> -->
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
      // count: 0
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
