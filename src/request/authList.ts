import API from '@/config/api';
import Axios from '@/util/axios';

interface GetAuthListParamsInterface {
  pagesize: number;
  pagestart: number;
}

export default {
  async getAuthList(params: GetAuthListParamsInterface): Promise<any> {
    try {
      return Axios.get(API.authList, { params });
    } catch (error) {
      throw error;
    }
  },
};