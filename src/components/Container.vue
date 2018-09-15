<template>
  <el-container style="height: 100vh;">
    <el-aside width="220px" style="background-color: rgb(238, 241, 246)">
      <div class="flex-center-center">
        <el-button
          icon="el-icon-setting"
          @click="logout"
          type="text">注销</el-button>
      </div>
      <el-menu>
      </el-menu>
    </el-aside>
    <el-main style="min-height: 100vh">
      <router-view/>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import stroe from '../store';
import LoginRequest from '../request/login'

@Component
export default class Container extends Vue {
  public async logout(): Promise<any> {
    await LoginRequest.logout();
    stroe.dispatch('logout');
  }
}
</script>
