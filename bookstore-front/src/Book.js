import React, {Component} from 'react';
import './Book.css'


class Book extends Component {

    render() {
        return (
            <div>
                <tr>
                    <td className={"tabID"}>{this.props.info.id}</td>
                    <td className={"tabTitle"}>{this.props.info.title}</td>
                    <td className={"tabAuthor"}>{this.props.info.author}</td>
                    <td className={"tabType"}>{this.props.info.type}</td>
                </tr>
            </div>
        );
    }
}

export default Book;
