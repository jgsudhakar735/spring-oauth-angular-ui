import { RoleOperationComponent } from './role-operation/role-operation.component';
import { RoleIfaceImplService } from './impl/role-iface-impl.service';
import { JwtTokenService } from './../token/jwt-token.service';
import { RoleDTO } from './../modal/RoleDTO';
import { Constants } from './../stubdata/Constants';
import { CreateRoleComponent } from './create-role/create-role.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { AccessDeniedComponent } from '../access-denied/access-denied.component';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss']
})
export class RoleManagementComponent implements OnInit {

  constructor(private roleService: RoleIfaceImplService, private dialog: MatDialog, private jwtToken: JwtTokenService) {}

  hasAccessToAdd = this.jwtToken.hasAccessToAdd;

  hasAccessToView = this.jwtToken.hasAccessToView;

  hasAccessToDelete = this.jwtToken.hasAccessToDelete;

  hasAccessToEdit = this.jwtToken.hasAccessToEdit;

  displayedColumns = ['roleId', 'name', 'description', 'action'];
    dataSource: MatTableDataSource<RoleDTO>;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

  ngOnInit() {
    if (this.jwtToken.hasAccessToView) {
        this.fetchAllRoles();
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

  fetchAllRoles() {
    this.roleService.retriveAllRoles().subscribe(
      (roleList: RoleDTO[]) => {
        this.dataSource = new MatTableDataSource(roleList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  // dailog Modal for add and user operations
  openDailog(operation: string, rowData: any): void {
    let dialogRef = null;
    if (operation === 'Add') {
      dialogRef = this.dialog.open(CreateRoleComponent, {
        data: {},
        disableClose: true
      });
    } else {
      dialogRef = this.dialog.open(RoleOperationComponent, {
        data: {
          roleData: rowData,
          operationType: operation
        },
        disableClose: true
      });
    }
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      this.fetchAllRoles();
    });
  }
}
