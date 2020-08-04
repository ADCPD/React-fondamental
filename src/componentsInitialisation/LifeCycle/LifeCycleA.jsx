import React, { Component } from 'react';
//import { Button, Form } from 'react-bootstrap';

class LifeCycleA extends Component
{
    constructor(props){
        super(props)
        this.state = {
            name: 'amir'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        return null;
    }

    render(){
        console.log('LifecycleA render')
        return (
            <div>
                 LifecycleA   
            </div>
        )
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }
}

export default LifeCycleA;