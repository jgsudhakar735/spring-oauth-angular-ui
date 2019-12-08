import { PermissionDTO } from './../../modal/PermissionDTO';
import { CommonHttpService } from './../../../shared/services/common-http.service';
import { Injectable } from '@angular/core';
import { PermissionIfaceService } from '../iface/permission-iface.service';
import { UrlConfigService } from 'src/app/shared/services/url-config.service';
import { map } from 'rxjs/operators';

@Injectable()
export class PermissionIfaceImplService implements PermissionIfaceService {
  retriveAllPermission() {
    return this.httpService.doGet(this.urlService.getUrl('permissionList'), null, null, null).
    pipe(
      map((response) => {
        return response.body;
      })
    );
  }

  constructor(private httpService: CommonHttpService, private urlService: UrlConfigService) { }
}
