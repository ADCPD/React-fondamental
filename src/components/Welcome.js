import React , {Component} from 'react';

class Welcome extends Component {
    render() {
        return <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">
              Connu en tant que : {this.props.heroName}
              <br />
              {this.props.children}
              </p> 
      
        </div>
      </div> 
    }
}

export default Welcome;
