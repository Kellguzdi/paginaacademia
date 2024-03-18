import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        redirect: '/inicio'
    },
    {
        path:'/',
        component: {
            render(c){
                return c('router-view')
            }
        },
        children:[
            {
                path:'/inicio',
                name:'inicio',
                component:()=> import('../components/LandingPage.vue')
            },
            {
                path:'/servicios',
                name:'servicios',
                component:()=> import('../components/Servicios.vue')
            },
            {
                path:'/eventos',
                name:'eventos',
                component:()=> import('../components/Eventos.vue')
            },
            {
                path:'/contactos',
                name:'contactos',
                component:()=> import('../components/Contactos.vue')
            },

        ]
    }
]
const router = new VueRouter({
    mode: 'hash', // Use 'history' mode to remove the hash from the URL
    routes
})

export default router