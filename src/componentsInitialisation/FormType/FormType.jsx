import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class FormType extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : '',
            password : '',
            gender: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username : event.target.value
        })
    } 

    handlePasswordChange = (event) => {
        this.setState({
            password : event.target.value
        })
    }

    handleGenderChange = (event) => {
        this.setState({
            gender : event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.password} ${this.state.gender}`);
    }
  
    render() { 
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <div>
                        <h3>Login from </h3>
                    </div>
                    <div>
                        <label htmlFor="username">username</label>
                        <input 
                            type="text"
                            name="username" 
                            value={this.state.username} 
                            onChange={this.handleUsernameChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <input 
                            type="password" 
                            name="password" 
                            value={this.state.password} 
                            onChange={this.handlePasswordChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="gender">Type</label>
                        <select 
                            value={this.state.gender} 
                            onChange={this.handleGenderChange}
                            >
                            <option value="none">Choisir un type ... </option>
                            <option value="particulier">Particulier</option>
                            <option value="recruteur">Recruteur</option>
                        </select>
                    </div>
                    <div>
                        <Button type="submit" >Enregistrer</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default FormType;