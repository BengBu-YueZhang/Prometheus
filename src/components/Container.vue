<template>
  <el-container style="height: 100vh;">
    <el-aside width="220px" style="background-color: rgb(238, 241, 246)">
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

@Component
export default class Container extends Vue { }
</script>

<style lang="less" scoped>
</style>
