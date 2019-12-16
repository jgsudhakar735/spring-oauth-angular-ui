import { PermissionIfaceImplService } from './../impl/permission-iface-impl.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PermissionDTO } from '../../modal/PermissionDTO';
import { RoleDTO } from '../../modal/RoleDTO';

@Component({
  selector: 'app-permission-operation',
  templateUrl: './permission-operation.component.html',
  styleUrls: ['./permission-operation.component.scss']
})
export class PermissionOperationComponent implements OnInit {
  rolesData: RoleDTO[];
  canEdit = false;
  public permissionForm: FormGroup;
  operationType;
  constructor(private dialogRef: MatDialogRef<PermissionOperationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {permissionData: PermissionDTO , operationType: string},
              private permissionService: PermissionIfaceImplService) { }

  ngOnInit() {
    this.operationType = this.data.operationType;
    this.permissionForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      permissionId: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      permissionDesc: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(10)])
    });
    this.dataCanEditable();
    if (this.operationType === 'View') {
      this.fetchRolesMappedToPermission();
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.permissionForm.controls[controlName].hasError(errorName);
  }

  processData(formData) {
    console.log('form data: ', formData);
    if (this.operationType === 'Edit') {
      const permissionData: PermissionDTO = {
        permissionId: formData.permissionId,
        name: formData.name,
        description: formData.permissionDesc,
        action: ''
      };
      this.permissionService.update(permissionData).subscribe(
        res => {
          console.log('Updated Permission Data:', res);
          if (res.permissionId != null ) {
            this.onCancel();
          }
        }
        );
      } else {
        this.permissionService.delete(formData.permissionId).subscribe(
          res => {
            console.log('Deleted Permission Data:', res);
            if (res != null ) {
              this.onCancel();
            }
          }
          );
      }
  }

  dataCanEditable() {
    if (this.operationType === 'Edit') {
      this.canEdit = false;
    } else {
      this.canEdit = true;
    }
  }

  fetchRolesMappedToPermission() {
    console.log('Permission ID :::', this.data.permissionData.permissionId);
    this.permissionService.getRoleMappedToPermission(this.data.permissionData.permissionId).subscribe(
      (roleList: RoleDTO[]) => {
        this.rolesData = roleList;
      }
    );
  }
}
