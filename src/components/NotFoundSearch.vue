<template>
    <div>
        <h1>
            Uh-oh!
        </h1>
        <p>
            You look lost on your journey!
        </p>
        <b-button pill variant="danger" @click="goHome">
            Go back home
        </b-button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'NotFoundSearch',
    methods: {
        ...mapMutations('pokemon', ['setNotFoundPokemon']),
        goHome() {
            this.setNotFoundPokemon(false)
            this.$router.push({ name: 'Home' })
        }
    }
}
</script>