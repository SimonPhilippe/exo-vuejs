import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Product_1 from '@/views/Product_1.vue';
import Product_2 from '@/views/Product_2.vue';
import Page_manager from '@/components/Page_manager.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/produit-1', name: 'Product_1', component: Product_1 },
    { path: '/produit-2', name: 'Product_2', component: Product_2 },
    { path: '/gerer-pages', name: 'Page_manager', component: Page_manager },
    { path: '*', redirect: '/' },
  ]
})

export default router;
