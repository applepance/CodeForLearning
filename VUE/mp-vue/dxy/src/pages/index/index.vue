<template>
  <div class="page">
    <div class="Header">
      <navigationBar></navigationBar>
    </div>
    <div class="content">
      首页
    </div>
  </div>
</template>

<script>
import navigationBar from "../../components/navigationBar/navigationBar";
export default {
  components: {
    navigationBar
  }
};
</script>

<style scoped>
.Header {
  position: absolute;
  margin-top: 0.5rem;
  width: 100%;
}
.content {
  position: absolute;
  margin-top: 1.3rem;
}
</style>
