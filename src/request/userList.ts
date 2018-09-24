import API from '@/config/api';
import Axios from '@/util/axios';
import {
  UserInterface,
  tableListInterface,
  IdInterface
} from '@/interfaces';

export default {
  async getUserList(params: tableListInterface): Promise<any> {
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

  async removeUser(params: IdInterface): Promise<any> {
    try {
      return Axios.delete(API.addUser, { params });
    } catch (error) {
      throw error;
    }
  },

  async getCurrentUser(): Promise<any> {
    try {
      return Axios.get(API.currentUser)
    } catch (error) {
      throw error;
    }
  }
};
