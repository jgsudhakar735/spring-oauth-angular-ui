import { RoleOperationComponent } from './role-operation/role-operation.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleManagementComponent } from './role-management.component';

const routes: Routes = [
    {
        path: '',
        component: RoleManagementComponent
    },
    {
      path: 'create-role',
      component: CreateRoleComponent
    },
    {
      path: 'role-operation',
      component: RoleOperationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RoleRoutingModule { }
