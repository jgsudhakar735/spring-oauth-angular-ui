import { PermissionOperationComponent } from './permission-operation/permission-operation.component';
import { CreatePermissionComponent } from './create-permission/create-permission.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionManagementComponent } from './permission-management.component';

const routes: Routes = [
    {
        path: '',
        component: PermissionManagementComponent
    },
    {
      path: 'create-permission',
      component: CreatePermissionComponent
    },
    {
      path: 'permission-operation',
      component: PermissionOperationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PermissionRoutingModule { }
