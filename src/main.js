import Vue from 'vue';
import App from './App';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import store from './vuex/store';

// 路由模块和HTTP模块
Vue.use(VueResource);
Vue.use(VueRouter);

var router = new VueRouter({
	routes:[
		{path: '/', component: App}
	]
});

new Vue({
	el:'#app',
	router:router,
	store,
	template:"<router-view></router-view>"
});