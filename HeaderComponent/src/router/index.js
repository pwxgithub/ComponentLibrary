import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import DashBoard from '@/view/dashboard/DashBoard'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: "/",
      redirect: "/dashboard",
    },
    {
      path: "/dashboard",
      name: 'DashBoard',
      component: DashBoard
    },
  ]
})
