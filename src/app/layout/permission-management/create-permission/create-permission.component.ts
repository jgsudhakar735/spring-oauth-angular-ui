import { PermissionIfaceImplService } from './../impl/permission-iface-impl.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { CreateUserComponent } from '../../user-management/create-user/create-user.component';
import { PermissionDTO } from '../../modal/PermissionDTO';

@Component({
  selector: 'app-create-permission',
  templateUrl: './create-permission.component.html',
  styleUrls: ['./create-permission.component.scss']
})
export class CreatePermissionComponent implements OnInit {
  public permissionForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<CreatePermissionComponent>, private permissionService: PermissionIfaceImplService) { }

  ngOnInit() {
    this.permissionForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      permissionDesc: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(10)])
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.permissionForm.controls[controlName].hasError(errorName);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  createPermission(formData) {
    console.log('form data: ', formData);
    const permissionData: PermissionDTO = {
      name: formData.name,
      description: formData.permissionDesc,
      action: '',
      permissionId: null
    };
    this.permissionService.save(permissionData).subscribe(
      res => {
        if (res.permissionId != null ) {
        this.onCancel();
        }
      }
    );
  }

}
