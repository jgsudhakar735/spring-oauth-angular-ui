export declare interface RoleIfaceService {
retriveAllRoles(): any;

saveRole(roleName: string, roleDesc: string): any;

updateRole(roleId: number, roleName: string, roleDesc: string): any;

deleteRole(roleId: number): any;
}
