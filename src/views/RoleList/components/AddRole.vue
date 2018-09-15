<template>
  <el-dialog
    @close="afterClose"
    @open="beforeOpen"
    title="添加角色"
    :visible.sync="visible">
    <el-form ref="form" :model="dialogData" label-width="80px">
      <el-form-item label="code">
        <el-input v-model="dialogData.code"></el-input>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="dialogData.name"></el-input>
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
import { State } from 'vuex-class';
import { RoleInterface, AuthsInterface } from '@/interfaces';

@Component
export default class AddRole extends mixins(DialogMixins) {
  @Prop({
    default: {
      id: '',
      code: '',
      name: '',
      auths: [],
    },
    required: true,
  }) public edit!: RoleInterface;

  @State('auths') public auths!: AuthsInterface;

  public dialogData: RoleInterface = {
    id: '',
    code: '',
    name: '',
    auths: [],
  };

  public empty(): void {
    this.dialogData = {
      id: '',
      code: '',
      name: '',
      auths: [],
    };
  }
}
</script>
