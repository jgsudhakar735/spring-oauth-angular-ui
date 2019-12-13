import { RoleDTO } from './../../modal/RoleDTO';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PermissionDTO } from '../../modal/PermissionDTO';
import { PermissionIfaceImplService } from '../impl/permission-iface-impl.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-permission-role-mapping',
  templateUrl: './permission-role-mapping.component.html',
  styleUrls: ['./permission-role-mapping.component.scss']
})
export class PermissionRoleMappingComponent implements OnInit {

  rolesData: RoleDTO[];
  options: FormGroup;
  constructor(private dialogRef: MatDialogRef<PermissionRoleMappingComponent>,
              @Inject(MAT_DIALOG_DATA) public data: PermissionDTO,
              private permissionService: PermissionIfaceImplService) { }

  ngOnInit() {
    this.fetchRolesMappedToPermission();
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
