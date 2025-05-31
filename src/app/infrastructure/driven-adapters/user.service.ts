import { Injectable, signal, Signal } from '@angular/core';
import { UserGateway } from '../../domain/model/gateways/user-gateway';
import { User } from '../../domain/model/user';
import { UserLogin } from '../../domain/model/user-login';

@Injectable({
  providedIn: 'root'
})
export class UserService extends UserGateway {

  private keyUser = "User";
  private user? : User;

  override registerUser(user: User): Signal<User> {
    localStorage.setItem(this.keyUser, JSON.stringify(user))
    return signal(user);
  }

  override logInUser(userLogin: UserLogin): Signal<boolean> {
    this.user = JSON.parse(localStorage.getItem(this.keyUser) ?? '');
    console.log(this.user?.userLogin)
    console.log(userLogin)
    return JSON.stringify(userLogin) === JSON.stringify(this.user?.userLogin) ? signal(true) : signal(false);
  }
}
