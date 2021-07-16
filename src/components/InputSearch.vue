<template>
  <div>
    <div class="container col-md-6 my-5 input-block">
      <SearchIcon class="input-block__icon"/>
      <input v-model="searchQuery" type="text" placeholder="Search" class="input-search">
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import SearchIcon from '@/assets/search.svg'

const debounce = require('lodash.debounce');

export default {
    name: 'InputSearch',
    components: {
        SearchIcon
    },
    data() {
        return {
            searchQuery: ''
        }
    },
    methods: {
        ...mapActions('pokemon', ['getPokemonByName', 'setFilteredPokemons']),
        search: debounce(function() {
            if (this.searchQuery) {
                this.getPokemonByName(this.searchQuery.toLowerCase().trim())
            }
        }, 700)
    },
    watch: {
        searchQuery(newVal) {
            if(newVal) this.search()
            else this.setFilteredPokemons([])
        }
    }
}
</script>

<style lang="scss">
.input-block {
    position: relative;
    &__icon {
        position: absolute;
        top: 50%;
        left: 30px;
        transform: translateY(-50%);
    }
}
.input-search {
    width: 100%;
    padding: 10px 40px;
    border:none;
    background-image:none;
    background-color: white;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    border-radius: 5px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
    &:focus {
        outline: none;
    }
}
</style>