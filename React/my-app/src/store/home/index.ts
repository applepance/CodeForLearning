import { State } from '@/store/interface'
import { Commit } from 'vuex'
import { getMovieList } from '@/api/movie'
// - 类型 约束 报错
// - 代码 友好
const getters = {}
const state: State = {
  movieList: []
}
const mutations = {}
const actions = {
  async movieList(context: {commit: Commit}, cate: string) {
    const res = await getMovieList(cate)
    .then((response: any) => response)
    return res
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}