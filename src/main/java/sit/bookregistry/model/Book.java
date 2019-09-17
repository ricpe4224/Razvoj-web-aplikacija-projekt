package sit.bookregistry.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

import static javax.persistence.GenerationType.AUTO;

@Entity
public class Book {

    @Id
    @Column
    @GeneratedValue(strategy = AUTO)
    private Long id;

    @Column
    private String title;

    @Column
    private Integer quantity;

    @Column
    private String author;

    @ManyToMany(mappedBy = "books")
    private List<User> users;

    public Book(String title, Integer quantity, String author) {
        this.title = title;
        this.author = author;
        this.quantity = Objects.requireNonNullElse(quantity, 1);
    }

    public Book() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    @JsonIgnore
    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}
