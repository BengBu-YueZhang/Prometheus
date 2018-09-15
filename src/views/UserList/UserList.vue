<template>
  <section class="wrapper">
    <div class="text-align-right">
      <el-button
        @click="$refs.addUser.visible = true;"
        type="primary"
        plain>添加用户</el-button>
      <el-button @click="$router.push('/home/role/list')">
        >
      </el-button>
    </div>
    <el-table :data="list" v-loading="tableLoading">
      <el-table-column
        align="left"
        label="创建时间">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span class="m-l-10">{{ scope.row.createDate | formatTime }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="left"
        label="姓名"
        prop="name">
      </el-table-column>
      <el-table-column
        align="left"
        label="角色">
        <template slot-scope="scope">
          <el-tag
            v-for="(item, index) in scope.row.roles"
            :key="index">
            {{ item.name }}
          </el-tag>
        </template>
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
          >删除用户</el-button>
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
    <add-user
      @ok="onOk"
      ref="addUser"
      :edit="user"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import TableMixins from '@/mixins/TableMixins';
import Pagination from '@/components/Pagination.vue';
import AddUser from './components/AddUser.vue';
import UserListRequest from '@/request/userList';
import * as moment from 'moment';
import { UserInterface } from '@/interfaces';

@Component({
  components: {
    Pagination,
    AddUser,
  },
  filters: {
    formatTime(value: string): string {
      return moment(value).format('YYYY-MM-DD HH:mm:ss');
    },
  },
})
export default class UserList extends mixins(TableMixins) {
  public user: UserInterface = {
    id: '',
    name: '',
    password: '',
    roles: [],
  };

  public async get(): Promise<any> {
    let list: UserInterface[];
    let total: number;
    this.tableLoading = true;
    ({ data: { list, total }} = await UserListRequest.getUserList(this.filter));
    this.list = list;
    this.total = total;
    this.tableLoading = false;
  }

  public async onOk(user: UserInterface): Promise<any> {
    if (!user.id) {
      await UserListRequest.addUser(user);
      this.$notify({ title: 'success', type: 'success', message: '成功添加用户' });
    } else {
      await UserListRequest.updateUser(user);
      this.$notify({ title: 'success', type: 'success', message: '编辑用户成功' });
    }
    this.$refs.addUser.visible = false;
    this.get();
  }

  public async remove(id: string): Promise<any> {
    if (id) {
      await UserListRequest.removeUser({ id });
      this.$notify({ title: 'success', type: 'success', message: '删除用户成功' });
      this.get();
    }
  }

  public edit (row: UserInterface): void {
    this.user = row;
    this.user.roles = this.user.roles.map(r => r.id);
    this.$refs.addUser.visible = true;
  }
}
</script>
