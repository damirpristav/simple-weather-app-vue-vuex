<template>
  <div class="has-text-centered">
    <Search title="Enter city name and press search button" @setAlertMsg="updateAlertMsg" />
    <h2 className="is-size-3 py-2" v-if="loading">Loading...</h2>
    <Weather :data="weatherData" v-if="!loading && Object.keys(weatherData).length" />

    <Alert v-if="alertMsg" @close="handleClose" :message="alertMsg" />
    <Alert v-if="error" @close="handleCloseError" :message="error" />
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import Weather from './components/Weather.vue'
import Search from './components/Search.vue'
import Alert from './components/Alert.vue'

export default {
  name: 'App',
  components: { Search, Alert, Weather },
  setup() {
    const store = useStore()
    const alertMsg = ref('')

    // On alert close
    const handleClose = () => {
      alertMsg.value = ''
    }

    // Update alert message
    const updateAlertMsg = (msg) => {
      alertMsg.value = msg
    }

    // Get error
    const error = computed(() => store.getters.getError)

    // Get weather data
    const weatherData = computed(() => store.getters.getWeatherData)

    // Get loading
    const loading = computed(() => store.getters.getLoading)

    // On error alert close
    const handleCloseError = () => {
      store.commit('setError', '')
    }

    return { handleClose, alertMsg, updateAlertMsg, error, handleCloseError, weatherData, loading }
  }
}
</script>

<style>

</style>
