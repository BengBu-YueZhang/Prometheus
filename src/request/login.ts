import API from '@/config/api';
import Axios from '@/util/axios';
import { LoginInterface } from '@/interfaces';

export default {
  async login(params: LoginInterface): Promise<any> {
    try {
      return await Axios.post(API.login, params);
    } catch (error) {
      throw error;
    }
  },

  async logout(): Promise<any> {
    try {
      return await Axios.post(API.logut)
    } catch (error) {
      throw error;
    }
  }
};
