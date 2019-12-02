import { RoleManagementComponent } from './role-management.component';
import { RoleRoutingModule } from './role-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';

import { StatModule } from '../../shared/modules/stat/stat.module';
import { CreateRoleComponent } from './create-role/create-role.component';
import { RoleOperationComponent } from './role-operation/role-operation.component';

@NgModule({
    imports: [
        CommonModule,
        RoleRoutingModule,
        MatGridListModule,
        StatModule,
        MatCardModule,
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    declarations: [RoleManagementComponent, CreateRoleComponent, RoleOperationComponent]
})
export class RoleModule {}
