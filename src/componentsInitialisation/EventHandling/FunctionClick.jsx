import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

function FunctionClick() {
    function ClickHandler(){
        console.log("Button click");
    }
    return (
        <div>
            <Button onClick={ClickHandler}>Function : Click</Button>
        </div>
    )
}

export default FunctionClick;