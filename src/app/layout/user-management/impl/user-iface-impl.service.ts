import { CommonHttpService } from './../../../shared/services/common-http.service';
import { async } from '@angular/core/testing';
import { UserDTO } from './../../modal/UserDTO';
import { UserModule } from './../user.module';
import { Injectable } from '@angular/core';
import { UserIfaceService } from '../iface/user-iface.service';
import { UrlConfigService } from 'src/app/shared/services/url-config.service';
import { map } from 'rxjs/operators';

@Injectable()
export class UserIfaceImplService implements UserIfaceService {
 retriveAllUsers() {
   return this.httpService.doGet(this.urlService.getUrl('userList'), null, null, null).
     pipe(map((response) => {
      return response.body;
     }));
  }

  constructor(private httpService: CommonHttpService, private urlService: UrlConfigService) { }
}
