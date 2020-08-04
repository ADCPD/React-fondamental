import React , {Component} from 'react';

class Welcome extends Component {
    render() {
        const {name, heroName} = this.props;
        return <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
            <p className="card-text">
              Connu en tant que : {heroName}
              <br />
              {this.props.children}
              </p> 
      
        </div>
      </div> 
    }
}

export default Welcome;
