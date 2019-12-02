import { CreateClientComponent } from './create-client/create-client.component';
import { HttpClient } from '@angular/common/http';
import { Constants } from './../stubdata/Constants';
import { ClientDetailsDTO } from './../modal/ClientDetailsDTO';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.scss']
})
export class ClientManagementComponent implements OnInit {

  constructor(private http: HttpClient, private dailog: MatDialog) {

  }
  displayedColumns = ['client_id', 'client_secret', 'authorized_grant_types', 'authorities', 'access_token_validity', 'refresh_token_validity'];
  dataSource: MatTableDataSource<ClientDetailsDTO>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
  }

ngOnInit() {
  this.fetchAllClients();
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

fetchAllClients() {
  this.dataSource = new MatTableDataSource(Constants.clientsData);
}
 // dailog Modal for add and user operations
 openDailog(operation: string): void {
  console.log(' Dailog box opening ');
  let dialogRef = null;
  if (operation === 'Add') {
    dialogRef = this.dailog.open(CreateClientComponent, {
      data: {},
      disableClose: false
    });
  }

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed' + result);
  });
}
}
