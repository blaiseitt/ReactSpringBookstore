package pl.dmcs.buarzej.bookstoreback.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.dmcs.buarzej.bookstoreback.domain.Book;
import pl.dmcs.buarzej.bookstoreback.service.BookService;

import java.util.Optional;

@RestController
@RequestMapping("/api/books")
@CrossOrigin
public class BookApi {

    private BookService bookService;

    @Autowired
    public BookApi(BookService bookService){
        this.bookService = bookService;
    }

    @GetMapping("/all")
    public Iterable<Book> getAllBooks() {
        return bookService.findAll();
    }

    @GetMapping
    public Optional<Book> getById(@RequestParam Long index){
        return bookService.findById(index);
    }

    @PostMapping
    public Book addBook(@RequestBody Book book) {
        return bookService.save(book);
    }

    @PutMapping
    public Book modifyBook(@RequestBody Book book) {
        return bookService.save(book);
    }

    @DeleteMapping
    public void deleteBook(@RequestParam Long index) {
        bookService.delete(index);
    }



}
