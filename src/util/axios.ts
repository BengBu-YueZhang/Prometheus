import axios from 'axios';
import { isHaveStorage, getLocalStorage, removeLocalStorage } from '@/util/storage';
import { Notification } from 'element-ui';
import router from '../router';
import stroe from '../store';

const Axios = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

Axios.interceptors.request.use(
  (config: any) => {
    if (isHaveStorage('token')) {
      config.headers['x-access-token'] = getLocalStorage('token');
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

Axios.interceptors.response.use(
  (res: any) => {
    const data: any = res.data;
    return data;
  },
  (error: any) => {
    const status: number = error.response.status;
    const message: string = error.response.data.message || error.message;
    switch (status) {
      case 403:
        Notification({
          title: '403',
          message,
          type: 'error',
        });
        // 跳转到登录页
        stroe.dispatch('LOG_OUT');
        removeLocalStorage('token');
        router.push('/login');
        break;
      case 500:
        Notification({
          title: '500',
          message,
          type: 'error',
        });
        break;
      case 400:
        Notification({
          title: '400',
          message,
          type: 'error',
        });
        break;
      default:
        Notification({
          title: status.toString(),
          message,
          type: 'error',
        });
        break;
    }
    return Promise.reject(message);
  },
);

export default Axios;
