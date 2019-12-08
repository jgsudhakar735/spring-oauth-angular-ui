import { PermissionIfaceImplService } from './impl/permission-iface-impl.service';
import { JwtTokenService } from './../token/jwt-token.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { CreatePermissionComponent } from './create-permission/create-permission.component';
import { AccessDeniedComponent } from '../access-denied/access-denied.component';
import { PermissionDTO } from '../modal/PermissionDTO';

@Component({
  selector: 'app-permission-management',
  templateUrl: './permission-management.component.html',
  styleUrls: ['./permission-management.component.scss']
})
export class PermissionManagementComponent implements OnInit {

  constructor(private permissionService: PermissionIfaceImplService, private jwtToken: JwtTokenService, private dialog: MatDialog) {
  }

  hasAccessToAdd = this.jwtToken.hasAccessToAdd;

  hasAccessToView = this.jwtToken.hasAccessToView;

  hasAccessToDelete = this.jwtToken.hasAccessToDelete;

  hasAccessToEdit = this.jwtToken.hasAccessToEdit;


  displayedColumns = ['permissionId', 'name', 'description', 'action'];
  dataSource: MatTableDataSource<PermissionDTO>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
  }

ngOnInit() {
    if (this.jwtToken.hasAccessToView) {
      this.fetchAllPermissions();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  } else {
    this.accessDeniedPopUp();
  }
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

fetchAllPermissions() {
  this.permissionService.retriveAllPermission().subscribe(
    (permissionList: PermissionDTO[]) => {
      this.dataSource = new MatTableDataSource(permissionList);
    }
  );
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
