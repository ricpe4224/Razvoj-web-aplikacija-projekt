import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const username: string = localStorage.getItem("username");

    if (username != '' && username != null) {
      request = request.clone({headers: request.headers.set('User', username)});
    }

    return next.handle(request);
  }
}







