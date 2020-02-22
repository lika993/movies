import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import store from './store'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'http://www.omdbapi.com?apikey=c05eca02'


new Vue({
  el: '#app',
  render(h) {
        return h(App, {
            props: {
                dictionary: this.dictionary
            }
        })
    },
	store,
    router,
})
