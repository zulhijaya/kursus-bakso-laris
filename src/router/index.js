import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import UserIndex from '../views/user/Index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/kelas',
        name: 'kelas.index',
        component: () => import('../views/kelas/Index')
    },
    {
        path: '/kelas/:slug',
        name: 'kelas.show',
        component: () => import('../views/kelas/Show')
    },
    {
        path: '/showcase',
        name: 'showcase',
        component: () => import('../views/Showcase')
    },
    {
        path: '/biaya-belajar',
        name: 'biaya.belajar',
        component: () => import('../views/BiayaBelajar')
    },
    {
        path: '/masuk',
        name: 'masuk',
        component: () => import('../views/auth/Masuk')
    },
    {
        path: '/daftar',
        name: 'daftar',
        component: () => import('../views/auth/Daftar')
    },
    {
        path: '/user',
        component: UserIndex,
        children: [
            {
                path: 'reset-password',
                name: 'user.reset.password',
                component: () => import('../views/user/Dashboard')
            },
            {
                path: 'edit-profil',
                name: 'user.edit.profil',
                component: () => import('../views/user/EditProfil')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'font-semibold',
    routes
})

export default router
