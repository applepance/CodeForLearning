import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// CEO
const state = {
  count: 0
}

// 改变 唯一可以修改状态的地方
// 财务
const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  }
}

// 动作 部门 不能修改 state
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd({ commit, state }) {
    if (state.count % 2)
      commit('increment')
  },
  incrementAsync({ commit }) {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          commit('increment')
          resolve('OK')
        }, 5000);
      }
      catch (err) {
        reject(err)
      }
    })
  }
}
// 组件里的computed
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'odd' : 'even'
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})