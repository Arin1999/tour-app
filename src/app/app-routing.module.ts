import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SiteComponent } from "./site/site.component";
import { RegisterUserComponent } from "./register-user/register-user.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "site", component: SiteComponent },
  { path: "registerUser", component: RegisterUserComponent },
  { path: "changePassword", component: ChangePasswordComponent },
  { path: "forgotPassword", component: ForgotPasswordComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
