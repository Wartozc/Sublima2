import { Injectable } from '@angular/core';
import { UserGateway } from '../../domain/model/gateways/user-gateway';
import { Observable } from 'rxjs';
import { User } from '../../domain/model/user';
import { UserLogin } from '../../domain/model/user-login';

@Injectable({
  providedIn: 'root'
})
export class UserService extends UserGateway {

  override registerUser(user: User): Observable<User> {
    throw new Error('Method not implemented.');
  }

  override logInUser(userLogin: UserLogin): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
}
