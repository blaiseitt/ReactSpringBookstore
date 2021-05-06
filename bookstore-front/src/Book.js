import React, {Component} from 'react';
import './Book.css'

class Book extends Component {

    state =
        {
            data: []
        }

    render() {
        return (
            <div>
                <tr>
                    <td className={"tablink"}>{this.props.info.id}</td>
                    <td>{this.props.info.title}</td>
                    <td>{this.props.info.author}</td>
                    <td>{this.props.info.type}</td>
                </tr>
                    {/*{this.props.info.id} {this.props.info.title} {this.props.info.author} {this.props.info.type}*/}
            </div>
        );
    }
}

export default Book;
