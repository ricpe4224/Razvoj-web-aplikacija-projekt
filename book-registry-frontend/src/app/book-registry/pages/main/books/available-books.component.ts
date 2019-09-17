import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user/user.service";
import {BookService} from "../../../service/book/book.service";
import {Book} from "../../../shared/book";
import {UserBook} from "../../../shared/user-book";

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.css']
})
export class AvailableBooksComponent implements OnInit {

  availableBooks: Book[];
  showAlert: boolean = false;

  constructor(private userService: UserService, private bookService: BookService) {
  }

  ngOnInit() {
    this.getAvailableBooks();
  }

  getAvailableBooks() {
    this.showAlert = false;
    this.bookService.getAvailableBooks().subscribe(value => {
      this.availableBooks = value;
      if (this.availableBooks.length == 0) this.showAlert = true;
    })

  }

  borrowBook(bookId: number) {
    let userBook: UserBook =
      {
        username: localStorage.getItem("username"),
        bookId: bookId,
      };

    this.userService.borrowBook(userBook).subscribe(() => {
        this.getAvailableBooks();
      },
      () => console.log("fail")
    )
  }


}
