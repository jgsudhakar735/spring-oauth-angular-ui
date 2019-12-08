import { LoginService } from './interface/impl/login.service';
import { TokenModal } from './../layout/modal/TokenModal';
import { JwtTokenService } from './../layout/token/jwt-token.service';
import { ToastMessageComponent } from './../toast-message/toast-message.component';
import { Constants } from './../layout/stubdata/Constants';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonHttpService } from './../shared/services/common-http.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { error } from 'protractor';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [ LoginService ]
})
export class LoginComponent implements OnInit {
    constructor(private router: Router, private loginService: LoginService,
                private snackBar: MatSnackBar, private jwtService: JwtTokenService) {}

    userLoginForm: FormGroup;
    durationInSeconds = 3;
    ngOnInit() {
      this.userLoginForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(5)]),
      userPassword: new FormControl('', [Validators.required, Validators.maxLength(14), Validators.minLength(5)])
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.userLoginForm.controls[controlName].hasError(errorName);
  }
    onLogin(formData: any) {
      const userName = formData.name;
      const userPassword = formData.userPassword;
      if (undefined === userName || userName === '') {
        this.showErrorToast('Enter User Name');
      } else if (undefined === userPassword || userPassword === '') {
        this.showErrorToast('Enter User Password');
      } else {
    //  this.loginService.authenticateUser(userName, userPassword);
     this.loginService.authenticateUser(userName, userPassword).subscribe(
       (response) => {
         const tokenDetails: TokenModal = JSON.parse(JSON.stringify(response)) as TokenModal;
         if (tokenDetails !== undefined) {
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('access_token', tokenDetails.access_token);
        localStorage.setItem('refresh_token', tokenDetails.refresh_token);
        this.jwtService.setPermissions();
        this.router.navigate(['/user-management']);
       }
       }
     );
      }
    }

    showErrorToast(message: string) {
      this.snackBar.open(message, '', {
        duration: 2000,
        panelClass: [ 'mat-toolbar', 'mat-warn' ]

      });
    }
}
