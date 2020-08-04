import React from 'react'
import { Button, Card} from 'react-bootstrap'

function PostCard(posts) {
    const postList = posts.data;
    return (
        postList.length ? postList.map((post, key) => 
         <Card style={{ width: '18rem' }} key={'post-'+ key}>
            <Card.Img variant="top" src="./react-javascript.png" />
             <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                    {post.body}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        ) : null 
    );
}

export default PostCard;