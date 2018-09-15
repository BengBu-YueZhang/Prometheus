import API from '@/config/api';
import Axios from '@/util/axios';
import { AuthsInterface } from '../interfaces';

interface GetAuthListParamsInterface {
  pagesize: number;
  pagestart: number;
}

interface RemoveAuthInterface {
  id: string;
}

export default {
  async getAuthList(params: GetAuthListParamsInterface): Promise<any> {
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

  async removeAuth(params: RemoveAuthInterface): Promise<any> {
    try {
      return Axios.delete(API.addAuth, { params })
    } catch (error) {
      throw error;
    }
  }
};