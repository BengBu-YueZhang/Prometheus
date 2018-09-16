<template>
<section>
  <div class="text-align-left m-b-10">
    <el-select
      @change="handleSelectChange"
      v-model="role"
      placeholder="请选择角色">
      <el-option
        v-for="(role, index) in roles"
        :key="index"
        :label="role.name"
        :value="role.id">
      </el-option>
    </el-select>
  </div>
  <div>
    <el-checkbox-group v-model="auths">
      <div class="flex-start-start-wrap">
        <el-card
          class="box-card w350 m-r-10 m-b-5"
          v-for="(group, index) in groups"
          :key="index">
          <div slot="header" class="clearfix">
            <span class="f16">{{group.group}}</span>
            <el-dropdown style="float: right; padding: 3px 0">
              <span class="el-dropdown-link">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>编辑</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div>
            <div
              v-for="(code, index) in group.allows"
              :key="index">
              <el-checkbox
                :label="code">
                {{code.name}}
              </el-checkbox>
            </div>
          </div>
        </el-card>
      </div>
    </el-checkbox-group>
  </div>
</section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import AuthListRequest from '@/request/authList';
import { AuthsInterface } from '@/interfaces';
import { State } from 'vuex-class';
import { RoleInterface } from '@/interfaces';

@Component
export default class Config extends Vue {

  @State('roles') public roles!: RoleInterface;

  public role: string = [];

  public groups: any[] = [];

  public auths: any[] = [];

  public created(): void {
    this.get();
  }  

  public async get(): Promise<any> {
    let list: AuthsInterface[];
    let total: number;
    let groups: object = {};
    ({ data: { list } } = await AuthListRequest.getAuthList(this.filter));
    for (let i = 0; i < list.length; i++) {
      if (!groups[list[i].group]) {
        groups[list[i].group] = {
          group: list[i].group,
          allows: [list[i]]
        }
      } else {
        groups[list[i].group].allows.push(list[i])
      }
    }
    for (let k in groups) {
      this.groups.push(groups[k])
    }
  }

  public handleSelectChange(value): void {
  }
}
</script>
