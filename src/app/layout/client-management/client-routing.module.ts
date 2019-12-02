import { ClientOperationComponent } from './client-operation/client-operation.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ClientManagementComponent } from './client-management.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ClientManagementComponent
    },
    {
      path: 'create-client',
      component: CreateClientComponent
    },
    {
      path: 'client-operation',
      component: ClientOperationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ClientRoutingModule { }
