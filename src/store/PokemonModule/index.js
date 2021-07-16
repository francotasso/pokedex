import { PokemonService } from '../../services'

const state = {
    pokemons: [],
    favoritePokemons: [], //save the ids of favorite pokemons
    filteredPokemons: [], //search pokemon
    loading: false,
    notFoundPokemon: false,
    isFavoriteActive: false
};

const getters = {
    getPokemons(state) {
        return state.pokemons
    },
    getFavoritePokemons(state) {
        return state.pokemons.filter(pokemon => !!state.favoritePokemons.find(fav => fav === pokemon.name))
    }
}

const mutations = {
    setPokemons(state, items) {
        state.pokemons = items
    },
    setFilteredPokemons(state, item) {
        state.filteredPokemons = item
    },
    setFavoritePokemon(state, id) {
        state.favoritePokemons.push(id)
    },
    removeFavoritePokemon(state, id) {
        state.favoritePokemons = state.favoritePokemons.filter(fav => fav !== id)
    },
    setLoading(state, status) {
        state.loading = status
    },
    setNotFoundPokemon(state, status) {
        state.notFoundPokemon = status
    },
    setFavoriteActive(state, status) {
        state.filteredPokemons = []
        state.isFavoriteActive = status
    }
};

const actions = {
    async getPokemons({ commit }) {
        try {
            const pokemons = await PokemonService.getPokemons()
            commit('setPokemons', pokemons)
        } catch (e) {
            console.error('There was an error fetching pokemons: ', e)
        }
    },
    async getPokemonByName({ commit }, pokemonName) {
        try {
            const pokemon = await PokemonService.getPokemonByName(pokemonName)
            commit('setFavoriteActive', false)
            commit('setNotFoundPokemon', false)
            commit('setFilteredPokemons', [pokemon])
        } catch (e) {
            commit('setNotFoundPokemon', true)
            console.error('There is no pokemon with that name: ', e)
        }      
    },
    // eslint-disable-next-line no-unused-vars
    async getDetailedPokemon({ commit }, pokemonName) {
        try {
            return PokemonService.getPokemonByName(pokemonName)
        } catch (e) {
            console.error('There was an error fetching detailed pokemon: ', e)
        }
    },
    setFilteredPokemons({ commit }) {
        commit('setNotFoundPokemon', false)
        commit('setFilteredPokemons', [])
    }
}

export const pokemon = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}