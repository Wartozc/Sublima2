import { User } from '../user';
import { UserLogin } from '../user-login';
import { Signal } from '@angular/core';

export abstract class UserGateway {
  abstract registerUser(user: User): Signal<User>;
  abstract logInUser(userLogin: UserLogin): Signal<boolean>;
}
