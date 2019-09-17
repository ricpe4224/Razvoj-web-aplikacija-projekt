import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { LoginComponent } from './book-registry/pages/main/user/login/login.component';
import {CommonModule} from "@angular/common";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { RegistrationComponent } from './book-registry/pages/main/user/registration/registration.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AvailableBooksComponent } from './book-registry/pages/main/books/available-books.component';
import { UserBooksComponent } from './book-registry/pages/main/user/books/user-books.component';
import { AddBookComponent } from './book-registry/pages/main/admin/add-book.component';
import { NavBarComponent } from './book-registry/shared/nav/nav-bar.component';
import {AuthInterceptor} from "./book-registry/shared/auth/AuthInterceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AvailableBooksComponent,
    UserBooksComponent,
    AddBookComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
