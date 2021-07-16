<template>
    <div class="footer-container">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6 d-flex justify-content-center">
                    <div class="col-md-6 px-1 d-flex align-items-center">
                        <b-button class="w-100" pill :variant="isFavoriteActive ? 'secondary' : 'danger'" @click="setFavoriteActive(false)">
                            <div class="d-flex justify-content-center align-items-center">
                                <span class="mx-1">
                                    <AllIcon />
                                </span>
                                <span class="mx-1">
                                    All
                                </span>
                            </div>
                        </b-button>
                    </div>
                    <div class="col-md-6 px-1 d-flex align-items-center">
                        <b-button class="w-100" pill :variant="isFavoriteActive ? 'danger' : 'secondary'" @click="setFavoriteActive(true)">
                            <div class="d-flex justify-content-center align-items-center">
                                <span class="mx-1">
                                    <FavoriteStarIcon class="favorite-icon favorite-icon__neutral mt-0" />
                                </span>
                                <span class="mx-1">
                                    Favorites
                                </span>
                            </div>
                        </b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AllIcon from '@/assets/all.svg'
import FavoriteStarIcon from '@/assets/favorite-star.svg'

export default {
    name: 'FooterSelection',
    components: {
        AllIcon,
        FavoriteStarIcon
    },
    computed: {
        ...mapState('pokemon', ['isFavoriteActive'])
    },
    methods: {
        ...mapMutations('pokemon', ['setFavoriteActive'])
    }
}
</script>

<style lang="scss">
.footer-container {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  height: 80px;
  width: 100%;
  z-index: 99;
  text-align: center;
  padding: 20px 0px;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
  .btn-secondary {
    color: white;
  }
}
</style>