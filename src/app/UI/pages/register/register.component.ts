import { Component, inject, Signal, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserRegisterUseCase } from '../../../domain/usecase/user-register-use-case';
import { User } from '../../../domain/model/user';
import { UserLogin } from '../../../domain/model/user-login';

@Component({
  selector: 'app-register',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private user!: User;
  private UserLogin!:UserLogin;
  private userRegistryUseCase = inject(UserRegisterUseCase);
  private router = inject(Router);
  private fb = inject(FormBuilder)
  protected formGroupUser:FormGroup;
  private userSignal!: Signal<User>;

  constructor(){
    this.formGroupUser = this.fb.group(
    {
      documentType: ['', Validators.required],
      documentNumber: ['', Validators.required],
      userName: ['', Validators.required],
      userEmail: ['', Validators.required],
      userPassword: ['', Validators.required],
      userPassword2: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
    }
  )
  }

  goToBack(){
    this.router.navigateByUrl("inicio");
  }

  saveUser(){

    if(this.formGroupUser.controls['userPassword'].value !== this.formGroupUser.controls['userPassword2'].value) return;

    if(this.formGroupUser.invalid) return;

    this.UserLogin = {
      email: this.formGroupUser.controls['userEmail'].value ?? '',
      password: this.formGroupUser.controls['userPassword'].value ?? ''
    };

    this.user = {
      documentType : this.formGroupUser.controls['documentType'].value ?? '',
      documentNumber : this.formGroupUser.controls['documentNumber'].value ?? '',
      userName : this.formGroupUser.controls['userName'].value ?? '',
      userLogin : this.UserLogin,
      phone : this.formGroupUser.controls['phone'].value ?? '',
      address : this.formGroupUser.controls['address'].value ?? '',
      city : this.formGroupUser.controls['city'].value ?? '',
      country : this.formGroupUser.controls['country'].value ?? '',
    }

    this.userSignal = this.userRegistryUseCase.registerUser(this.user);
    console.log(this.userSignal())
    if(this.userSignal()) alert(`Usuario ${this.userSignal().userName}, registrado correctamente`);

    this.formGroupUser.reset();
  }

}
