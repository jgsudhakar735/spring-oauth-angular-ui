import { ClientDetailsDTO } from './../modal/ClientDetailsDTO';
import { PermissionDTO } from './../modal/PermissionDTO';
import { RoleDTO } from './../modal/RoleDTO';
import { UserDTO } from './../modal/UserDTO';
export class Constants {
static userData: UserDTO[] = [
  {
    name: 'Govindaiah',
    id: 1,
    failedLoginAttemptCount: 0,
    passwordStatus: 'ACTIVE',
    accountNonExpired: 'No',
    accountNonLocked: 'No',
    active: 'Y',
    lastLoginDate: null,
    password: '',
    email: 'govind@gmail.com',
    actions: ''
  },
  {
    name: 'Jayamma',
    id: 2,
    failedLoginAttemptCount: 0,
    passwordStatus: 'ACTIVE',
    accountNonExpired: 'No',
    accountNonLocked: 'No',
    active: 'Y',
    lastLoginDate: null,
    password: '',
    email: 'jayamma@gmail.com',
    actions: ''
  },
  {
    name: 'Sudhakar',
    id: 3,
    failedLoginAttemptCount: 0,
    passwordStatus: 'ACTIVE',
    accountNonExpired: 'No',
    accountNonLocked: 'No',
    active: 'Y',
    lastLoginDate: null,
    password: '',
    email: 'jgsudhakar735@gmail.com',
    actions: ''
  },
  {
    name: 'Sailaja',
    id: 4,
    failedLoginAttemptCount: 0,
    passwordStatus: 'ACTIVE',
    accountNonExpired: 'No',
    accountNonLocked: 'No',
    active: 'Y',
    lastLoginDate: null,
    password: '',
    email: 'sailu@gmail.com',
    actions: ''
  },
  {
    name: 'Sriyaan',
    id: 5,
    failedLoginAttemptCount: 0,
    passwordStatus: 'ACTIVE',
    accountNonExpired: 'No',
    accountNonLocked: 'No',
    active: 'Y',
    lastLoginDate: null,
    password: '',
    email: 'sriyaan@gmail.com',
    actions: ''
  },
  {
    name: 'Sanvi',
    id: 6,
    failedLoginAttemptCount: 0,
    passwordStatus: 'ACTIVE',
    accountNonExpired: 'No',
    accountNonLocked: 'No',
    active: 'Y',
    lastLoginDate: null,
    password: '',
    email: 'sanvi@gmail.com',
    actions: ''
  },
  {
    name: 'Venkateswarlu',
    id: 7,
    failedLoginAttemptCount: 0,
    passwordStatus: 'ACTIVE',
    accountNonExpired: 'No',
    accountNonLocked: 'No',
    active: 'Y',
    lastLoginDate: null,
    password: '',
    email: 'chinna@gmail.com',
    actions: ''
  }
];

static roleData: RoleDTO[] = [
  { roleId: 1, name: 'Admin', description: 'Role with Full Access' , action: ''},
  { roleId: 2, name: 'Operator', description: 'Role with limited Access', action: '' },
  { roleId: 3, name: 'User', description: 'Role with Create Access', action: '' },
  { roleId: 4, name: 'Infra', description: 'Role With IT Module Access', action: '' },
  { roleId: 5, name: 'Network', description: 'Role with Network Access', action: '' },
];

static permissionData: PermissionDTO[] = [
  { permissionId: 1, name: 'CREATE', description: 'Permission to Create A Record', action: '' },
  { permissionId: 2, name: 'UPDATE', description: 'Permission to Update A Record', action: '' },
  { permissionId: 3, name: 'DELETE', description: 'Permission to Delete A Record', action: '' },
  { permissionId: 4, name: 'READ', description: 'Permission to Read A Record', action: '' }
];

static clientsData: ClientDetailsDTO[] = [
  {
     id: 1,
     client_id: 'Mobile',
     resource_ids: 'Sudhakar',
     client_secret: 'TESTAAS',
     scope: 'READ',
     authorized_grant_types: 'client_credentials',
     web_server_redirect_uri: 'test',
     authorities: 'test',
     access_token_validity: 200,
     refresh_token_validity: 100,
     additional_information: 'test',
     autoapprove: '1'
  },
  {
     id: 2,
     client_id: 'Web',
     resource_ids: 'Sriyaan',
     client_secret: 'TESTAAS',
     scope: 'READ',
     authorized_grant_types: 'client_credentials',
     web_server_redirect_uri: '',
     authorities: '',
     access_token_validity: 200,
     refresh_token_validity: 100,
     additional_information: '',
     autoapprove: '1'
  },
  {
     id: 3,
     client_id: 'InternetBanking',
     resource_ids: 'Sanvi',
     client_secret: 'TESTAAS',
     scope: 'READ',
     authorized_grant_types: 'client_credentials',
     web_server_redirect_uri: '',
     authorities: '',
     access_token_validity: 200,
     refresh_token_validity: 100,
     additional_information: '',
     autoapprove: '1'
  },
  {
     id: 4,
     client_id: 'Watch',
     resource_ids: 'Venkatesh',
     client_secret: 'TESTAAS',
     scope: 'READ',
     authorized_grant_types: 'client_credentials',
     web_server_redirect_uri: '',
     authorities: '',
     access_token_validity: 200,
     refresh_token_validity: 100,
     additional_information: '',
     autoapprove: '1'
  }
];

// tslint:disable-next-line:max-line-length
static jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6IlN1ZGhha2FyIiwiYXVkIjpbIlJFU09VUkNFX0lEIl0sInVzZXJfbmFtZSI6IlNhbnZpIiwic2NvcGUiOlsiUkVBRCIsIldSSVRFIl0sImV4cCI6MTU3NTIwMDY3NiwiYWNjZXNzVG9rZW5FeHBpcnlJblNlYyI6MzU5OSwiYXV0aG9yaXRpZXMiOlsiUkVBRCIsIlJPTEVfVVNFUiJdLCJqdGkiOiIwOWExMWM1Mi01YzE4LTQ4MTAtYTMxNC03NWYyMDRiNzlhNWYiLCJjbGllbnRfaWQiOiJtb2JpbGUifQ.N1cxGe9KekqscpI3l40VrTNj7izDYVku2AOk1V_13DM';

static clientBasicAuthCode = 'Basic bW9iaWxlOm1waW4=';

}
