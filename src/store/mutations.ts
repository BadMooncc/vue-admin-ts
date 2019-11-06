import { MutationTree } from 'vuex';
// import { navList } from './state-interface'
const mutations: MutationTree<any> = {
  fetchNav(state, payload) {
    state.navList = payload;
  }
}

export default mutations;