import { CreateUserComponent } from './create-user/create-user.component';
import { Constants } from './../stubdata/Constants';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  dataLength ;

    displayedColumns = ['id', 'name', 'email', 'passwordStatus', 'accountNonExpired', 'accountNonLocked', 'active'];
    dataSource: MatTableDataSource<UserDTO>;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

  ngOnInit() {
    this.fetchAllUsers();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataLength = this.dataSource.data.length;
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
}
