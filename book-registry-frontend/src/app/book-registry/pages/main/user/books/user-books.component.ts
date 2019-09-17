import {Component, OnInit} from '@angular/core';
import {Book} from "../../../../shared/book";
import {UserService} from "../../../../service/user/user.service";
import {UserBook} from "../../../../shared/user-book";

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnInit {

  availableBooks: Book[];
  showAlert: boolean = false;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUserBooks();
  }

  getUserBooks() {
    this.showAlert = false;
    this.userService.getUserBooks(localStorage.getItem("username")).subscribe(value => {
      this.availableBooks = value;
      if (this.availableBooks.length == 0) this.showAlert = true;
    })
  }

  returnBook(bookId: number) {
    let userBook: UserBook =
      {
        username: localStorage.getItem("username"),
        bookId: bookId,
      };

    this.userService.returnBook(userBook).subscribe(() => {
        this.getUserBooks();
      },
      () => console.log("fail")
    )
  }
}
