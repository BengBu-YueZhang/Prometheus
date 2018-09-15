<template>
  <section class="wrapper">
    <div class="text-align-right">
      <el-button
        @click="$refs.addRole.visible = true;"
        type="primary"
        plain>添加角色</el-button>
    </div>
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
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="mini"
            plain
            @click="remove(scope.row.id)"
          >删除角色</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      :total="total"
      :page-size="filter.pagesize"
      :current-page="filter.pagestart"
      @page-change="onPageChange"
      @page-size-change="onPageSizeChange"
    />
    <add-role
      @ok="onOk"
      ref="addRole"
      :edit="role"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import TableMixins from '@/mixins/TableMixins';
import Pagination from '@/components/Pagination.vue';
import RoleListRequest from '@/request/roleList';
import { RoleInterface } from '@/interfaces';
import AddRole from './components/AddRole';

@Component({
  components: {
    Pagination,
    AddRole,
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

  public async remove(id: string): Promise<any> {
    await RoleListRequest.removeRole({ id });
    this.$notify({ title: 'success', type: 'success', message: '删除角色成功, 请刷新浏览器' });
    this.get();
  }

  public async onOk(role: RoleInterface): Promise<any> {
    await RoleListRequest.addRole(role);
    this.$notify({ title: 'success', type: 'success', message: '添加角色成功, 请刷新浏览器' });
    this.$refs.addRole.visible = false;
    this.get();
  }
}
</script>
