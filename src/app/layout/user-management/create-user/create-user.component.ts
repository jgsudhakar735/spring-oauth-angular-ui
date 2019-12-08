import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<CreateUserComponent>) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.email]),
      userStatus: new FormControl('', [Validators.required]),
      userPassword: new FormControl('', [Validators.required, Validators.maxLength(14), Validators.minLength(8)])
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  createUser(formData) {
    console.log('form data: ', formData);

  }
}
