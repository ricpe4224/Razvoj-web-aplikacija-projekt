package sit.bookregistry;

import sit.bookregistry.model.Book;
import sit.bookregistry.model.User;
import sit.bookregistry.repository.BookRepository;
import sit.bookregistry.repository.UserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Bean;
import org.springframework.context.event.EventListener;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class BookRegistryApplication {

    private final UserRepository userRepository;
    private final BookRepository bookRepository;

    public BookRegistryApplication(UserRepository userRepository, BookRepository bookRepository) {
        this.userRepository = userRepository;
        this.bookRepository = bookRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(BookRegistryApplication.class, args);
    }

    @EventListener(ApplicationReadyEvent.class)
    public void addBooks() {
        List<Book> bookSet = new ArrayList<>();
        bookSet.add(new Book("Harry Potter and the Sorcerer's Stone", 5, "J. K. Rowling"));
        bookSet.add(new Book("The Hobbit", 5, "J. R. R. Tolkien"));
        bookSet.add(new Book("1984", 5, " George Orwell"));
        bookSet.add(new Book("Pride and Prejudice", 5, "Jane Austen"));
        bookSet.add(new Book("To Kill a Mockingbird", 5, "Harper Lee"));
        bookSet.add(new Book("The Da Vinci Code", 5, "Dan Brown"));
        bookSet.add(new Book("The Catcher in the Rye", 5, "J. D. Salinger"));
        bookSet.add(new Book("The Great Gatsby", 5, "F. Scott Fitzgerald"));
        bookSet.add(new Book("Twilight", 5, "Stephenie Meyer"));
        bookSet.add(new Book("The Hunger Games", 5, "Suzanne Collins"));
        bookSet.add(new Book("Jane Eyre", 5, "Charlotte Brontë"));
        bookSet.add(new Book("Animal Farm", 5, " George Orwell"));
        bookSet.add(new Book("The Kite Runner", 5, "Khaled Hosseini"));
        bookSet.add(new Book("Brave New World", 5, "Aldous Huxley"));
        bookSet.add(new Book("The Lord of the Rings", 5, "J. R. R. Tolkien"));
        bookSet.add(new Book("Fahrenheit 451", 5, "Ray Bradbury"));
        bookSet.add(new Book("New Moon", 5, "Stephenie Meyer"));
        bookSet.add(new Book("Angels & Demons", 5, "Dan Brown"));
        bookSet.add(new Book("Wuthering Heights", 5, "Emily Brontë"));
        bookSet.add(new Book("The Odyssey", 5, "Homer"));
        bookSet.add(new Book("Life of Pi", 5, "Yann Martel"));
        bookSet.add(new Book("Catching Fire", 5, "Suzanne Collins"));
        bookSet.add(new Book("Slaughterhouse-Five", 5, "Kurt Vonnegut"));
        bookSet.add(new Book("The Time Traveler's Wife", 5, "Audrey Niffenegger"));

        bookRepository.saveAll(bookSet);

        userRepository.save( new User("admin", passwordEncoder().encode("admin"), true));
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("*");
        config.addAllowedHeader("*");
        config.addAllowedMethod("OPTIONS");
        config.addAllowedMethod("GET");
        config.addAllowedMethod("POST");
        config.addAllowedMethod("PUT");
        config.addAllowedMethod("DELETE");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

    
}
