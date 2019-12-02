import { UserOperationComponent } from './user-operation/user-operation.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management.component';

const routes: Routes = [
    {
        path: '',
        component: UserManagementComponent
    },
    {
      path: 'create-user',
      component: CreateUserComponent
    },
    {
      path: 'view-user',
      component: UserOperationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }
