<template>
    <div class="col-md-6 my-2">
        <div class="poke-item">
           <h2 class="poke-item__name" @click="openModal">
               {{ pokemon.name | capitalize }}
           </h2>
           <div class="poke-item__favorite">
               <div v-if="!favorite" class="favorite-item" @click="setFavoritePokemon(pokemon.name)">
                  <FavoriteStarIcon class="favorite-icon favorite-icon__disabled" />
               </div>
               <div v-else class="favorite-item" @click="removeFavoritePokemon(pokemon.name)">
                  <FavoriteStarIcon class="favorite-icon favorite-icon__enabled" />
               </div>
           </div>
        </div>
        <b-modal v-model="showModal" size="md" hide-footer hide-header centered>
            <div class="poke-item__cover">
                <img class="poke-item__background" src="@/assets/background-pokemon.jpg" alt="Background Pokemon" width="100%">
                <img class="poke-item__artwork" v-if="pokemonDetailed.sprites" width="25%" :src="pokemonDetailed.sprites.other['official-artwork'].front_default" :alt="`Picture of ${pokemon.name}`">
                <span class="poke-item__close" @click="showModal = false">
                    <CloseModalIcon />
                </span>
            </div>  
            <div class="container">
                <div class="poke-item__detail">
                    <span class="poke-item__label">
                        Name:
                    </span>
                    <span>{{ pokemon.name | capitalize }}</span>
                </div>
                <div class="poke-item__detail">
                    <span class="poke-item__label">
                        Weight:
                    </span>
                    <span>{{ pokemonDetailed.weight }}</span>
                </div>
                <div class="poke-item__detail">
                    <span class="poke-item__label">
                        Height:
                    </span>
                    <span>{{ pokemonDetailed.height }}</span>
                </div>
                <div class="poke-item__detail">
                    <span class="poke-item__label">
                        Types:
                    </span>
                    <span v-for="(item, index) in pokemonDetailed.types" :key="item.id">
                        {{ item.type.name | capitalize }}
                        <span v-if="index < pokemonDetailed.types.length - 1">,</span>
                    </span>
                </div>
            </div>
            <div class="container py-3 d-flex justify-content-between">
                <b-button pill variant="danger" @click="saveToClipboard">
                    Share to my friends
                </b-button>
                <div class="poke-item__favorite">
                    <div v-if="!favorite" class="favorite-item" @click="setFavoritePokemon(pokemon.name)">
                        <FavoriteStarIcon class="favorite-icon favorite-icon__disabled favorite-item__ml" />
                    </div>
                    <div v-else class="favorite-item" @click="removeFavoritePokemon(pokemon.name)">
                        <FavoriteStarIcon class="favorite-icon favorite-icon__enabled favorite-item__ml" />
                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import FavoriteStarIcon from '@/assets/favorite-star.svg'
import CloseModalIcon from '@/assets/close-modal.svg'

export default {
    name: 'PokemonListItem',
    components: {
        FavoriteStarIcon,
        CloseModalIcon
    },
    props: {
        pokemon: {
            type: Object,
            required: true
        },
        favorite: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            showModal: false,
            pokemonDetailed: {}
        }
    },
    computed: {
        ...mapState('pokemon', ['filteredPokemons'])
    },
    methods: {
        ...mapMutations('pokemon', ['setFavoritePokemon', 'removeFavoritePokemon']),
        ...mapActions('pokemon', ['getDetailedPokemon']),
        async openModal() {
            this.pokemonDetailed = await this.getDetailedPokemon(this.pokemon.name)
            this.showModal = true
        },
        saveToClipboard() {
            const {
                name,
                weight,
                height,
                types
            } = this.pokemonDetailed
            let t = ''
            types.forEach((item, index) => {
                t = t + item.type.name
                if (index < types.length - 1) t = t + ', '
            })
            const pokeInfo = `name: ${name}, weight: ${weight}, height: ${height}, types: ${t}`
            navigator.clipboard.writeText(pokeInfo)
        }
    }
}
</script>

<style lang="scss">
.poke-item {
    border-radius: 6px;
    background-color: white;
    display: flex;
    padding: 10px 15px;
    justify-content: space-between;
    align-items: center;
    &__name {
        font-size: 22px;
        font-weight: 500;
        line-height: 26px;
        cursor: pointer;
        color: var(--light-black);
    }
    &__favorite {
        width: 44px;
        height: 44px;
    }
    &__cover {
        position: relative;
    }
    &__background {
        border-radius: .5rem .5rem 0 0;
    }
    &__artwork {
        position: absolute;
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
        @media screen and (max-width: 768px) {
            top: 40px;
        }
    }
    &__close {
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
    }
    &__detail {
        padding: 14px 10px;
        border-bottom: 1px solid #E5E5E5;
    }
    &__label {
        font-weight: 600;
    }
}
.favorite-item {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: var(--light-gray);
    cursor: pointer;
    &__ml {
        margin-left: 10px;
    }
}
</style>