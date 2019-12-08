import { Constants } from './../stubdata/Constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  public hasAccessToAdd = false;
  public hasAccessToEdit = false;
  public hasAccessToDelete = false;
  public hasAccessToView = false;

  public userName = '';

  public accessToken = '';

  public refreshToken = '';

  constructor() { }

  getToken(token) {

    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map( function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  setPermissions() {
    const tokenDetails: any = localStorage.getItem('access_token');
    const jsonData: any = this.getToken(tokenDetails);
    for (const key of jsonData.authorities) {
      if (key === 'READ') {
        this.hasAccessToView = true;
      } else if (key === 'DELETE') {
        this.hasAccessToDelete = true;
      } else if (key === 'UPDATE') {
        this.hasAccessToEdit = true;
      } else if (key === 'CREATE') {
        this.hasAccessToAdd = true;
      }
    }
    this.userName = jsonData.user_name;
    this.accessToken = jsonData.access_token;
    this.refreshToken = jsonData.refresh_token;
  }
}
