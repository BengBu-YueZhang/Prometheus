import API from '@/config/api';
import Axios from '@/util/axios';

interface GetRoleListParamsInterface {
  pagesize: number;
  pagestart: number;
}

export default {
  async getRoleList(params: GetRoleListParamsInterface): Promise<any> {
    try {
      return Axios.get(API.roleList, { params });
    } catch (error) {
      throw error;
    }
  },
};
