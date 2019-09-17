package sit.bookregistry.rest.controller;

import sit.bookregistry.config.aspect.customAnnotations.CanAccess;
import sit.bookregistry.config.aspect.customAnnotations.CanAccessAdmin;
import sit.bookregistry.model.Book;
import sit.bookregistry.service.BookService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "books")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @CanAccess
    @RequestMapping(value = "/available")
    @GetMapping
    public List<Book> getAllAvailableBooks() {
        return bookService.getAvailableBooks();
    }

    @CanAccessAdmin
    @RequestMapping(value = "/add-book")
    @PostMapping
    public void addBook(@RequestBody Book book) {
        bookService.addBook(book);
    }
}
