import { Routes } from '@angular/router';
import { MainComponent } from './UI/pages/main/main.component';
import { LoginComponent } from './UI/pages/login/login.component';
import { RegisterComponent } from './UI/pages/register/register.component';
import { MainContainerComponent } from './UI/pages/main-container/main-container.component';
import { DoOrderComponent } from './UI/pages/do-order/do-order.component';
import { CheckOrderComponent } from './UI/pages/check-order/check-order.component';
import { WhoWeAreComponent } from './UI/pages/who-we-are/who-we-are.component';
import { ContactUsComponent } from './UI/pages/contact-us/contact-us.component';

export const routes: Routes = [
  {path : "main", component: MainComponent,
    children: [
      {path: "inicio", component: MainContainerComponent},
      {path: "hacer-pedido", component: DoOrderComponent},
      {path: "revisar-pedido", component: CheckOrderComponent},
      {path: "quienes-somos", component: WhoWeAreComponent},
      {path: "contactanos", component: ContactUsComponent}
  ]},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "**", redirectTo: "main/inicio", pathMatch: 'full'}
];
