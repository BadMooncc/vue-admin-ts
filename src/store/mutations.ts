import { MutationTree } from 'vuex';
// import { navList } from './state-interface'
const mutations: MutationTree<any> = {
  fetchNav(state, payload) {
    // console.log(payload.active, 'payload')
    state.navList = payload.data;
    state.navActive = payload.active
  }
}

export default mutations;