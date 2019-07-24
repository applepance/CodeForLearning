// import ajax from '@/assets/scripts/ajax'
export const mutations = {

}
export const actions = {
  async getArticles({ state, commit }, params) {
    const ret = await ajax.get('/article', {
      params: {
        limit: state.limit,
        ...params
      }
    });
    const { data } = ret;
  }
}
export const state = () => ({
  articles: [],
  articlesTop: [],
  total: 0,
  limit: 15,
  article: {}
})