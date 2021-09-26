<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">{{data.name}} - {{data.sys.country}}</h1>
      <div class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">{{data.weather[0].description}}</p>
            <p class="title"><img :src="icon" alt="icon"></p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">temp</p>
            <div class="title">
              <p class="mb-2">{{data.main.temp}}K</p>
              <p class="mb-2">{{fahrenheit}}<sup>&#8457;</sup></p>
              <p>{{celsius}}<sup>&#8451;</sup></p>
            </div>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">humidity</p>
            <p class="title">{{data.main.humidity}}%</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">pressure</p>
            <p class="title">{{data.main.pressure}} hPa</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">wind</p>
            <p class="title">{{data.wind.speed}} m/s</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'

export default {
  props: ['data'],
  setup({ data }) {
    const fahrenheit = computed(() => (data.main.temp * 1.8 - 459.67).toFixed(2))
    const celsius = computed(() => (data.main.temp - 273.15).toFixed(2))
    const icon = computed(() => `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)

    return { data, fahrenheit, celsius, icon }
  }
}
</script>

<style scoped>
  h1.title {
    margin-bottom: 50px;
  }
  .level {
    align-items: flex-start;
  }
  .level .level-item {
    margin-bottom: 50px !important;
  }
</style>