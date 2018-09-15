<template>
  <section
    :element-loading-text="loadingText"
    class="wrapper"
    v-loading="loading">
    <div class="login-wrapper">
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="name">
          <el-input
            placeholder="用户名"
            v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="密码"
            v-model="form.password"></el-input>
        </el-form-item>
      </el-form>
      <el-button
        @click="handleLoginClick"
        class="login-button"
        type="primary">登录</el-button>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import LoginRequest from '@/request/login';
import RoleListRequest from '@/request/roleList';
import { setLocalStorage, isHaveStorage, getLocalStorage } from '@/util/storage';
import { RoleInterface } from '@/interfaces';
import { Action, State } from 'vuex-class';

interface FormInterface {
  name: string;
  password: string;
}

interface RulesInterface {
  name: any[];
  password: any[];
}

@Component
export default class Login extends Vue {
  @Action('setToken') public setToken!: (token: string | null) => void;
  @Action('setRoles') public setRoles!: (roles: RoleInterface[]) => void;

  public form: FormInterface = {
    name: '',
    password: '',
  };

  public rules: RulesInterface = {
    name: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
    ],
  };

  public loading: boolean = false;

  public loadingText: string = '';

  public created(): void {
    // 自动登录, localstroge有token进行自动登录
    if (isHaveStorage('token')) {
      this.login();
    }
  }

  /**
   * 登录按钮点击
   */
  public handleLoginClick(): void {
    this.$refs.form.validate((valid: boolean) => {
      if (valid) {
        this.login();
      }
    });
  }

  public async login(): Promise<any> {
    this.loadingText = '登录中……';
    this.loading = true;
    let token: string;
    let list: RoleInterface[];
    // TODO: 准备数据中, 自动登录不再次获取token
    if (!isHaveStorage('token')) {
      ({ data: { token } } = await LoginRequest.login(this.form));
      setLocalStorage('token', token);
    }
    token = getLocalStorage('token');
    this.loadingText = '登录成功, 准备数据中…';
    ({ data: { list } } = await RoleListRequest.getRoleList({ pagestart: 1, pagesize: 10000 }));
    this.setRoles(list);
    this.setToken(token);
    this.loading = false;
    this.$router.push('/home');
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: url('https://unsplash.it/1920/1080?random');
  background-size: 100% 100%;
  .login-wrapper {
    width: 300px;
    height: 100vh;
    padding: 30px 20px;
    background-color: rgba(255, 255, 255, 0.85);
  }
  .login-button {
    width: 100%;
  }
}
</style>