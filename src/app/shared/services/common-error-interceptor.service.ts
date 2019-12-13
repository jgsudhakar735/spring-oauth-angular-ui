import { ToastMessageComponent } from './../../toast-message/toast-message.component';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CommonErrorInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError( err => {
      console.log('Error::', err.status);
      console.log('req::', req.url);
      let error;
      if (err.status === 400) {
        console.log(err.error.message);
        error = err.error.message || err.error.error_description;
        // this.showToastMessage();
        this.openToastMessage(error);
      } else if (err.status === 404) {
        this.openToastMessage('Server Does not found Path !, Please check server team ');
      } else if (err.status === 0 || err.status === 500) {
        this.openToastMessage('Server Not Responding!, Please check server status ');
      } else {
        error = err.error.message || err.error.error_description;
        this.openToastMessage(error);
      }
      return throwError(error);
    }));
  }

  constructor(private snackBar: MatSnackBar) { }

  showToastMessage() {
    this.snackBar.openFromComponent(ToastMessageComponent, {
      duration: 2000,
      panelClass: [ 'mat-toolbar', 'mat-warn' ]
    });
  }

  openToastMessage(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
      panelClass: [ 'mat-toolbar', 'mat-warn' ]
    });
  }
}
