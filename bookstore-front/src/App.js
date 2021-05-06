import React, {Component} from 'react';
import Book from "./Book"
import './Book.css'

class App extends Component {

    state =
        {
           data: []
        }

    componentDidMount() {
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
                    <th className={"tablink"}>ID</th>
                    <th>TITLE</th>
                    <th>AUTHOR</th>
                    <th>TYPE</th>
                </tr>

                {this.state.data.map(book => <Book info={book}/>)}
            </div>
        );
    }
}

export default App;
