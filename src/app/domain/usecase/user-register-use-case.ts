import { inject, Injectable, Signal } from "@angular/core";
import { UserGateway } from '../model/gateways/user-gateway';
import { User } from "../model/user";
import { UserLogin } from "../model/user-login";

@Injectable({
  providedIn: "root",
})


export class UserRegisterUseCase{
  private _userGateway = inject(UserGateway);

  registerUser(user: User): Signal<User>{
    return this._userGateway.registerUser(user);
  };

  logInUser(userLogin: UserLogin): Signal<boolean>{
    return this._userGateway.logInUser(userLogin);
  };

}
