import { Constants } from 'src/app/layout/stubdata/Constants';
import { UserIfaceImplService } from './impl/user-iface-impl.service';
import { AccessDeniedComponent } from './../access-denied/access-denied.component';
import { JwtTokenService } from './../token/jwt-token.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { UserDTO } from '../modal/UserDTO';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  constructor(private userService: UserIfaceImplService, private dialog: MatDialog,
              private jwtService: JwtTokenService) { }

  dataLength ;

  hasAccessToAdd = this.jwtService.hasAccessToAdd;

  hasAccessToView = this.jwtService.hasAccessToView;

  hasAccessToDelete = this.jwtService.hasAccessToDelete;

  hasAccessToEdit = this.jwtService.hasAccessToEdit;

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
    if (this.hasAccessToView) {
      this.fetchAllUsers();
      if (this.dataSource !== undefined) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataLength = this.dataSource.data.length;
      }
    } else {
      this.accessDeniedPopUp();
    }
  }

  fetchAllUsers() {
    this.userService.retriveAllUsers().subscribe(
      (userList: UserDTO[]) => {
        this.dataSource = new MatTableDataSource(userList);
      }
    );
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
