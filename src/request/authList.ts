import API from '@/config/api';
import Axios from '@/util/axios';
import {
  AuthsInterface,
  AuthTableInterface,
  IdInterface,
} from '../interfaces';

export default {
  async getAuthList(params: AuthTableInterface): Promise<any> {
    try {
      return Axios.get(API.authList, { params });
    } catch (error) {
      throw error;
    }
  },

  async getGroupList(): Promise<any> {
    try {
      return Axios.get(API.groupList)
    } catch (error) {
      throw error;
    }
  },

  async addAuth(params: AuthsInterface): Promise<any> {
    try {
      return Axios.post(API.addAuth, params);
    } catch (error) {
      throw error;
    }
  },

  async updateAuth(params: AuthsInterface): Promise<any> {
    try {
      return Axios.put(API.addAuth, params)
    } catch (error) {
      throw error;
    }
  },

  async removeAuth(params: IdInterface): Promise<any> {
    try {
      return Axios.delete(API.addAuth, { params })
    } catch (error) {
      throw error;
    }
  }
};