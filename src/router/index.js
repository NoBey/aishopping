import Vue from 'vue'
import Router from 'vue-router'
/* 加载 */
import Index from '@/components/main/Index'
import Detail from '@/components/main/Detail'

import Find from '@/components/find/Find'
import FindDetail from '@/components/find/FindDetail'

import Deals from '@/components/deals/Deals'
import DealsDetail from '@/components/deals/DealsDetail'

import Navigo from '@/components/navigo/Navigo'
import NavigoDetail from '@/components/navigo/NavigoDetail'

import Product from '@/components/shop/Product'
import ProductDetail from '@/components/shop/ProductDetail'

import Brands from '@/components/brands/Brands'
import BrandsDetail from '@/components/brands/BrandsDetail'

import Mall from '@/components/mall/Mall'
import MallDetail from '@/components/mall/MallDetail'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    /* 首页 */
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/main/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/find/detail',
      name: 'FindDetail',
      component: FindDetail
    },
    {
      path: '/deals',
      name: 'Deals',
      component: Deals
    },
    {
      path: '/deals/detail',
      name: 'DealsDetail',
      component: DealsDetail
    },
    {
      path: '/navigo',
      name: 'Navigo',
      component: Navigo
    },
    {
      path: '/navigo/detail',
      name: 'NavigoDetail',
      component: NavigoDetail
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/product/detail',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/brands',
      name: 'Brands',
      component: Brands
    },
    {
      path: '/brands/detail',
      name: 'BrandsDetail',
      component: BrandsDetail
    },
    {
      path: '/mall/',
      name: 'Mall',
      component: Mall
    },
    {
      path: '/mall/detail',
      name: 'MallDetail',
      component: MallDetail
    }
  ]
})

export default router
