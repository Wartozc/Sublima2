import { UserLogin } from './user-login';
export interface User {
  documentType: string,
  documentNumber: String,
  userName: String,
  userLogin: UserLogin,
  phone: string,
  address: string,
  city: string,
  country: string
}
