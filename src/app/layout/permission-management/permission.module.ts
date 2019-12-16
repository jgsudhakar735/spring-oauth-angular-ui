import { PermissionIfaceImplService } from './impl/permission-iface-impl.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PermissionManagementComponent } from './permission-management.component';
import { PermissionRoutingModule } from './permission-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule, MatPaginatorModule,
   MatSortModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatCheckboxModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';

import { StatModule } from '../../shared/modules/stat/stat.module';
import { CreatePermissionComponent } from './create-permission/create-permission.component';
import { PermissionOperationComponent } from './permission-operation/permission-operation.component';
import { PermissionRoleMappingComponent } from './permission-role-mapping/permission-role-mapping.component';
import { PermissionViewComponent } from './permission-view/permission-view.component';

@NgModule({
    imports: [
        CommonModule,
        PermissionRoutingModule,
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
        ReactiveFormsModule,
        MatCheckboxModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    providers: [
      PermissionIfaceImplService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA ],
    declarations: [PermissionManagementComponent, CreatePermissionComponent, PermissionOperationComponent, PermissionRoleMappingComponent, PermissionViewComponent]
})
export class PermissionModule {}
