import { CommonHttpService } from './../../../shared/services/common-http.service';
import { RoleIfaceService } from './../iface/role-iface.service';
import { Injectable } from '@angular/core';
import { UrlConfigService } from 'src/app/shared/services/url-config.service';
import { map } from 'rxjs/operators';
import { HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RoleIfaceImplService implements RoleIfaceService {

  updateRole(roleIdNum: number, roleName: string, roleDesc: string) {
    const headers = new HttpHeaders().
    set('Content-Type', 'application/json');
    const postData = {
      roleId: roleIdNum,
      name: roleName,
      description: roleDesc
    };
    return this.httpService.doPost(this.urlService.getUrl('updateRole'), postData, headers, null, null).
    pipe(
      map((response) => {
        return response.body;
      })
    );
  }
  deleteRole(roleIdNum: number) {
    const headers = new HttpHeaders().
    set('Content-Type', 'application/json');
    return this.httpService.doDelete(this.urlService.getUrl('deleteRole') + '/' + roleIdNum, headers, null, null).
    pipe(
      map((response) => {
        console.log('Response from Delete Service::', response);
        return response;
      })
    );
  }

  saveRole(roleName: string, roleDesc: string) {
    const headers = new HttpHeaders().
    set('Content-Type', 'application/json');
    const postData = {
      name: roleName,
      description: roleDesc
    };
    return this.httpService.doPost(this.urlService.getUrl('saveRole'), postData, headers, null, null).
    pipe(
      map((response) => {
        return response.body;
      })
    );
  }

  retriveAllRoles() {
    return this.httpService.doGet(this.urlService.getUrl('roleList'), null, null, null).
    pipe(
      map((response) => {
        return response.body;
      })
    );
  }



  constructor(private httpService: CommonHttpService, private urlService: UrlConfigService) { }
}
