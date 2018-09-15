import API from '@/config/api';
import Axios from '@/util/axios';

interface LoginParamsInterface {
  name: string;
  password: string;
}

export default {
  async login(params: LoginParamsInterface): Promise<any> {
    try {
      return await Axios.post(API.login, params);
    } catch (error) {
      throw error;
    }
  },
};
