import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class ClassClick extends Component {
    ClickHandler() {
        console.log("Button click");
    }
    
    render() {
            return (
                <div>
                    <Button className="btn-success" onClick={this.ClickHandler}>Class : Click</Button>
                </div>
            )
        }
}

export default ClassClick;