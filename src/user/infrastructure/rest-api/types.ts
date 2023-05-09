export interface RegisterUserRequest {
  name: string;
  email: string;
  password: string;
}

export interface GetUserRequest {
  uuid: string;
}

export interface UserResponse {
  uuid: string;
  name: string;
  email: string;
}
