<template>
  <div class="page">
    <div class="Header">
      <navigationBar :barBack="barBack"></navigationBar>
    </div>
    <div class="content">
      <div class="label">
        <div class="search">
          <search></search>
        </div>
        <div class="news-icon">
          <img src="../../../static/tabs/news.png"  mode="aspectFit">
        </div>
      </div>
      <div class="label">
        <bigItem></bigItem>
      </div>
      <div class="label">
        <items></items>
      </div>
    </div>
  </div>
</template>

<script>
import navigationBar from "../../components/navigationBar/navigationBar";
import search from "../../components/search/search";
import bigItem from "../../components/bigItem/bigItem";
import items from "../../components/items/items";
export default {
  data() {
    return {
      barBack: false
    };
  },
  components: {
    navigationBar,
    search,
    bigItem,
    items
  }
};
</script>

<style>
.page {
  position: absolute;
  width: 100%;
  height: 100%;
}
.Header {
  padding-top: 0.7rem;
  box-sizing: border-box;
  width: 100%;
}
.content {
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  box-sizing: border-box;
  width: 100%;
}
.label {
  padding-top: 0.3rem;
  box-sizing: border-box;
  width: 100%;
  position: relative;

}
.label .search {
  width: 85%;
  display: inline-block;
}
.news-icon {
  display: inline-block;
  width: 15%;
}
.news-icon img{
  width: 0.5rem;
  height: 0.5rem;
  padding-bottom: 25%;
  padding-left: 25%;
}
</style>
