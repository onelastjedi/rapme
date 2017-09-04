import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import Users from '@/pages/Users'
import User from '@/pages/User'
import Songs from '@/pages/Songs'
import Song from '@/pages/Song'
import AddSong from '@/pages/AddSong'
import store from '@/store/'

Vue.use(Router)

const currentUser = () => store.state.user.current
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Songs
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/users/:id',
      name: 'User',
      component: User
    },
    {
      path: '/songs',
      name: 'Songs',
      component: Songs
    },
    {
      path: '/songs/:id',
      component: Song,
      name: 'Song'
    },
    {
      path: '/add',
      component: AddSong,
      name: 'Add Song',
      beforeEnter: (to, from, next) => {
        if (!currentUser()) {
          next({
            path: '/login'
          })
        } else {
          next()
        }
      }
    }
  ]
})

export default router
