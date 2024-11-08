import { createStore } from 'vuex'
import common from '@/store/common/index.js'

export default createStore({
  modules: {
    common: common,
  },
  created() {
    localStorage.setItem('common', this.modules.common)
  },
})
