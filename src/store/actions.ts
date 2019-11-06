import { ActionTree } from 'vuex';
import { fetchNavConf } from '@/api/common'
// import { navList } from './state-interface'

const actions:ActionTree<any, any> = {
  fetchNav({state, commit}){
    return fetchNavConf().then(res => {
      commit('fetchNav', res.data.data);
    })
  }
}

export default actions