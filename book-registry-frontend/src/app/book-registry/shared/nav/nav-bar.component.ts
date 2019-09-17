import {Component, DoCheck} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements DoCheck {

  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor() { }

  ngDoCheck() {
    let username = localStorage.getItem("username");
    this.isLoggedIn = username != null && username != '';

    let admin = localStorage.getItem("admin");
    this.isAdmin = admin!= null && admin!= '';
  }

  logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("admin");
    location.reload();
  }
}
