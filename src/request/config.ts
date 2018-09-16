import API from '@/config/api';
import Axios from '@/util/axios';
import { RoleInterface } from '../interfaces';

interface getRoleInterface {
  id: string;
}

export default {
  async updateRole (params: RoleInterface): Promise<any> {
    try {
      return Axios.put(API.addRole, params)
    } catch (error) {
      throw error
    }
  },

  async getRole(params: getRoleInterface): Promise<any> {
    try {
      return Axios.get(API.addRole, { params })
    } catch (error) {
      throw error;
    }
  }
}
