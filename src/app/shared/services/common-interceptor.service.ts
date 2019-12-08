import { JwtTokenService } from './../../layout/token/jwt-token.service';
import { Constants } from './../../layout/stubdata/Constants';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonInterceptorService implements HttpInterceptor {

  constructor(private jwtservice: JwtTokenService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // update the request . Here we can add condition based on the type of method calling etc..
    // how to update the request Parameters
    if (request.url.endsWith('oauth/token')) {
    request = request.clone({
      headers: request.headers.set('Authorization', Constants.clientBasicAuthCode)
    });
  } else {
    request = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
    });
  }
    // logging the updated Parameters to browser's console
    console.log('Before making api call : ', request);
    return next.handle(request).pipe(
      tap(
        event => {
          // logging the http response to browser's console in case of a success
          if (event instanceof HttpResponse) {
            console.log('api call success :', event);
          }
        },
        error => {
          // logging the http response to browser's console in case of a failuer
          if (event instanceof HttpResponse) {
            console.log('api call error :', event);
          }
        }
      )
    );
  }}
