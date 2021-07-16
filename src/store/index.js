import Vue from 'vue'
import Vuex from 'vuex'

import { pokemon } from './PokemonModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pokemon
  }
})
