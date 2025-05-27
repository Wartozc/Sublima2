import { Observable } from 'rxjs';
import { User } from '../user';
import { UserLogin } from '../user-login';

export abstract class UserGateway {
  abstract registerUser(user: User): Observable<User>;
  abstract logInUser(userLogin: UserLogin): Observable<boolean>;
}
