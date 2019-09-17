import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public router: Router) {
  }

  canActivate(): boolean {
    let username = localStorage.getItem("username");
    if(username == null || username == ''){
      this.router.navigateByUrl("/user/login");
      return false;
    }
    return true;
  }

}
