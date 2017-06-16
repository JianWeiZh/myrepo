import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Hello from '@/components/Hello'
import Search from '@/components/search'
import Mine from '@/components/mine'
import Address from '@/components/address'
import login from '@/components/login'

Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
    	path: '/search',
    	name: 'Search',
    	component: Search
    },{
    	path: '/mine',
    	name: 'Mine',
    	component: Mine
    },{
    	path: '/search/address',
    	name: 'Address',
    	component: Address
    },{
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
