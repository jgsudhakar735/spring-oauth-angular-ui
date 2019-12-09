import { RoleIfaceImplService } from './../impl/role-iface-impl.service';
import { RoleDTO } from './../../modal/RoleDTO';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-role-operation',
  templateUrl: './role-operation.component.html',
  styleUrls: ['./role-operation.component.scss']
})
export class RoleOperationComponent implements OnInit {
  canEdit = false;
  public roleForm: FormGroup;
  operationType;
  constructor(private dialogRef: MatDialogRef<RoleOperationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {roleData: RoleDTO , operationType: string},
              private roleService: RoleIfaceImplService) { }

  ngOnInit() {
    this.operationType = this.data.operationType;
    this.roleForm = new FormGroup({
      roleId: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      roleDesc: new FormControl('', [Validators.required])
    });
    this.dataCanEditable();
  }

  onCancel(): void {
    this.dialogRef.close();
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.roleForm.controls[controlName].hasError(errorName);
  }

  processData(formData) {
    console.log('form data: ', formData);
    if (this.operationType === 'Edit') {
      this.roleService.updateRole(formData.roleId, formData.name, formData.roleDesc).subscribe(
        res => {
          console.log('Updated Role Data:', res);
          if (res.roleId != null ) {
            this.onCancel();
          }
        }
        );
      } else {
        this.roleService.deleteRole(formData.roleId).subscribe(
          res => {
            console.log('Deleted Role Data:', res);
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
}
