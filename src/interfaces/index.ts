/**
 * 权限接口
 */
export interface AuthsInterface {
  id?: string;
  code: string;
  name: string;
  group: string;
}

/**
 * 角色接口
 */
export interface RoleInterface {
  id?: string;
  code: string;
  name: string;
  auths?: AuthsInterface[];
}

/**
 * 用户接口
 */
export interface UserInterface {
  id?: string;
  name: string;
  password: string;
  roles: any[];
}
