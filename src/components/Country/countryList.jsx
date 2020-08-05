import React, { Component } from 'react'
import {
    Card,
} from 'react-bootstrap'

import "./style.css";
import "./flags.min.css";
import countriesList from "./country.json";
import blankImg from "./blank.gif";


class CountryList extends Component {
    state = {
        search: ""
      };
    
      renderCountry = country => {
        const { search } = this.state;
        var code = country.code.toLowerCase();
    
        return (
          <div className="col-md-3" style={{ marginTop: "20px" }}>
            <Card>
              <Card.Body>
                <p className="">
                  <img
                    src={blankImg}
                    className={"flag flag-" + code}
                    alt={country.name}
                  />
                </p>
                <Card.Title title={country.name}>
                  {country.name.substring(0, 15)}
                  {country.name.length > 15 && "..."}
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        );
      };
    
      onchange = e => {
        this.setState({ search: e.target.value });
      };
    
      render() {
        const { search } = this.state;
        const filteredCountries = countriesList.filter(country => {
          return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
    
        return (
          <div className="flyout">
            <main style={{ marginTop: "4rem" }}>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <input
                      label="Search Country"
                      icon="search"
                      onChange={this.onchange}
                      placeholder= "Find a country ..."
                    />
                  </div>
                  <div className="col" />
                </div>
                <div className="row">
                  {filteredCountries.map(country => {
                    return this.renderCountry(country);
                  })}
                </div>
              </div>
            </main>
            <div color="indigo">
              <p className="footer-copyright mb-0">
                &copy; {new Date().getFullYear()} Copyright
              </p>
            </div>
          </div>
        );
      }
    }

   export  default  CountryList;