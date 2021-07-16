<template>
  <div>
    <div class="container">
      <template v-if="notFoundPokemon">
          <div class="mt-5">
              <NotFoundSearch />
          </div>
      </template>
      <template v-else>
          <div class="row flex-column align-items-center justify-content-center" style="margin-bottom: 80px">
              <PokemonListItem v-for="pokemon in pokemonsToShow" :key="pokemon.id" :pokemon="pokemon" :favorite="isFavoritePokemon(pokemon.name)"/>
          </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import PokemonListItem from '@/components/PokemonListItem'
import NotFoundSearch from '@/components/NotFoundSearch'

export default {
  name: 'Home',
  components: {
    PokemonListItem,
    NotFoundSearch
  },
  computed: {
    ...mapState('pokemon', 
        ['loading', 'notFoundPokemon', 'pokemons', 'filteredPokemons', 'favoritePokemons', 'isFavoriteActive']),
    ...mapGetters('pokemon', ['getFavoritePokemons']),
    pokemonsToShow() {
        if (this.filteredPokemons.length) return this.filteredPokemons
        else if (this.isFavoriteActive) return this.getFavoritePokemons
        return this.pokemons
    }
  },
  methods: {
    ...mapMutations('pokemon', ['setLoading']),
    ...mapActions('pokemon', ['getPokemons']),
    isFavoritePokemon(id) {
        return !!this.favoritePokemons.find(fav => fav === id)
    }
  }
}
</script>