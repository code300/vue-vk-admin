import Vue from 'vue'
import error from './error.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#error',
    render: h => h(error)
})