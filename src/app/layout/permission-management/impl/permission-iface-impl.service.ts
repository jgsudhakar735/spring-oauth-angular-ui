import { PermissionDTO } from './../../modal/PermissionDTO';
import { CommonHttpService } from './../../../shared/services/common-http.service';
import { Injectable } from '@angular/core';
import { PermissionIfaceService } from '../iface/permission-iface.service';
import { UrlConfigService } from 'src/app/shared/services/url-config.service';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class PermissionIfaceImplService implements PermissionIfaceService {

  getRoleMappedToPermission(permissionId: number) {
    return this.httpService.doGet(this.urlService.getUrl('viewPermission') + '/' + permissionId, null, null, null).
    pipe(
      map((response) => {
        return response.body;
      })
    );
  }

  retriveList(): any {
    return this.httpService.doGet(this.urlService.getUrl('permissionList'), null, null, null).
    pipe(
      map((response) => {
        return response.body;
      })
    );
  }

  save(data: PermissionDTO) {
    const headers = new HttpHeaders().
    set('Content-Type', 'application/json');
    const postData = {
      name: data.name,
      description: data.description
    };
    return this.httpService.doPost(this.urlService.getUrl('savePermission'), postData, headers, null, null).
    pipe(
      map((response) => {
        return response.body;
      })
    );
  }
  update(data: PermissionDTO) {
    const headers = new HttpHeaders().
    set('Content-Type', 'application/json');
    const postData = {
      permissionId: data.permissionId,
      name: data.name,
      description: data.description
    };
    return this.httpService.doPost(this.urlService.getUrl('updatePermission'), postData, headers, null, null).
    pipe(
      map((response) => {
        return response.body;
      })
    );
  }
  delete(primaryKey: number) {
    const headers = new HttpHeaders().
    set('Content-Type', 'application/json');
    return this.httpService.doDelete(this.urlService.getUrl('deletePermission') + '/' + primaryKey, headers, null, null).
    pipe(
      map((response) => {
        console.log('Response from Delete Service::', response);
        return response;
      })
    );
  }
  constructor(private httpService: CommonHttpService, private urlService: UrlConfigService) { }
}
