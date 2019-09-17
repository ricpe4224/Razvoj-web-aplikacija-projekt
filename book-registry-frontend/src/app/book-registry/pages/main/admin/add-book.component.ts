import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {BookService} from "../../../service/book/book.service";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private bookService: BookService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem("admin") == '' || localStorage.getItem("admin") == null){
      this.router.navigateByUrl("/user/login");
    }

    this.bookForm = this.formBuilder.group({
      title: this.formBuilder.control(''),
      author: this.formBuilder.control(''),
      quantity: this.formBuilder.control('')
    })
  }

  addBook() {
    this.bookService.addBook(this.bookForm.value).subscribe(() => {
        console.log("success");
      },
      (err: HttpErrorResponse ) => {
      }
    )
  }

}
