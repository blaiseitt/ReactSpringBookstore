import React, {Component} from 'react';
import Book from "./Book"
import './Book.css'
import FindComp from "./FindComp"
import Form from "./Form"
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.min.css'

class App extends Component {

    state =
        {
            data: [],
            apiSpecified: '/all'
        }

    componentDidMount() {
        this.getData()

        setInterval(this.getData, 7500);
    }

    componentDidUpdate(prevProps) {
        if (this.props.apiSpecified !== prevProps.apiSpecified) {
            this.getData()
        }
    }

    getData = () => {
        const url = 'http://localhost:8080/api/books'
        fetch(url + this.state.apiSpecified)
            .then(response => response.json())
            .then(data => {
                if (data.status !== 400) {
                    console.log(data)
                    this.setState({data})
                } else {
                    const notFoundData = [{
                        author: "NOT FOUND",
                        id: 666,
                        title: "NOT FOUND",
                        type: "NOT FOUND"
                    }]
                    console.log(notFoundData)
                }
            })
    }

    handleApiChange = apiSpecified => {
        this.setState({apiSpecified})
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
                <FindComp apiSpecified={this.state.apiSpecified} onApiChange={this.handleApiChange}/>
            </div>
        );
    }
}

export default App;
