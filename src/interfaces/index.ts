/**
 * 列表请求的接口
 * 一些定制化的请求参数，通过接口的继承实现
 */
export interface tableListInterface {
  pagesize: number;
  pagestart: number;
}

export interface IdInterface {
  id?: string;
}

export interface AuthTableInterface extends tableListInterface {
  group?: string
}

/**
 * 权限接口
 */
export interface AuthsInterface extends IdInterface {
  code: string;
  name: string;
  group: string;
}

/**
 * 角色接口
 */
export interface RoleInterface extends IdInterface {
  code?: string;
  name?: string;
  auths?: AuthsInterface[];
}

/**
 * 用户接口
 */
export interface UserInterface extends IdInterface {
  name: string;
  password?: string;
  roles: any[];
}

export interface LoginInterface {
  name: string;
  password: string;
}

export interface QueryInterface {
  path?: string
}

export interface MenuInterface {
  path: string;
  auth: string;
  name: string;
  icon: string;
}