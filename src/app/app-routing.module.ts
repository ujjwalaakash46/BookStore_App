import { AuthGuard } from './services/auth.guard';
import { SigninComponent } from './components/user/signin/signin.component';
import { LoginComponent } from './components/user/login-component/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/user/header/header.component';
import { ResetPasswordComponent } from './components/user/reset-password/reset-password.component';
import { HeaderSearchComponent } from './components/user/header-search/header-search.component';
import { FooterComponent } from './components/user/footer/footer.component';
import { BooklistComponent } from './components/user/booklist/booklist.component';
import { ForgetPasswordComponent } from './components/user/forget-password-component/forget-password.component';
import { OrderGreetingComponent } from './components/book/order-greeting/order-greeting.component';
import { WishlistComponent } from './components/book/wishlist/wishlist.component';
import { PersonalDetailsComponent } from './components/user/personal-details/personal-details.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SigninComponent },
  { path: "header", component: HeaderComponent },
  { path: "footer", component: FooterComponent },
  { path: "headersearch", component: HeaderSearchComponent },
  { path: "booklist", component: BooklistComponent },
  { path: "forget-password", component: ForgetPasswordComponent },
  { path: "greeting", component: OrderGreetingComponent},
  { path: "wishlist", component: WishlistComponent},
  { path: "personal-details", component: PersonalDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, HeaderComponent, ResetPasswordComponent, SigninComponent,
  HeaderSearchComponent, FooterComponent, BooklistComponent, ForgetPasswordComponent]