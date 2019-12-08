import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { CreateUserComponent } from '../../user-management/create-user/create-user.component';

@Component({
  selector: 'app-create-permission',
  templateUrl: './create-permission.component.html',
  styleUrls: ['./create-permission.component.scss']
})
export class CreatePermissionComponent implements OnInit {
  public permissionForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<CreatePermissionComponent>) { }

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

  }

}
