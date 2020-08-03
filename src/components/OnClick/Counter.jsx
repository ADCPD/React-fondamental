import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    Increment() {
        //this.state.count = this.state.count +1; 
        this.setState({
            count : this.state.count +1
        },() => {
            console.log('Callback value', this.state.count);
        });
    }

    Desincrement() {
        //this.state.count = this.state.count -1; 
        this.setState({
            count : this.state.count -1
        },
        () => {
            console.log('Callback value', this.state.count);
        }
        );
    }

  render() {
      return (
      <div>
          <div>Count : {this.state.count}</div>
          <Button onClick={() => this.Increment()}>++</Button>
          <Button onClick={() => this.Desincrement()}>--</Button>
      </div>
      );
  }
}

export default Counter;
