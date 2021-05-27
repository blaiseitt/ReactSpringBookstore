import React, {useState, useEffect} from 'react';
import '../../Stylesheets/Book.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import BookList from "./BookList";
import Pagination from "./Pagination";


function BooksAndPagination({books , loading}){

    const [filteredData, setFilteredData] = useState([])
    const [filterType, setFilterType] = useState("")
    const [filterAuthor, setFilterAuthor] = useState("")
    const [filterTitle, setFilterTitle] = useState("")
    const [totalBooks, setTotalBooks] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [elementsPerPage, setElementsPerPage] = useState(5)

    useEffect(()=>{
        setFilteredData(search(books))
        setTotalBooks(filteredData.length)
        console.log(filteredData)
        console.log(books)
    },[filterType, filterAuthor, filterTitle])

    function search(rows) {
        const filteredTitle = rows.filter(row => row.title.toLowerCase().indexOf(filterTitle) > -1)
        const filteredAuthor = filteredTitle.filter(row => row.author.toLowerCase().indexOf(filterAuthor) > -1)
        return filteredAuthor.filter(row => row.type.toLowerCase().indexOf(filterType) > -1)
    }

    const indexOfLastBook = currentPage * elementsPerPage;
    const indexOfFirstBook = indexOfLastBook - elementsPerPage;
    const currentBooksOnPage = filteredData.slice(indexOfFirstBook, indexOfLastBook);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <h4>Books and pagination</h4>
            <BookList books={books} loading={loading}/>
            {/*<Pagination booksPerPage={booksPerPage} totalBooks={totalBooks} paginate={paginate}/>*/}
            <div className="container">
                <input placeholder="Filter title" type="text" value={filterTitle}
                       onChange={(e) => setFilterTitle(e.target.value)}/>
                <input placeholder="Filter author" type="text" value={filterAuthor}
                       onChange={(e) => setFilterAuthor(e.target.value)}/>
                <input placeholder="Filter type" type="text" value={filterType}
                       onChange={(e) => setFilterType(e.target.value)}/>
            </div>

        </div>
    );
}

export default BooksAndPagination;
