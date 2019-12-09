import { ActionTree } from 'vuex';
import { fetchNavConf } from '@/api/common'
// import { navList } from './state-interface'

const actions:ActionTree<any, any> = {
  fetchNav({state, commit}){
    return fetchNavConf().then(res => {
      console.log(res.data, 'fetchNav')
      commit('fetchNav', res.data);
    })
  }
}

export default actions