import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    weatherData: {},
    loading: false,
    error: '',
  },
  getters: {
    getWeatherData: state => state.weatherData,
    getLoading: state => state.loading,
    getError: state => state.error,
  },
  mutations: {
    setWeatherData: (state, data) => state.weatherData = data,
    setLoading: (state, data) => state.loading = data,
    setError: (state, data) => state.error = data,
  },
  actions: {
    fetchWeather: async ({commit}, city) => {
      commit('setLoading', true)
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.VUE_APP_API_KEY}`)
        commit('setWeatherData', response.data)
      } catch (err) { 
        if(err.response?.data?.message) {
          commit('setError', err.response.data.message)
        }else {
          commit('setError', 'Something went wrong!')
        }
      }
      commit('setLoading', false)
    },
  },
  modules: {
  }
})
