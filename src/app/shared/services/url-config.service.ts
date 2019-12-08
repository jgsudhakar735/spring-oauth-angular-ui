import { element } from 'protractor';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlConfigService {

  baseUrl = 'http://localhost:8888/spring-oauth/';
  constructor() { }

  url = new Map<string, string>([
  ['login', this.baseUrl + 'oauth/token'],
  ['userList', this.baseUrl + 'users/user'],
  ['roleList', this.baseUrl + 'role/1.0/roleList'],
  ['saveRole', this.baseUrl + 'role/1.0/saveRole'],
  ['updateRole', this.baseUrl + 'role/1.0/updateRole'],
  ['deleteRole', this.baseUrl + 'role/1.0/deleteRole'],
  ['permissionList', this.baseUrl + 'permission/1.0/permissionList']
  ]);

  getUrl(moduleName: string): any {
    return this.url.get(moduleName);
  }
}
