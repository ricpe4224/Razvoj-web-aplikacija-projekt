package sit.bookregistry.rest.dto;

public class BookDto {

    private String username;
    private Long bookId;

    public BookDto(String username, Long bookId) {
        this.username = username;
        this.bookId = bookId;
    }

    public BookDto() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Long getBookId() {
        return bookId;
    }

    public void setBookId(Long bookId) {
        this.bookId = bookId;
    }
}
