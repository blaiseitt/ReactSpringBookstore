import React, {Component} from 'react';
import {Button} from "react-bootstrap";


class FindComp extends Component {

    state =
        {
            tempApi: '/all'
        }

    handleInputChange = event => {
        if(event.target.value === "")
        {
            this.props.onApiChange('/all')
        }
        else{
            this.props.onApiChange('/type?type=' + event.target.value)
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input placeholder="Enter type" type="text" onChange={this.handleInputChange}/>
                </form>
            </div>
        );
    }
}

export default FindComp;
