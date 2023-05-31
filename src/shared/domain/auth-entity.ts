export interface Auth {
  email: string;
  password: string;
}

export interface AuthPayload {
  userId: string;
  email: string;
  name: string;
  role: string;
}
