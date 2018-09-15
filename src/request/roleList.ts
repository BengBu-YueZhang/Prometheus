import API from '@/config/api';
import Axios from '@/util/axios';
import { RoleInterface } from '@/interfaces';

interface GetRoleListParamsInterface {
  pagesize: number;
  pagestart: number;
}

interface RemoveRoleInterface {
  id: string;
}

export default {
  async getRoleList(params: GetRoleListParamsInterface): Promise<any> {
    try {
      return Axios.get(API.roleList, { params });
    } catch (error) {
      throw error;
    }
  },

  async addRole(params: RoleInterface): Promise<any> {
    try {
      return Axios.post(API.addRole, params);
    } catch (error) {
      throw error;
    }
  },

  async removeRole(params: RemoveRoleInterface): Promise<any> {
    try {
      return Axios.delete(API.addRole, { params });
    } catch (error) {
      throw error;
    }
  },
};
