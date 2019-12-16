import { Component, OnInit, Inject } from '@angular/core';
import { RoleDTO } from '../../modal/RoleDTO';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PermissionRoleMappingComponent } from '../permission-role-mapping/permission-role-mapping.component';
import { PermissionDTO } from '../../modal/PermissionDTO';
import { PermissionIfaceImplService } from '../impl/permission-iface-impl.service';

@Component({
  selector: 'app-permission-view',
  templateUrl: './permission-view.component.html',
  styleUrls: ['./permission-view.component.scss']
})
export class PermissionViewComponent implements OnInit {

  rolesData: RoleDTO[];
  options: FormGroup;
  constructor(private dialogRef: MatDialogRef<PermissionRoleMappingComponent>,
              @Inject(MAT_DIALOG_DATA) public data: PermissionDTO,
              private permissionService: PermissionIfaceImplService) { }

  ngOnInit() {
    this.fetchRolesMappedToPermission();
    this.options = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  processData(formData) {
    console.log('form data: ', formData);
  }

  fetchRolesMappedToPermission() {
    console.log('Permission ID :::', this.data.permissionId);
    this.permissionService.getRoleMappedToPermission(this.data.permissionId).subscribe(
      (roleList: RoleDTO[]) => {
        this.rolesData = roleList;
      }
    );
  }


}
