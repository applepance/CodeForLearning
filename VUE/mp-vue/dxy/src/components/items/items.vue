<template>
  <div class="items">

  </div>
</template>

<script>
export default {
  props: {
    propsItems: {
      type: Array,
      default: [
        {
          img: '../../static/tabs/add.png',
          title: '问医生',
          badge: true
        },
        {
          img: '../../static/tabs/add.png',
          title: '问医生',
          badge: true
        },
        {
          img: '../../static/tabs/add.png',
          title: '问医生',
          badge: true
        },
        {
          img: '../../static/tabs/add.png',
          title: '问医生',
          badge: true
        },
        {
          img: '../../static/tabs/add.png',
          title: '问医生',
          badge: true
        },
        {
          img: '../../static/tabs/add.png',
          title: '问医生',
          badge: true
        },
        {
          img: '../../static/tabs/add.png',
          title: '问医生',
          badge: true
        },
        {
          img: '../../static/tabs/add.png',
          title: '问医生',
          badge: true
        }
      ]
    }
  },
  data() {
    return {
      items: this.propsItems
    };
  }
};
</script>

<style scoped>
.items {
  width: 100%;
  position: relative;
  display: flex;
}
.item {
  flex: 1;
  position: relative;
}
</style>

