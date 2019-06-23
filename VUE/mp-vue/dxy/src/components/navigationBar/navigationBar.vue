<template>
  <div class="navigationBar">
    <div class="back" v-if="back"></div>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  props: {
    barTitle: {
      type: String,
      default: "丁香医生"
    },
    barBack: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      title: this.barTitle,
      back: this.barBack
    };
  }
};
</script>

<style scoped>
.navigationBar {
  background-color: white;
  width: 100%;
  padding-left: 0.3rem;
}
.back {
  height: 0.5rem;
  width: 0.5rem;
  border-bottom: 2px solid #000;
  border-left: 2px solid #000;
  display: inline-block;
  transform: rotateZ(45deg) scale(0.5) translate(0.4rem, -0);
}
.title {
  display: inline;
  position: relative;
  margin-left: 0.3rem;
}
</style>
