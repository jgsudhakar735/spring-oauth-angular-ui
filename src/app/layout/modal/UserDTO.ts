export interface UserDTO {

  // Name of the User
  name: string;

  // Email of the User
  email: string;

  // Primary Key of the table
  id: number;

  // Failed Login Count
  failedLoginAttemptCount: number;

  // Last Login Date
  lastLoginDate: Date;

  // User Current Password
  password: string;

  // User Password Status
  passwordStatus: string;

  // User Account Expired or not
  accountNonExpired: string;

  // User Account Locked or Not
  accountNonLocked: string;

  // User Status
  active: string;
}
