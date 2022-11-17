import React, { Component } from "react";
import axios from "axios";
export default class PersonList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [],
    };
  }

  //Component Lifecycle Callback
  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`).then((res) => {
      const persons = res.data.results;
      this.setState({ persons: persons });
    });
  }

  render() {
    return (
      <div>
        {this.state.persons.map((person) => (
          <>
            <div>
            <p style={{ backgroundColor: "#4682B4",
               position:'relative', border:'2px',
               boxShadow:  "2px 2px 2px 2px #4682B4", margin: '0px'}}>
                {person.name.title} {person.name.first} {person.name.last}
                {person.login.uuid}
              </p>

              <div style={{ backgroundColor: "#6082B6"}}>
                <div>
                  <img
                    src={person.picture.large}
                    alt="people"
                    style={{
                      float: "left",
                      margin: " 88px 15px",
                      borderRadius: 400,
                    }}
                  />
                  <button
                    onClick={this.componentDidMount}
                    style={{
                      textAlign: "center",
                      position: "relative",
                      bottom: "180px",
                      left: "-110px",
                      background:"blue",
                      color: "white"
                    }}
                  >
                    {" "}
                    Details{" "}
                  </button>
                </div>
               
                <div style={{ display: "inline-block" }}>
                  <p>User Name: {person.login.username}</p>
                  <p>Gender: {person.gender}</p>
                  <p>
                    Time Zone Description :{" "}
                    {person.location.timezone.description}
                  </p>
                  <p>
                    Address: {person.location.street.number}{" "}
                    {person.location.street.name}, {person.location.city},{" "}
                    {person.location.state}, {person.location.country},{" "}
                    {person.location.postcode}
                  </p>
                  <p>Email: {person.email}</p>
                  <p>
                    Birth Date and Age: {person.dob.date} - ({person.dob.age})
                  </p>
                  <p>Register Date: {person.registered.date}</p>
                  <p>Phone#: {person.phone}</p>
                  <p>Cell#: {person.cell}</p>
                  
                </div>
    
              </div>
              
              <hr></hr>
            </div>
          </>
        ))}
      </div>
    );
  }
}
