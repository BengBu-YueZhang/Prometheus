<template>
  <div class="wrapper flex-center-center">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="pageSize"
      :current-page="currentPage">
    </el-pagination>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Pagination extends Vue {
  @Prop({ default: 0, required: true }) private total!: number;
  @Prop({ default: 10, required: true }) private pageSize!: number;
  @Prop({ default: 1, required: true }) private currentPage!: number;

  private handleSizeChange(size: number): void {
    this.$emit('page-size-change', size);
  }

  private handleCurrentChange(page: number): void {
    this.$emit('page-change', page);
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  height: 60px;
}
</style>
