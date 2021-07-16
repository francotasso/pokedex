<template>
  <div v-if="!loading">
    <div class="container">
      <div class="text-center">
        <InputSearch />
        <PokemonList />
        <FooterSelection v-if="!notFoundPokemon" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import InputSearch from '@/components/InputSearch'
import PokemonList from '@/components/PokemonList'
import FooterSelection from '@/components/FooterSelection'

export default {
  name: 'Pokedex',
  components: {
    InputSearch,
    PokemonList,
    FooterSelection
  },
  mounted() {
    this.initData()
  },
  computed: {
    ...mapState('pokemon', ['loading', 'notFoundPokemon'])
  },
  methods: {
    ...mapMutations('pokemon', ['setLoading']),
    ...mapActions('pokemon', ['getPokemons']),
    async initData() {
      this.setLoading(true)
      setTimeout(async () => {
        await this.getPokemons()
        this.setLoading(false)
      }, 2000)
    }
  }
}
</script>
