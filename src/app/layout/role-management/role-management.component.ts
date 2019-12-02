import { RoleDTO } from './../modal/RoleDTO';
import { Constants } from './../stubdata/Constants';
import { CreateRoleComponent } from './create-role/create-role.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss']
})
export class RoleManagementComponent implements OnInit {

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  displayedColumns = ['id', 'name', 'desc'];
    dataSource: MatTableDataSource<RoleDTO>;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

  ngOnInit() {
    this.fetchAllRoles();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  fetchAllRoles() {
    this.dataSource = new MatTableDataSource(Constants.roleData);
  }
  // dailog Modal for add and user operations
  openDailog(operation: string): void {
    console.log(' Dailog box opening ');
    let dialogRef = null;
    if (operation === 'Add') {
      dialogRef = this.dialog.open(CreateRoleComponent, {
        data: {},
        disableClose: false
      });
    }

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
    });
  }
}


