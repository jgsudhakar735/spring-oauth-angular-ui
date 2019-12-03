import { UserManagementComponent } from './user-management/user-management.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { PermissionManagementComponent } from './permission-management/permission-management.component';
import { RoleManagementComponent } from './role-management/role-management.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'user-management'
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'screen1',
                loadChildren: './screen1/screen1.module#Screen1Module'
            },
            {
                path: 'screen2',
                component: Screen2Component
            },
            {
                path: 'user-management',
                loadChildren: './user-management/user.module#UserModule'
            },
            {
                path: 'role-management',
                loadChildren: './role-management/role.module#RoleModule'
            },
            {
                path: 'permission-management',
                loadChildren: './permission-management/permission.module#PermissionModule'
            },
            {
                path: 'client-management',
                loadChildren: './client-management/client.module#ClientModule'
            },
            {
              path: 'access-denied',
              component: AccessDeniedComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
