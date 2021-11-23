import { MatTabsModule } from '@angular/material/tabs';
import { AuthIntercaptor } from './services/auth.interceptor';
import { UserService } from './services/user/user.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ForgetPasswordComponent } from './components/user/forget-password-component/forget-password.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'


import { HeaderComponent } from './components/user/header/header.component';
import { HeaderSearchComponent } from './components/user/header-search/header-search.component';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login-component/login.component';
import { SigninComponent } from './components/user/signin/signin.component';
import { ResetPasswordComponent } from './components/user/reset-password/reset-password.component';
import { AuthGuard } from './services/auth.guard';
import { BookDetailsComponent } from './components/book/book-details/book-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSearchComponent,
    LoginComponent,
    ForgetPasswordComponent,
    routingComponents,
    SigninComponent,
    ResetPasswordComponent,
    BookDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule
  ],
  providers: [UserService , AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
