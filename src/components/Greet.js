import React from 'react'; 

/* SYNTAXE 1
const Greet = props => {
  console.log(props);
return <h1>Hello {props.name}</h1>
}
*/

// SYNTAXE 2
const Greet = (props) => {
const {name, heroName} = props;

  return <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
      <p className="card-text">
        Connu en tant que : {heroName}
        <br />
        {props.children}
        </p> 

  </div>
</div> 
}

export default Greet;
