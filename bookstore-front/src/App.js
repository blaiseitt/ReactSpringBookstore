import React, {useRef, useState, useEffect} from 'react';
import BookList from "./Components/BookList"
import './Stylesheets/Book.css'
import Pagination from "./Components/Pagination";
import BooksAndPagination from "./Components/BooksAndPagination";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import {Button, Navbar, Nav, ListGroup, Tab, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import ExampleRout from "./Components/ExampleRout";

function App() {

    const url = "http://localhost:8080/api/books/all"
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([])
    const [filterType, setFilterType] = useState("")
    const [filterAuthor, setFilterAuthor] = useState("")
    const [filterTitle, setFilterTitle] = useState("")
    const [loading, setLoading] = useState(false)

    const [totalBooks, setTotalBooks] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [elementsPerPage, setElementsPerPage] = useState(5)
    const firstRun = useRef(false)

    useEffect(() => {
        setLoading(true)
        getData()
        setLoading(false)
        console.log(filteredData)
        console.log(data)
    }, [])

    useEffect(() => {
        if (firstRun.current) {
            setFilteredData(search(data))
            setTotalBooks(filteredData.length)
            console.log(filteredData)
            console.log(data)
            console.log(totalBooks)
        } else {
            firstRun.current = true
        }

    }, [filterType, filterAuthor, filterTitle, totalBooks])

    const getData = async () => {
        const response = await fetch(url)
        const books = await response.json()
        setData(books)
        setTotalBooks(data.length)
        if(filteredData.length===0){
            setFilteredData(data)
        }
    }

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
            <Router>
                <Nav variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link><Link to="/example">TO EXAMPLE</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><Link to="/books">Books with pagination</Link></Nav.Link>
                    </Nav.Item>
                </Nav>
                <Switch>
                    <Route path="/example" component={ExampleRout}/>
                    <Route path="/books" component={BooksAndPagination}/>
                </Switch>

                <BookList books={currentBooksOnPage} loading={loading}/>
                <Pagination booksPerPage={elementsPerPage} totalBooks={totalBooks} paginate={paginate}/>
                <div className="container">
                    <input placeholder="Filter title" type="text" value={filterTitle}
                           onChange={(e) => setFilterTitle(e.target.value)}/>
                    <input placeholder="Filter author" type="text" value={filterAuthor}
                           onChange={(e) => setFilterAuthor(e.target.value)}/>
                    <input placeholder="Filter type" type="text" value={filterType}
                           onChange={(e) => setFilterType(e.target.value)}/>

                </div>
            </Router>
        </div>
    );
}

export default App;
