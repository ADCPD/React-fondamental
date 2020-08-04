import React  from 'react';

function ListUser(props){ 
    const users = props.users;
    return (
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>picture</th>
                        <th>name</th>
                        <th>gender</th>
                        <th>age</th> 
                        <th>email</th>
                        <th>phone</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((user, key) => 
                    <tr id={key}>
                        <td>{user.id}</td> 
                        <td><img src={user.picture} alt="" width="100px"/></td> 
                        <td>{user.name}</td> 
                        <td>{user.gender}</td> 
                        <td>{user.age}</td> 
                        <td>{user.email}</td> 
                        <td>{user.phone}</td> 
                    </tr>
                )}
                </tbody>
            </table>
    )   
}

export default ListUser;