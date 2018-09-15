import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login.vue';
import Home from '@/views/Home/Home.vue';
import UserList from '@/views/UserList/UserList.vue';
import RoleList from '@/views/RoleList/RoleList.vue';
import AuthList from '@/views/AuthList/AuthList.vue';
import Stroe from './store';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: Login,
      name: 'Login',
      meta: {
        requiresAuth: false,
        Breadcrumbs: '登录',
      },
    },
    {
      path: '/home',
      component: Home,
      name: 'Home',
      redirect: '/home/user/list',
      meta: {
        requiresAuth: true,
        Breadcrumbs: '首页',
      },
      children: [
        {
          path: 'user/list',
          component: UserList,
          name: 'UserList',
          meta: {
            requiresAuth: true,
            Breadcrumbs: '用户列表',
          },
        },
        {
          path: 'role/list',
          component: RoleList,
          name: 'RoleList',
          meta: {
            requiresAuth: true,
            Breadcrumbs: '角色列表',
          },
        },
        {
          path: 'auth/list',
          component: AuthList,
          name: 'AuthList',
          meta: {
            requiresAuth: true,
            Breadcrumbs: '角色列表',
          },
        },
      ],
    },
  ],
});

router.beforeEach((to: any, from: any, next: any): void => {
  // TODO: 需要做路由鉴权
  const { path } = to;
  if (!Stroe.state.token && path !== '/login') {
    router.push('/login');
  } else {
    next();
  }
});

export default router;
