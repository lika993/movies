import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Favorites from './views/Favorites.vue'
import BlackList from './views/BlackList.vue'
import Movie from './views/Movie.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/:page?',
            name: 'home',
            component: Home,
            props: { movies: {} },
            meta: {
                
            }
        },
        {
            path: '/favorites/:page?',
            name: 'favorites',
            component: Favorites,
            props: { dictionary: {} },
            meta: {
               
            }
        },
        {
            path: '/black-list/:page?',
            name: 'blackList',
            component: BlackList,
            props: { dictionary: {} },
            meta: {
                
            }
        },
        {
            path: '/movie/:id',
            name: 'Movie',
            component: Movie,
            props: { dictionary: {} },
            meta: {
                wrap: true,
                wrapFull: false
            }
        }
    ]
});



export default router;

