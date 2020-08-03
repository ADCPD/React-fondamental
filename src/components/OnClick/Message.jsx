import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class Message extends Component {

    constructor() {
        super();
        this.state = {
            Message : "Welcome visitor"
        }
    }

    changeMessage() {
        this.setState({ 
                Message : "Think you for your subscribing" 
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.Message}</h1>
                <Button onClick={ () => this.changeMessage() }>Subscribe</Button>
            </div>
        );
    }
}

export default Message;