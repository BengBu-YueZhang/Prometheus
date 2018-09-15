<template>
  <el-dialog
    @close="afterClose"
    @open="beforeOpen"
    title="添加权限"
    :visible.sync="visible">
    <el-form ref="form" :model="dialogData" label-width="80px">
      <el-form-item label="code">
        <el-input v-model="dialogData.code" :disabled="isEdit"></el-input>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="dialogData.name"></el-input>
      </el-form-item>
      <el-form-item label="权限组">
        <el-input v-model="dialogData.group"></el-input>
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
import { AuthsInterface } from '@/interfaces';

@Component
export default class AddAuth extends mixins(DialogMixins) {
  @Prop({
    default: {
      id: '',
      code: '',
      group: '',
    },
    required: true,
  }) public edit!: AuthsInterface;

  public dialogData: AuthsInterface = {
    id: '',
    code: '',
    name: '',
    group: '',
  };

  get isEdit(): boolean {
    return !!this.dialogData.id
  }

  public empty(): void {
    this.dialogData = {
      id: '',
      code: '',
      name: '',
      group: '',
    };
  }
}
</script>
