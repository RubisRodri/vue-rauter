import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',name:'home', component: HomeView },
    {
      path:'/session',
      component:() =>import('../views/SessionView.vue'),
      children:[
        { 
          path: '',
          components:{
            default:() =>import('../views/LoginView.vue'),
            register:() =>import('../views/RegisterView.vue')
          }
        },  
      ]
    },
    { path: '/about',name:'about', component: () => import('../views/AboutView.vue') },
    { path: '/detalles', component:() => import('../views/DetallesView.vue') },
    { path: '/perfiles', component:()=> import('../views/PerFilesView.vue') },
    { 
      path: '/chats',
       component: () => import('../views/ChatsView.vue'),
       meta:{
        requiresAuth: true,
        role:['admin']
       },
       children:[
        { path: ':chatId', component:() => import('../views/ChatView.vue') },
       ]
    },
   

  ]
})

router.beforeEach((to, from) => {
  console.log(to, from)

  if(to.meta?.requiresAuth && to.meta.includes('admin')) {
    console.log(to.path,'requiresAuth')
    return '/session'
  }

  if(to.path ==='/') return'/about'
  return true
})
export default router