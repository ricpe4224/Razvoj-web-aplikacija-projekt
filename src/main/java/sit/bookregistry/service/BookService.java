package sit.bookregistry.service;

import sit.bookregistry.model.Book;
import sit.bookregistry.repository.BookRepository;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class BookService {

    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> getAvailableBooks() {
        return bookRepository.findAll()
                .stream()
                .filter(book -> book.getQuantity() > 0)
                .collect(toList());
    }

    public void addBook(Book book) {
        bookRepository.findByTitleAndAuthor(book.getTitle(), book.getAuthor())
                .ifPresentOrElse(savedBook -> {
                    savedBook.setQuantity(savedBook.getQuantity() + 1);
                    bookRepository.save(savedBook);
                }, () -> {
                    if(book.getQuantity()== null)book.setQuantity(1);
                    bookRepository.save(book);
                });
    }
}
