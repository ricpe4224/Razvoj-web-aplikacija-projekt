import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./book-registry/pages/main/user/login/login.component";
import {RegistrationComponent} from "./book-registry/pages/main/user/registration/registration.component";
import {AvailableBooksComponent} from "./book-registry/pages/main/books/available-books.component";
import {UserBooksComponent} from "./book-registry/pages/main/user/books/user-books.component";
import {AddBookComponent} from "./book-registry/pages/main/admin/add-book.component";
import {AuthGuard} from "./book-registry/shared/auth/auth-guard";

const routes: Routes = [
  {path: '', redirectTo: 'user/login', pathMatch: 'full'},
  {path: 'user/login', component: LoginComponent},
  {path: 'user/registration', component: RegistrationComponent},
  {path: 'books/available', component: AvailableBooksComponent, canActivate: [AuthGuard]},
  {path: 'books/add', component: AddBookComponent, canActivate: [AuthGuard]},
  {path: 'user/books', component: UserBooksComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
