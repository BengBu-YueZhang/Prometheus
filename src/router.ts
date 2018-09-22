import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login.vue';
import Home from '@/views/Home/Home.vue';
import UserList from '@/views/UserList/UserList.vue';
import RoleList from '@/views/RoleList/RoleList.vue';
import AuthList from '@/views/AuthList/AuthList.vue';
import Config from '@/views/Config/Config.vue';
import User from '@/views/User/User.vue'
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
      redirect: '/home/user',
      meta: {
        requiresAuth: false,
        Breadcrumbs: '首页',
      },
      children: [
        {
          path: 'user',
          component: User,
          name: 'User',
          meta: {
            requiresAuth: true,
            Breadcrumbs: '用户首页',
          }
        },
        {
          path: 'user/list',
          component: UserList,
          name: 'UserList',
          meta: {
            requiresAuth: true,
            Breadcrumbs: '用户列表',
            pn: 'userlist_menu',
          },
        },
        {
          path: 'role/list',
          component: RoleList,
          name: 'RoleList',
          meta: {
            requiresAuth: true,
            Breadcrumbs: '角色列表',
            pn: 'rolelist_menu',
          },
        },
        {
          path: 'auth/list',
          component: AuthList,
          name: 'AuthList',
          meta: {
            requiresAuth: true,
            Breadcrumbs: '动作列表',
            pn: 'authlist_menu',
          },
        },
        {
          path: 'config',
          component: Config,
          name: 'Config',
          meta: {
            requiresAuth: true,
            Breadcrumbs: '权限控制',
            pn: 'authconfig_menu'
          }
        }
      ],
    },
  ],
});

router.beforeEach((to: any, from: any, next: any): void => {
  const { path, meta: { requiresAuth } } = to;
  // 首先进行登录的鉴权
  console.log(to)
  if (!Stroe.state.token && path !== '/login') {
    router.push('/login');
  } else {
    if (requiresAuth) {
    } else {
      next();
    }
  }
});

export default router;
