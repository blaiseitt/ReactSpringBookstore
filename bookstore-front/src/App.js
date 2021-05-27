import React, {useRef, useState, useEffect} from 'react';

import BooksAndPagination from "./Components/LibaryComponents/BooksAndPagination";
import GameStart from "./Components/GameComponents/GameStart";
import CarrouselComp from "./Components/OtherComponents/CarrouselComp";
import Form from "./Components/LibaryComponents/Form";

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {Button, Navbar, Nav, ListGroup, Tab, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './Stylesheets/Book.css'


function App() {

    const url = "http://localhost:8080/api/books/all"
    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getData()
        setLoading(false)
        console.log(data)
    }, [])


    const getData = async () => {
        const response = await fetch(url)
        const books = await response.json()
        setData(books)
    }

    return (
        <div>
            <Router>
                <Nav variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link><Link to="/books">Books with pagination</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><Link to="/books/form">Form</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><Link to="/game">Game</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><Link to="/carrousel">Carrousel</Link></Nav.Link>
                    </Nav.Item>
                </Nav>
                <Switch>
                    <Route path="/books" exact><BooksAndPagination books={data} loading={loading}/></Route>
                    <Route path="/books/form" exact><Form/></Route> {/*matko bosko zmienic to na hooki*/}
                    <Route path="/game" component={GameStart}/>
                    <Route path="/carrousel" exact><CarrouselComp/></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
