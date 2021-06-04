// import modul Vue
import Vue from 'vue'
// import modul Router
import Router from 'vue-router'
// import modul Home
import Home from '@/components/Home'
import Hasil from '@/components/Hasil'

Vue.use(Router)

// mendeklarasikan Router
// mempunyai path / dengan nama Home dengan component Home
// mempunyai path search dengan nama Hasil dengan component Hasil
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: 'search',
      name: 'Hasil',
      component: Hasil
    }
  ]
})
