import { LoginService } from './interface/impl/login.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatSnackBarModule } from '@angular/material';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatSnackBarModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    providers: [
      LoginService
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}
