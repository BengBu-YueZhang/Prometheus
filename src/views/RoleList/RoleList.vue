<template>
  <section class="wrapper">
    <el-button
      type="primary"
      plain>添加角色</el-button>
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
import Pagination from '@/components/Pagination.vue';
import * as moment from 'moment';
import RoleListRequest from '@/request/roleList';
import { RoleInterface } from '@/interfaces';

@Component({
  components: {
    Pagination,
  },
})
export default class RoleList extends mixins(TableMixins) {
  public role: RoleInterface = {
    id: '',
    code: '',
    name: '',
    auths: [],
  };

  public async get(): Promise<any> {
    let list: RoleInterface[];
    let total: number;
    this.tableLoading = true;
    ({ data: { list, total } } = await RoleListRequest.getRoleList(this.filter));
    this.list = list;
    this.total = total;
    this.tableLoading = false;
  }

  public async onOk(role: RoleInterface): Promise<any> {
  }
}
</script>
