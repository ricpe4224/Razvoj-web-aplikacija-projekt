import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../../service/user/user.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userForm: FormGroup;
  alertMessage: string = '';

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: this.formBuilder.control(''),
      password: this.formBuilder.control(''),
      repeatedPassword: this.formBuilder.control('')
    })
  }

  register() {
    this.userService.register(this.userForm.value).subscribe(() => {
        console.log("success");
        this.router.navigateByUrl("/user/login");
      },
      (err: HttpErrorResponse ) => {
        this.alertMessage = err.error.message;
      }
    )
  }

}
