import { Component, inject, Signal, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserRegisterUseCase } from '../../../domain/usecase/user-register-use-case';
import { UserLogin } from '../../../domain/model/user-login';

@Component({
  selector: 'app-login',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private router = inject(Router);
  private fb = inject(FormBuilder)
  private userLogin! : UserLogin;
  private isAuthenticated! : Signal<boolean>;
  private UserRegisterUseCase = inject(UserRegisterUseCase)
  protected forGroupAuth!: FormGroup;

  constructor(){
    this.forGroupAuth =this.fb.group({
      email : ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  goToBack(){
    this.router.navigateByUrl("inicio");
  }

  logIn(){
    this.userLogin = {
      email : this.forGroupAuth.controls["email"].value,
      password : this.forGroupAuth.controls["password"].value,
    }
   this.isAuthenticated = this.UserRegisterUseCase.logInUser(this.userLogin);

   this.isAuthenticated() ? alert(`Bienvenido ${this.userLogin.email}`) : alert("Usuario y/o contraseña inválidos");
   if(this.isAuthenticated()) this.router.navigateByUrl("inicio");
  }
}
