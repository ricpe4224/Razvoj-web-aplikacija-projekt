package sit.bookregistry.rest.controller;

import sit.bookregistry.config.aspect.customAnnotations.CanAccess;
import sit.bookregistry.model.Book;
import sit.bookregistry.rest.dto.BookDto;
import sit.bookregistry.rest.dto.UserDto;
import sit.bookregistry.service.UserService;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping(value = "user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/register")
    @PostMapping
    public void register(@RequestBody UserDto userDto) {
        userService.register(userDto.getUsername(), userDto.getPassword(), userDto.getRepeatedPassword());
    }

    @RequestMapping(value = "/login")
    @PostMapping
    public boolean login(@RequestBody UserDto userDto) {
       return userService.login(userDto.getUsername(), userDto.getPassword());
    }

    @CanAccess
    @RequestMapping(value = "/borrow-book")
    @PostMapping
    public void borrowBook(@RequestBody BookDto bookDto) {
        userService.borrowBook(bookDto.getBookId(), bookDto.getUsername());
    }

    @CanAccess
    @RequestMapping(value = "/return-book")
    @PostMapping
    public void returnBook(@RequestBody BookDto bookDto) {
        userService.returnBook(bookDto.getBookId(), bookDto.getUsername());
    }

    @CanAccess
    @RequestMapping(value = "/books")
    @GetMapping
    public List<Book> getUserBooks(@PathParam(value = "username") String username) {
        return userService.getUserBooks(username);
    }
}
