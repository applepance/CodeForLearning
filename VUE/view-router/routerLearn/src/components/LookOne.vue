<template>
  <div class="look-one">{{msg}}
    <div class="go-two" @click="goTwo">去look2</div>
  </div>
</template>

<script>
export default {
  name: "LookOne",
  data() {
    return {
      msg: "看一眼nya"
    };
  },
  methods: {
    goTwo () {
      this.$router.push({path: '/nya/nya-two'})
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(to,from)
    next()
  }
};
</script>
