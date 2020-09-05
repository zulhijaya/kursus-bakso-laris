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
        path: '/kelas/:kelasSlug',
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
        path: '/checkout/:kelasSlug',
        name: 'checkout',
        component: () => import('../views/Checkout'),
    },
    {
        path: '/user',
        component: UserIndex,
        children: [
            {
                path: '',
                name: 'user.profil',
                component: () => import('../views/user/Profil')
            },
            {
                path: 'reset-password',
                name: 'user.resetPassword',
                component: () => import('../views/user/ResetPassword')
            },
            {
                path: 'edit-profil',
                name: 'user.editProfil',
                component: () => import('../views/user/EditProfil')
            },
            {
                path: 'kelas',
                name: 'user.kelas',
                component: () => import('../views/user/Kelas'),
            },
            {
                path: 'karya',
                name: 'user.karya',
                component: () => import('../views/user/Karya'),
            },
        ]
    },
    {
        path: '/kelas/:kelasSlug/:judulSlug',
        name: 'kelas.putarKelas',
        component: () => import('../views/kelas/PutarKelas'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'font-semibold',
    routes
})

export default router
