import React, {Component} from 'react';

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
                HELLO
            </div>
        );
    }
}

export default App;
