<template>
  <el-container style="height: 100vh;">
    <el-aside width="200px" style="background-color: #545c64">
      <el-menu
        :default-active="$route.path"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item
          v-for="(menu, index) in allMenus"
          :key="index"
          :index="menu.path"
          @click="$router.push(menu.path)">
          <i :class="menu.icon"></i>
          <span slot="title">{{menu.name}}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main style="min-height: 100vh">
      <el-header>
        <div class="text-align-right">
          <el-button
            icon="el-icon-setting"
            @click="logout"
            type="text">注销</el-button>
        </div>
      </el-header>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import stroe from '../store';
import LoginRequest from '../request/login';
import AllMenu from '@/config/allMenu';
import { State } from 'vuex-class';
import { AuthsInterface } from '@/interfaces'

@Component
export default class Container extends Vue {
  @State('auths') public auths!: AuthsInterface[];

  public allMenus: any[] = AllMenu;

  get active(): string {
    return '123'
  }

  get menu(): AuthsInterface[] {
    return this.auths;
  }

  public async logout(): Promise<any> {
    await LoginRequest.logout();
    stroe.dispatch('logout');
    this.$router.push('/login');
  }
}
</script>

<style lang="less">
.el-main {
  padding: 10px;
}

.el-menu {
  border-right: none !important;
}
</style>
