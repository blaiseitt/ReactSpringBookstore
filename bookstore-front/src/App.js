import React, {Component} from 'react';
import Book from "./Book"
import './Book.css'
import Form from "./Form"
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.min.css'

class App extends Component {

    state =
        {
           data: []
        }

    componentDidMount() {
        this.getData()

        setInterval(this.getData, 5000);
    }

    getData = () =>{
        fetch('http://localhost:8080/api/books/all')
            .then(response => response.json())
            .then(data =>{
                console.log(data)
                this.setState({data})
            })
    }

    render() {
        return (
            <div>
                <tr>
                    <th className={"tabID"}>ID</th>
                    <th className={"tabTitle"}>TITLE</th>
                    <th className={"tabAuthor"}>AUTHOR</th>
                    <th className={"tabType"}>TYPE</th>
                </tr>

                {this.state.data.map(book => <Book info={book}/>)}

                <Form/>

            </div>
        );
    }
}

export default App;
