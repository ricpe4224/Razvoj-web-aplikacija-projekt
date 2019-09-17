import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../../shared/book";
import {UserBook} from "../../shared/user-book";

const API_ENDPOINT = 'user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  login(user): Observable<boolean> {
    return this.http.post<boolean>(API_ENDPOINT + 'login', user);
  }

  register(user): Observable<void> {
    return this.http.post<void>(API_ENDPOINT + 'register', user);
  }

  borrowBook(value: UserBook): Observable<void> {
    return this.http.post<void>(API_ENDPOINT + 'borrow-book', value);
  }

  returnBook(value): Observable<void> {
    return this.http.post<void>(API_ENDPOINT + 'return-book', value);
  }

  getUserBooks(username: string): Observable<Book[]> {
    return this.http.get<Book[]>(API_ENDPOINT + 'books?username=' + username);
  }
}
