<template>
  <div class="page">
    <div class="Header">
      <navigationBar :barBack="barBack"></navigationBar>
    </div>
    <div class="content">
      <div class="label">
        <search></search>
        <!-- <img src="../../../static/tabs/news.png"> -->
      </div>
    </div>
  </div>
</template>

<script>
import navigationBar from "../../components/navigationBar/navigationBar";
import search from "../../components/search/search";
export default {
  data() {
    return {
      barBack: false
    }
  },
  components: {
    navigationBar,
    search
  }
};
</script>

<style scoped>
.Header {
  position: absolute;
  margin-top: 0.7rem;
  box-sizing: border-box;
  width: 100%;
}
.content {
  position: absolute;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  box-sizing: border-box;
  width: 100%;
  margin-top: 1.5rem;
}
.label {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}
</style>
