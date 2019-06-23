<template>
  <div class="search">
    <div class="search before">
      <div class="icon">
        <img src="../../../static/tabs/search.png" mode="aspectFit">
      </div>
    </div>
    <div class="font"><span>{{title}}</span></div>
    <div class="search after"></div>
  </div>
</template>

<script>
export default {
  props: {
    searchTitle: {
      type: String,
      default: "#痘痘#"
    }
  },
  data() {
    return {
      title: this.searchTitle
    };
  }
};
</script>

<style scoped>
.search {
  height: 1rem;
  width: 100%;
  position: relative;
}
.search .before {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 1rem;
  border-left: 1px solid #bfbfbf;
  border-top: 1px solid #bfbfbf;
  border-bottom: 1px solid #bfbfbf;
  border-bottom-left-radius: 50%;
  border-top-left-radius: 50%;
}
.before .icon {
  position: relative;
  height: 50%;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.icon img {
  width: 0.5rem;
  height: 0.5rem;
}
.font {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 1rem;
  right: 1rem;
  border-top: 1px solid #bfbfbf;
  border-bottom: 1px solid #bfbfbf;
  color: #bfbfbf;
  padding-top: 0.25rem;
}
.search .after {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 1rem;
  border-right: 1px solid #bfbfbf;
  border-top: 1px solid #bfbfbf;
  border-bottom: 1px solid #bfbfbf;
  border-bottom-right-radius: 50%;
  border-top-right-radius: 50%;
}
</style>

