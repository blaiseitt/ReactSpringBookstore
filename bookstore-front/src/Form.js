import React, {Component} from "react";
import './Form.css';
import Axios from 'axios';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.min.css'

class Form extends Component {


    constructor(props) {
        super(props);
        this.state = {title: '', author: '', type: ''}
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(event) {
        this.setState({title: event.target.value});
    }

    handleChangeAuthor(event) {
        this.setState({author: event.target.value});
    }

    handleChangeType(event) {
        this.setState({type: event.target.value});
    }


    handleSubmit(event) {
        event.preventDefault();
        alert('Title, author, type ' + this.state.title + this.state.author + this.state.type)
        const apiUrl = "http://localhost:8080/api/books"
        let authorWords = this.state.author.split(" ")
        if (this.state.title === '' || this.state.author === '' || this.state.type === '') {
            alert('Empty field detected, please fill it.')
        } else if (!(/[A-Z]/.test(authorWords[0][0]))) {
            alert('First letter of author must be capital.')
        } else {
            Axios.post(apiUrl,{
                title: this.state.title,
                author: this.state.author,
                type: this.state.type
            }).then(res=>{
                console.log(res.state)
            })
            //console.log(JSON.stringify(this.state))
            this.setState({title: '', author: '', type: ''});
        }
    }

    render() {
        return (
            <>
                <form className={"positionForm"} onSubmit={this.handleSubmit}>
                    <label>
                        <table>
                            <tr>
                                <td>Title:</td>
                                <td><input placeholder="Enter title" type="text" value={this.state.title} onChange={this.handleChangeTitle}/></td>
                            </tr>
                            <tr>
                                <td>Author:</td>
                                <td><input placeholder="Enter author" type="text" value={this.state.author} onChange={this.handleChangeAuthor}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Type:</td>
                                <td>
                                    <select value={this.state.type} onChange={this.handleChangeType}>
                                        <option value="">.....</option>
                                        <option value="Fantasy">Fantasy</option>
                                        <option value="Science-Fiction">Science-Fiction</option>
                                        <option value="Criminal">Criminal</option>
                                        <option value="Mithology">Mithology</option>
                                        <option value="Novel">Novel</option>
                                    </select>
                                </td>
                            </tr>
                        </table>
                    </label>
                    <Button type="submit">SUBMIT</Button>
                </form>
            </>
        );
    }
}

export default Form;
