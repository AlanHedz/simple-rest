import Vue from 'vue';
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'

import App from './App.vue'
import DisplayItem from './components/DisplayItem.vue'
import CreateItem from './components/CreateItem.vue'
import EditItem from './components/EditItem.vue'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const routes = [
   { path: '/', component: DisplayItem, name: 'DisplayItem' },
   { path: '/create/item', component: CreateItem, name: 'CreateItem' },
   { path: '/edit/item/:id', component: EditItem, name: 'EditItem' }
]

const router = new VueRouter({mode: 'history', routes:routes })
new Vue(Vue.util.extend({router}, App)).$mount('#app')
