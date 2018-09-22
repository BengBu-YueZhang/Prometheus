import API from '@/config/api';
import Axios from '@/util/axios';
import {
  RoleInterface,
  IdInterface
} from '../interfaces';

export default {
  async updateRole (params: RoleInterface): Promise<any> {
    try {
      return Axios.put(API.addRole, params)
    } catch (error) {
      throw error
    }
  },

  async getRole(params: IdInterface): Promise<any> {
    try {
      return Axios.get(API.addRole, { params })
    } catch (error) {
      throw error;
    }
  }
}
