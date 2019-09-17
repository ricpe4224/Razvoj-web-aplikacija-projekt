import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../../shared/book";

const API_ENDPOINT = 'books/';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAvailableBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(API_ENDPOINT + 'available');
  }

  addBook(book: any): Observable<void> {
    return this.http.post<void>(API_ENDPOINT + 'add-book', book);
  }
}
