<template>
  <div class="navigationBar">
    <div class="back" v-show="back"></div>
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
      default: false
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

<style>
.navigationBar {
  position: absolute;
  background-color: #fff;
  width: 100%;
}
.back {
  height: 0.5rem;
  width: 0.5rem;
  border-bottom: 2px solid #000;
  border-left: 2px solid #000;
  display: inline-block;
  transform: rotateZ(45deg) scale(0.5) translate(0.5rem, -0.1rem);
}
.title {
  display: inline;
  margin-left: 0.3rem;
}
</style>
