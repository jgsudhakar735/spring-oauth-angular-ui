import { LoaderService } from './shared/services/loader.service';
import { CommonErrorInterceptorService } from './shared/services/common-error-interceptor.service';
import { CommonInterceptorService } from './shared/services/common-interceptor.service';
import { CommonHttpService } from './shared/services/common-http.service';
import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastMessageComponent } from './toast-message/toast-message.component';
import { UrlConfigService } from './shared/services/url-config.service';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptorService } from './shared/services/loader-interceptor';
// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-javascript/sb-admin-material/master/dist/assets/i18n/',
        '.json'
    );*/
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    declarations: [AppComponent, ToastMessageComponent, LoaderComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        LayoutModule,
        HttpClientModule,
        OverlayModule,
        HttpClientModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
      CommonHttpService,
      UrlConfigService,
      LoaderService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: LoaderInterceptorService,
        multi: true ,
      },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CommonErrorInterceptorService,
      multi: true ,
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: CommonInterceptorService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CommonErrorInterceptorService,
      multi: true ,
    }
],
    bootstrap: [AppComponent]
})
export class AppModule {}
