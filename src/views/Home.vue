<template>
  <div>
    <div class="container text-center">
      <div class="mt-5">
        <PikachuIcon />
      </div>
      <div class="poke-info d-flex flex-column align-items-center">
        <h1 class="poke-info__title mt-5">
          Welcome to Pokédex
        </h1>
        <p class="poke-info__description mt-4 col-md-6">
          The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.
        </p>
        <div class="poke-info__action mt-5">
          <b-button class="px-3" pill variant="danger" @click="goToPokedex">
            Get started
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PikachuIcon from '@/components/icons/PikachuIcon'

export default {
  name: 'Home',
  components: {
    PikachuIcon
  },
  methods: {
    goToPokedex() {
      this.$router.push({ name: 'Pokedex' })
    }
  }
}
</script>

<style lang="scss">
.poke-info {
  &__title {
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    color: var(--light-black);
  }
  &__description {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: var(--dark-gray);
  }
  &__action {
    .btn {
      font-weight: 700;
    }
  }
}
</style>
