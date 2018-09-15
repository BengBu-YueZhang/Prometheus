<template>
  <section class="wrapper">
    <el-button
      type="primary"
      plain>添加权限</el-button>
    <el-table :data="list" v-loading="tableLoading">
      <el-table-column
        align="left"
        label="code"
        prop="code">
      </el-table-column>
      <el-table-column
        align="left"
        label="名称"
        prop="name">
      </el-table-column>
      <el-table-column
        align="left"
        label="操作">
      </el-table-column>
    </el-table>
    <pagination
      :total="total"
      :page-size="filter.pagesize"
      :current-page="filter.pagestart"
      @page-change="onPageChange"
      @page-size-change="onPageSizeChange"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import TableMixins from '@/mixins/TableMixins';
import { AuthsInterface } from '@/interfaces';

@Component
export default class Home extends mixins(TableMixins) {

  public async get(): Promise<any> {
    let list: AuthsInterface[];
    let total: number;
    this.tableLoading = true;
    ({ data: { list, total } } = await RoleListRequest.getRoleList(this.filter));
    this.list = list;
    this.total = total;
    this.tableLoading = false;
  }

  public async onOk(role: AuthsInterface): Promise<any> {
  }
}
</script>
