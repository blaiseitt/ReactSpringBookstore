package pl.dmcs.buarzej.bookstoreback.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.dmcs.buarzej.bookstoreback.domain.Book;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    Iterable<Book> findByType(String type);
}
