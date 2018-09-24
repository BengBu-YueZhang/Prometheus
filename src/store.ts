import Vue from 'vue';
import Vuex from 'vuex';
import { Commit } from 'vuex';
import { RoleInterface, AuthsInterface, UserInterface } from './interfaces';
import { clearLocalStorage } from './util/storage';

Vue.use(Vuex);

// state的接口
interface StateInterface {
  roles: RoleInterface[];
  token: string;
  auths: AuthsInterface[];
  current: UserInterface | null;
}

const state: StateInterface = {
  roles: [],
  token: '',
  auths: [],
  current: null,
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

  setAuths({ commit }: { commit: Commit }, auths: AuthsInterface[]): void {
    commit('SET_AUTHS', auths);
  },

  logout({ commit }: { commit: Commit }): void {
    commit('LOG_OUT');
  },

  setCurrentUser({ commit }: { commit: Commit }, user: UserInterface): void {
    commit('SET_CURRENT_USER', user);
  }
};

const mutations = {
  SET_ROLES(vstate: StateInterface, roles: RoleInterface[]): void {
    vstate.roles = [...roles];
  },

  SET_TOKEN(vstate: StateInterface, token: string): void {
    vstate.token = token;
  },

  SET_AUTHS(vstate: StateInterface, auths: AuthsInterface[]): void {
    vstate.auths = auths;
  },

  LOG_OUT(vstate: StateInterface): void {
    clearLocalStorage();
    vstate.roles = [];
    vstate.auths = [];
    vstate.token = '';
  },

  SET_CURRENT_USER(vstate: StateInterface, user: UserInterface): void {
    vstate.current = user
    console.log(vstate)
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
