package sit.bookregistry.service;

import sit.bookregistry.model.Book;
import sit.bookregistry.model.User;
import sit.bookregistry.repository.BookRepository;
import sit.bookregistry.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.InvalidParameterException;
import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final BookRepository bookRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, BookRepository bookRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.bookRepository = bookRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void register(String email, String password, String repeatedPassword) {
        if (!password.equals(repeatedPassword))
            throw new IllegalArgumentException("passwords must match!");
        try {
            userRepository.save(new User(email, passwordEncoder.encode(password), false));
        }catch (Exception ex){
            throw new RuntimeException("User with that email already exists!");
        }
    }

  
    public void borrowBook(Long bookId, String email) {
        User user = getUserByUsername(email);
        Book book = bookRepository.findById(bookId).orElseThrow(() -> new RuntimeException("Book does not exist"));
        if (book.getQuantity() == 0) throw new RuntimeException("No books left");
        user.getBooks().add(book);
        userRepository.save(user);
        book.setQuantity(book.getQuantity() - 1);
        bookRepository.save(book);
    }

    public List<Book> getUserBooks(String email) {
        return getUserByUsername(email).getBooks();
    }

    private User getUserByUsername(String username) {
        return userRepository.findUserByUsername(username)
                .orElseThrow(() -> new RuntimeException("User does not exist"));
    }

    
    public void returnBook(Long bookId, String email) {
        User user = getUserByUsername(email);
        Book book = user.getBooks()
                .stream()
                .filter(userBook -> userBook.getId().equals(bookId))
                .findAny()
                .orElseThrow(() -> new RuntimeException("User does not own this book"));
        user.getBooks().remove(book);
        userRepository.save(user);
        book.setQuantity(book.getQuantity() + 1);
        bookRepository.save(book);
    }

    public boolean login(String email, String password) {
        User user = getUserByUsername(email);
        if (!passwordEncoder.matches(password, user.getPassword()))
            throw new InvalidParameterException("Invalid credentials");

        return user.isAdmin();
    }
}
