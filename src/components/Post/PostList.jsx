import React, { Component } from 'react'
import axios from 'axios'
import {Container, Row} from 'react-bootstrap'
import PostCard from './PostCard'

 class PostList extends Component {

    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    };
    
    componentDidMount() {
        axios
            .get('http://jsonplaceholder.typicode.com/posts')
            .then(
                result => {
                    this.setState({
                        posts : result.data
                    })
                }
            )
            .catch(
                error => {
                    console.log(error.state)
                }
            )
    }

    render(){
        const postList = this.state.posts
        return (
            <Container>
                <Row>
                    <h3>
                        List of Posts : 
                    </h3>
                </Row>
                <Row>
                    <PostCard data={postList} />
                </Row>
            </Container>
        )
    }
}

export default PostList;