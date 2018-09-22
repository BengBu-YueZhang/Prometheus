<template>
  <section class="wrapper">
    <div class="text-align-right">
      <el-button
        @click="$refs.addAuth.visible = true"
        type="primary"
        plain>添加权限</el-button>
    </div>
    <el-tabs v-model="active" @tab-click="handleClick">
      <el-tab-pane label="全部" name="all"></el-tab-pane>
      <el-tab-pane
        v-for="(group, index) in groups"
        :key="index"
        :label="group"
        :name="group"></el-tab-pane>
    </el-tabs>
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
        label="权限组"
        prop="group">
      </el-table-column>
      <el-table-column
        align="left"
        label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="edit(scope.row)"
            type="success"
            plain
          >编辑</el-button>
          <el-button
            type="danger"
            size="mini"
            plain
            @click="remove(scope.row.id)"
          >删除权限</el-button>
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
    <add-auth
      @ok="onOk"
      ref="addAuth"
      :edit="auth"
    />
  </section>
</template>

<script lang="ts">
// 角色列表
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import TableMixins from '@/mixins/TableMixins';
import { AuthsInterface } from '@/interfaces';
import Pagination from '@/components/Pagination.vue';
import AddAuth from './components/AddAuth';
import AuthListRequest from '@/request/authList';

interface FilterInterface {
  pagesize: number;
  pagestart: number;
  group?: string;
}

@Component({
  components: {
    Pagination,
    AddAuth,
  },
})
export default class Home extends mixins(TableMixins) {

  public auth: AuthsInterface = {
    id: '',
    code: '',
    name: '',
    group: '',
  }

  public filter: FilterInterface = {
    pagesize: 10,
    pagestart: 1,
    group: ''
  }

  public groups: string[] = [];

  public active: string = 'all';

  @Watch('filter')
  public onFilterChange(): void {
    this.init();
  }

  public created(): void {
    this.init();
  }

  public async init(): Promise<any> {
    await this.getGroups();
    await this.get();
  }

  public async get(): Promise<any> {
    let list: AuthsInterface[];
    let total: number;
    this.tableLoading = true;
    ({ data: { list, total } } = await AuthListRequest.getAuthList(this.filter));
    this.list = list;
    this.total = total;
    this.tableLoading = false;
  }

  public async getGroups(): Promise<any> {
    let list: string[]
    ({ data: { list } } = await AuthListRequest.getGroupList())
    this.groups = list.map(l => l['_id'])
  }

  public handleClick(tabs): void {
    const { name } = tabs
    this.filter = { ...this.filter, group: name }
  }

  public async onOk(auth: AuthsInterface): Promise<any> {
    if (!auth.id) {
      await AuthListRequest.addAuth(auth);
      this.$notify({ title: 'success', type: 'success', message: '添加权限成功, 请刷新浏览器' });
    } else {
      await AuthListRequest.updateAuth(auth);
      this.$notify({ title: 'success', type: 'success', message: '编辑权限成功, 请刷新浏览器' });
    }
    this.$refs.addAuth.visible = false;
    this.init();
  }

  public edit(row: AuthsInterface): void {
    this.auth = row;
    this.$refs.addAuth.visible = true;
    this.active = 'all';
    this.filter = { ...this.filter, group: 'all' };
    this.init();
  }

  public async remove(id: string): Promise<any> {
    if (id) {
      await AuthListRequest.removeAuth({ id });
      this.$notify({ title: 'success', type: 'success', message: '删除权限成功, 请刷新浏览器' });
      this.active = 'all';
      this.filter = { ...this.filter, group: 'all' };
      await this.init(); 
    }
  } 
}
</script>
