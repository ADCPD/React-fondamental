import React , { Component} from 'react';
import {Container, Row, Form, Button} from 'react-bootstrap'
import axios from 'axios'

class PostForm extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            userId : '',
            title : '',
            body : ''
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    submitHandler = (event) => {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts',  this.state)
            .then(Response => {
                const data = Response.data;
                this.setState({
                    userId: data.userId,
                    title: data.title,
                    body: data.body
                })
                console.log(Response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    render() {
        const {userId, title, body} = this.state;
        return (
            <Container>
                <Row>
                    <Form onSubmit={this.submitHandler}>
                        METHOD : POST 
                        <Row>
                            <input 
                                type="text" 
                                name="userId"
                                value={userId}
                                onChange={this.changeHandler}
                                />    
                        </Row>
                        <Row>
                            <input 
                                type="text" 
                                name="title"
                                value={title}
                                onChange={this.changeHandler}
                            />    
                        </Row>  
                        <Row>
                            <input 
                                type="text" 
                                name="body"
                                value={body}
                                onChange={this.changeHandler}
                            />    
                        </Row>  
                        <Button type="submit">Envoyer</Button>
                    </Form>
                </Row>
                <hr />
            </Container>
        )
    }
}

export default PostForm;