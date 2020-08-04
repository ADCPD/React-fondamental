import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props){
        super(props)

        this.state = {isLoggedIn :  false}
    
    }

    render() {
        /* EXEMPLE 1: 
        if (this.state.isLoggedIn){
            return(
            <div>
                <div>Welcome Amir</div>
            </div>  
            )
        } else {
            return(
                <div>
                    <div>Welcome Ghest</div>
                </div>  
            )
        }
        */

        /* EXEMPLE 2:
        let message = '';
        if (this.state.isLoggedIn) {
            message = <div>Welcome Amir</div>
        } else {
            message = <div>Welcome Ghest</div>
        }
        return message
        */

        /* EXEMPLE 3 */
        return  this.state.isLoggedIn ? <div>Welcome Amir</div> : <div>Welcome Ghest</div>;
    }
}

export default UserGreeting;