export interface UserBase {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
}

export interface UserCreate extends UserBase {
  password: string;
}

export interface UserRead extends UserBase {
  id: number;
  createdAt: string;
}

export interface UserUpdate {
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserBackendRead {
  id: number;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  password_hash: string;
  createdAt: string;
}
