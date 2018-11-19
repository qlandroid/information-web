import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../views/home/home'
import Login from '../views/login'
import InsertProject from '../views/insertProject'
import PDetails from '../views/pDetails/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: '首页',
      component: Home
    },
    {
      path:'/login',
      name: '登陆',
      component : Login
    },
    {
      path:'/pDetails',
      name: '项目详情',
      component : PDetails
    },
    {
      path:'/insertProject',
      name: '添加项目',
      component : InsertProject
    },
  ]
})
