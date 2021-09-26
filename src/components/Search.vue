<template>
  <div class="hero is-light has-text-centered">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{title}}</h1>
        <form class="py-5" @submit.prevent="handleSubmit">
          <input 
            type="text"
            class="input has-text-centered mb-2"
            placeholder="Enter city name"
            v-model="city"
          >
          <button class="button is-primary is-fullwidth">Search</button>
        </form>
      </div>
    </div>
  </div>  
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  props: ['title'],
  setup({ title }, context) {
    const store = useStore()
    const city = ref('')

    // On submit
    const handleSubmit = () => {
      if(city.value.trim() === '') {
        return context.emit('setAlertMsg', 'City is required!')
      }
      store.dispatch('fetchWeather', city.value)
      city.value = ''
    }

    return { title, city, handleSubmit }
  }
}
</script>

<style scoped>
  form {
    max-width: 300px;
    margin: 0 auto;
  }
</style>