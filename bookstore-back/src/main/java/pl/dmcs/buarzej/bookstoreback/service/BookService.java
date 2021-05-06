package pl.dmcs.buarzej.bookstoreback.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;
import pl.dmcs.buarzej.bookstoreback.dao.BookRepository;
import pl.dmcs.buarzej.bookstoreback.domain.Book;

import java.util.Optional;

@Service
public class BookService {

    private BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository){
        this.bookRepository = bookRepository;
    }

    public Optional<Book> findById(Long id) {
        return bookRepository.findById(id);
    }

    public Iterable<Book> findAll() {
        return bookRepository.findAll();
    }

    public Book save(Book book){
        return bookRepository.save(book);
    }

    public void delete(Long id){
        bookRepository.deleteById(id);
    }

    @EventListener(ApplicationReadyEvent.class)
    public void fillDB() {
        save(new Book(1L, "Harry Potter", "J.K. Rowling", "Fantasy"));
        save(new Book(2L, "Władca Pierścieni", "Tolkien", "Fantasy"));
        save(new Book(3L, "Sherlock Holmes", "Arthur Conan Doyle", "Criminal"));

    }
}
