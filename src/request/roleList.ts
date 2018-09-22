import API from '@/config/api';
import Axios from '@/util/axios';
import {
  RoleInterface,
  IdInterface,
  tableListInterface
} from '@/interfaces';

export default {
  async getRoleList(params: tableListInterface): Promise<any> {
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

  async removeRole(params: IdInterface): Promise<any> {
    try {
      return Axios.delete(API.addRole, { params });
    } catch (error) {
      throw error;
    }
  },
};
