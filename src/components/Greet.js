import React from 'react'; 

/* SYNTAXE 1
const Greet = props => {
  console.log(props);
return <h1>Hello {props.name}</h1>
}
*/

// SYNTAXE 2
const Greet = (props) => {
  return <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
      <p className="card-text">
        Connu en tant que : {props.heroName}
        <br />
        {props.children}
        </p> 

  </div>
</div> 
}

export default Greet;
