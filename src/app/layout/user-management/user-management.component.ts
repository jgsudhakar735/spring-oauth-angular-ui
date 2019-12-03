import { AccessDeniedComponent } from './../access-denied/access-denied.component';
import { JwtTokenService } from './../token/jwt-token.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { Constants } from './../stubdata/Constants';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { UserDTO } from '../modal/UserDTO';
import { element } from 'protractor';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  constructor(private http: HttpClient, private dialog: MatDialog, private jwtService: JwtTokenService) { }

  dataLength ;

  hasAccessToAdd;

  hasAccessToDelete;

  hasAccessToEdit;

    displayedColumns = ['id', 'name', 'email', 'passwordStatus', 'accountNonExpired', 'accountNonLocked', 'active', 'actions'];
    dataSource: MatTableDataSource<UserDTO>;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

  ngOnInit() {
    // checking the scrole and access
    const jsonToken = this.jwtService.getToken();
    let hasAccess = false;
    if (jsonToken !== undefined) {
      for (const key of jsonToken.authorities) {
        if (key === 'READ') {
          hasAccess = true;
          break;
        }
      }
      jsonToken.scope.forEach(element => {
        if (element === 'WRITE') {
          this.hasAccessToAdd = true;
        } else if (element === 'DELETE') {
          this.hasAccessToDelete = true;
        } else if (element === 'UPDATE') {
          this.hasAccessToEdit = true;
        }
      });
    }
    if (hasAccess) {
      this.fetchAllUsers();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataLength = this.dataSource.data.length;
    } else {
      this.accessDeniedPopUp();
    }
  }

  fetchAllUsers() {
    this.dataSource = new MatTableDataSource(Constants.userData);
  }

  // dailog Modal for add and user operations
  openDailog(operation: string): void {
    console.log(' Dailog box opening ');
    let dialogRef = null;
    if (operation === 'Add') {
      dialogRef = this.dialog.open(CreateUserComponent, {
        data: {},
        disableClose: false
      });
    }

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
    });

  }

  accessDeniedPopUp(): void {
    let dialogRef = null;
    dialogRef = this.dialog.open(AccessDeniedComponent, {
        data: {},
        disableClose: false
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
    });

  }
}
