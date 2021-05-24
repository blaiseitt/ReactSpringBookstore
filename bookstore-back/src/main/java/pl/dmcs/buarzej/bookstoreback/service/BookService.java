package pl.dmcs.buarzej.bookstoreback.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import pl.dmcs.buarzej.bookstoreback.dao.BookRepository;
import pl.dmcs.buarzej.bookstoreback.domain.Book;

import javax.transaction.Transactional;
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

    @Transactional
    public Book save(Book book){
        return bookRepository.save(book);
    }

    @Transactional
    public void delete(Long id){
        bookRepository.deleteById(id);
    }

    public Iterable<Book> findByType(String type){
        return bookRepository.findByType(type);
    }

    public Page getSpecificPage(Integer pageNumber){
        return bookRepository.findAll(PageRequest.of(pageNumber, 3));
    }
}
