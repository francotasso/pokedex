<template>
  <div id="app">
    <router-view></router-view>
    <Loader v-if="loading" />
  </div>
</template>

<script>
import { mapState } from "vuex"
import Loader from '@/components/Loader'

export default {
  name: 'App',
  components: {
    Loader
  },
  computed: {
    ...mapState('pokemon', ['loading'])
  }
}
</script>