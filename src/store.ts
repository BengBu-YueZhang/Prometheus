import Vue from 'vue';
import Vuex from 'vuex';
import { Commit } from 'vuex';
import { RoleInterface } from './interfaces';
import { clearLocalStorage } from './util/storage';

Vue.use(Vuex);

interface StateInterface {
  roles: RoleInterface[];
  token: string;
}

const state: StateInterface = {
  roles: [],
  token: '',
};

const getters = {
};

const actions = {
  setRoles({ commit }: { commit: Commit }, roles: RoleInterface[]): void {
    commit('SET_ROLES', roles);
  },

  setToken({ commit }: { commit: Commit }, token: string): void {
    commit('SET_TOKEN', token);
  },

  logout({ commit }: { commit: Commit }): void {
    commit('LOG_OUT');
  },
};

const mutations = {
  SET_ROLES(vstate: StateInterface, roles: RoleInterface[]): void {
    vstate.roles = [...roles];
  },

  SET_TOKEN(vstate: StateInterface, token: string): void {
    vstate.token = token;
  },

  LOG_OUT(vstate: StateInterface): void {
    clearLocalStorage();
    vstate.roles = [];
    vstate.token = '';
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
