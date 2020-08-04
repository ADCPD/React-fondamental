import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class EventBind extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            message:'Hello'
        }
    }

    clickHandler() {
       
        
        this.setState(
            {
                message : "GoodBy !!"
            } 
        )
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                    {/* <Button onClick={ this.clickHandler.bind(this) }>Click</Button> */} 
                <Button onClick={ () => this.clickHandler() }>Click</Button>
            </div>
        )
    }
}

export default EventBind;