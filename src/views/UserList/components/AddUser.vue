<template>
  <el-dialog
    @close="afterClose"
    @open="beforeOpen"
    :title="title"
    :visible.sync="visible">
    <el-form ref="form" :model="dialogData" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="dialogData.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="text" v-model="dialogData.password"></el-input>
      </el-form-item>
      <el-form-item label="角色">
        <el-select v-model="dialogData.roles" multiple>
          <el-option
            v-for="item in roles"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取 消</el-button>
      <el-button type="primary" @click="ok">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import DialogMixins from '@/mixins/DialogMixins';
import { mixins } from 'vue-class-component';
import { UserInterface, RoleInterface } from '@/interfaces';
import { State } from 'vuex-class';

@Component
export default class AddUser extends mixins(DialogMixins) {
  @Prop({
    default: {
      id: '',
      name: '',
      password: '',
      roles: [],
    },
    required: true,
  }) public edit!: UserInterface;

  @State('roles') public roles!: RoleInterface;

  public dialogData: UserInterface = {
    id: '',
    name: '',
    password: '',
    roles: [],
  };

  get title(): string {
    return this.edit.id ? '编辑用户' : '添加用户';
  }

  public merge(): void {
    if (this.edit.id) {
      this.dialogData = Object.assign({}, this.dialogData, this.edit, {
        password: '123456',
      });
    }
  }

  public empty(): void {
    this.dialogData = {
      id: '',
      name: '',
      password: '',
      roles: [],
    };
  }
}
</script>
