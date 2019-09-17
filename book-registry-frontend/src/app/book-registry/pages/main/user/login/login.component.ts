import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../service/user/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {Alert} from "selenium-webdriver";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  showAlert: boolean = false;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: this.formBuilder.control(''),
      password: this.formBuilder.control('')
    })
  };

  login() {
    this.userService.login(this.userForm.value).subscribe(value => {
        console.log("success");
        localStorage.setItem("username", this.userForm.get("username").value);
        if (value === true) {
          localStorage.setItem("admin", "admin");
          console.log("admin set");
        }
        this.router.navigateByUrl("/user/books");
      },
      () => {
        console.log("fail");
        this.showAlert = true;
      })
  }
}
