<template>
  <div id="app">
    <button @click="decrement">-</button>
    clicked {{$store.state.count}} times, count is {{evenOrOdd}}
    <button @click="increment">+</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
// 借
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  computed:
    // 如果有多次要用到奇偶判断怎么办？
    mapGetters(["evenOrOdd"]),
  methods: mapActions([
    "increment",
    "decrement",
    "incrementIfOdd",
    "incrementAsync"
  ])
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
