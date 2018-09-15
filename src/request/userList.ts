import API from '@/config/api';
import Axios from '@/util/axios';
import { UserInterface } from '@/interfaces';

interface GetUserListParamsInterface {
  pagesize: number;
  pagestart: number;
}

interface RemoveUserInterface {
  id: string;
}

export default {
  async getUserList(params: GetUserListParamsInterface): Promise<any> {
    try {
      return Axios.get(API.userList, { params });
    } catch (error) {
      throw error;
    }
  },

  async addUser(params: UserInterface): Promise<any> {
    try {
      return Axios.post(API.addUser, params);
    } catch (error) {
      throw error;
    }
  },

  async updateUser(params: UserInterface): Promise<any> {
    try {
      return Axios.put(API.addUser, params);
    } catch (error) {
      throw error;
    }
  },

  async removeUser(params: RemoveUserInterface): Promise<any> {
    try {
      return Axios.delete(API.addUser, { params });
    } catch (error) {
      throw error;
    }
  },
};
