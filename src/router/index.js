import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import("../views/Home"),
  },
  {
    path: '/seconds',//十秒报价页面
    name: 'seconds',
    component: ()=>import("../components/seconds/seconds"),
  },
  {
    path: '/bespeak',//免费预约页面
    name: 'bespeak',
    component: ()=>import("../components/bespeak/bespeak"),
  },
  {
    path: '/fixtureCore',//免费预约页面
    name: 'fixtureCore',
    component: ()=>import("../components/fixture/fixtureCore.vue"),
  },
  {
    path: '/ResultCore',//免费预约页面
    name: 'ResultCore',
    component: ()=>import("../components/result/ResultCore.vue"),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
