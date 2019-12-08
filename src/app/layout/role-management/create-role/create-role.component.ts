import { RoleIfaceImplService } from './../impl/role-iface-impl.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { CreateUserComponent } from '../../user-management/create-user/create-user.component';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit {
  public roleForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<CreateRoleComponent>, private roleService: RoleIfaceImplService) { }

  ngOnInit() {
    this.roleForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      roleDesc: new FormControl('', [Validators.required])
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.roleForm.controls[controlName].hasError(errorName);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  createRole(formData) {
    console.log('form data: ', formData);
    this.roleService.saveRole(formData.name, formData.roleDesc).subscribe(
      res => {
        console.log('Saved Role Data:', res);
        if (res.roleId != null ){
        this.onCancel();
        }
      }
    );
  }

}
