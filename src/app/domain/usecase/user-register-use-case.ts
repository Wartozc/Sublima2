import { inject, Injectable } from "@angular/core";
import { UserGateway } from '../model/gateways/user-gateway';
import { User } from "../model/user";
import { Observable } from "rxjs";
import { UserLogin } from "../model/user-login";

@Injectable({
  providedIn: "root",
})


export class UserRegisterUseCase{
  private _userGateway = inject(UserGateway);

  registerUser(user: User): Observable<User>{
    return this._userGateway.registerUser(user);
  };

  logInUser(userLogin: UserLogin): Observable<boolean>{
    return this._userGateway.logInUser(userLogin);
  };

}
