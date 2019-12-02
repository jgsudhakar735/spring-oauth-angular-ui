import { HttpClient } from '@angular/common/http';
import { Constants } from './../stubdata/Constants';
import { PermissionDTO } from './../modal/PermissionDTO';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { CreatePermissionComponent } from './create-permission/create-permission.component';

@Component({
  selector: 'app-permission-management',
  templateUrl: './permission-management.component.html',
  styleUrls: ['./permission-management.component.scss']
})
export class PermissionManagementComponent implements OnInit {

  constructor(private http: HttpClient, private dialog: MatDialog) {
  }

  displayedColumns = ['id', 'name', 'desc'];
  dataSource: MatTableDataSource<PermissionDTO>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
  }

ngOnInit() {
  this.fetchAllPermissions();
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}
fetchAllPermissions() {
  this.dataSource = new MatTableDataSource(Constants.permissionData);
}
 // dailog Modal for add and user operations
 openDailog(operation: string): void {
  console.log(' Dailog box opening ');
  let dialogRef = null;
  if (operation === 'Add') {
    dialogRef = this.dialog.open(CreatePermissionComponent, {
      data: {},
      disableClose: false
    });
  }

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed' + result);
  });
}
}
