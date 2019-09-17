package sit.bookregistry.repository;

import sit.bookregistry.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BookRepository extends JpaRepository <Book, Long> {
    Optional<Book> findByTitleAndAuthor(String title, String author);
    Optional<Book> findById(Long id);
}
