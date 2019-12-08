import { async } from '@angular/core/testing';
import { JwtTokenService } from './../../../layout/token/jwt-token.service';
import { CommonHttpService } from './../../../shared/services/common-http.service';
import { Injectable } from '@angular/core';
import { LoginInterface } from '../login.interface';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Constants } from 'src/app/layout/stubdata/Constants';
import { TokenModal } from 'src/app/layout/modal/TokenModal';
import { UrlConfigService } from 'src/app/shared/services/url-config.service';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService implements LoginInterface {

  constructor(private httpService: CommonHttpService, private jwtTonen: JwtTokenService,
              private urlService: UrlConfigService) { }

  authenticateUser(userName: string, password: string) {
    const reqData = new HttpParams()
        .set('grant_type', 'password')
        .set('username', userName)
        .set('password', password);
    const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: Constants.clientBasicAuthCode
      });
    return this.httpService.doPost(this.urlService.getUrl('login') , reqData, headers, null, null).
    pipe(
      map((response) => {
        return response.body;
      })
    );
  }
}
