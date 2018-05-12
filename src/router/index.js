import Vue from 'vue'
import Router from 'vue-router'
import calcRule from '@/Star/calcRule'
import calcList from '@/Star/calcList'
import calchistory from '@/Star/calcHistory'
import shopSpace from '@/Star/shopSpace'
import inc from '@/Star/inviteQRCode'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'calcRule',
      component: calcRule
    },
    {
      path: '/calclist',
      name: 'calcList',
      component: calcList
    },
    {
      path: '/shopspace',
      name: 'shopSpace',
      component: shopSpace
    },
    {
      path: '/calchistory',
      name: 'calchistory',
      component: calchistory
    },
    {
      path: '/inc',
      name: 'inc',
      component: inc
    }
  ]
})
