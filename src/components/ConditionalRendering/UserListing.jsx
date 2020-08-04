import React, { Component }  from 'react';
import ListUser from './ListUser';

class UserListing extends Component {
    constructor (props){
        super(props);
        this.state = [
            {
            "id": 0,
            "balance": "$3,921.50",
            "picture": "http://placehold.it/32x32",
            "age": 29,
            "eyeColor": "green",
            "name": "Ada Franks",
            "gender": "female",
            "email": "adafranks@teraprene.com",
            "phone": "+1 (941) 482-2465"
            },
            {
            "id": 1,
            "balance": "$1,158.50",
            "picture": "http://placehold.it/32x32",
            "age": 31,
            "eyeColor": "brown",
            "name": "Hyde Russo",
            "[gender": "male",
            "email": "hyderusso@teraprene.com",
            "phone": "+1 (935) 548-3205"
            },
            {
            "id": 2,
            "balance": "$3,138.27",
            "picture": "http://placehold.it/32x32",
            "age": 35,
            "eyeColor": "blue",
            "name": "Page Forbes",
            "gender": "male",
            "email": "pageforbes@teraprene.com",
            "phone": "+1 (951) 555-2260"
            },
        ]
    }

    render(){
          const userArray = this.state;
        return (
            <div>
                <ListUser users={userArray} />
            </div>
        ) 
    }
}

export default UserListing;
