import { Constants } from './../stubdata/Constants';
import { JwtTokenService } from './../token/jwt-token.service';
import { Component, OnInit } from '@angular/core';
import { LayoutModule } from '../layout.module';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.scss']
})
export class AccessDeniedComponent implements OnInit {

  name;
  constructor(private jwtService: JwtTokenService, private dialogRef: MatDialogRef<AccessDeniedComponent>) { }

  ngOnInit() {
    this.name = this.jwtService.getToken(Constants.jwtToken).user_name;
  }
  onClick() {
    this.dialogRef.close();
  }
}
