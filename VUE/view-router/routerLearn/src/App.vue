<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>导航：
      <router-link to='/'>首页</router-link>
      |
      <router-link :to='{name: "Look", params: {id: 123}}'>看看</router-link>
      <!-- <router-link to='/nya/666'>看看</router-link> -->
      |
      <router-link to='/nya/nya-one'>nya1</router-link>
      |
      <router-link to='/nya/nya-two'>nya2</router-link>
      |
      <router-link to='/go-back'>重定向</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
