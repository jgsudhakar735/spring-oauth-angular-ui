import { PermissionRoleMappingComponent } from './permission-role-mapping/permission-role-mapping.component';
import { PermissionOperationComponent } from './permission-operation/permission-operation.component';
import { CreatePermissionComponent } from './create-permission/create-permission.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionManagementComponent } from './permission-management.component';
import { PermissionViewComponent } from './permission-view/permission-view.component';

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
    },
    {
      path: 'permission-role-mapping',
      component: PermissionRoleMappingComponent
    },
    {
      path: 'permission-view',
      component: PermissionViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PermissionRoutingModule { }
