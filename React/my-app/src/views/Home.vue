<template>
  <div class="home">
    HOME
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component({})
export default class Home extends Vue {
  private cate: string = 'in_theaters';
  private active: number = 0;
  private loading: boolean = true;
  private movieListData = null;
  @Action private movieList!: (cate: string) => any;
  public constructor() {
    super();
  }
  private created() {
    this.movieList(this.cate)
      .then((res: any) => {
        this.movieListData = res.subjects;
        this.loading = false;
        console.log(res.subjects);
      })
  }
}
</script>
