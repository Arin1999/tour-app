import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SiteComponent } from "./site/site.component";
import { RegisterUserComponent } from "./register-user/register-user.component";
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NotifyService } from "./service/notify.service";
import { CookieService } from "ngx-cookie-service";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SiteComponent,
    RegisterUserComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    CommonModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NotifyService,
    CookieService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
