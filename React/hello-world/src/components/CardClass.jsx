import React from "react";
import "./Card.css";

class CardClass extends React.Component {
  constructor() {
    super();
    this.state = {
      age: 0,
    };
  }
  render() {
    return (
      <div className="card-container">
        <label>Enter Your Age :- </label>
        <input
          onChange={(event) =>
            this.setState({
              age: event.target.value < 0 ? 0 : event.target.value,
            })
          }
          value={this.state.age}
          type="number"
        />
        <h1>Your Age is {this.state.age}</h1>
        {this.state.age === 0 && <h3>You are not yet born</h3>}
        {this.state.age > 0 && this.state.age <= 12 && (
          <h3>You are child enjoy</h3>
        )}
        {this.state.age > 12 && this.state.age < 19 && (
          <h3>You are teenager learn from mistakes</h3>
        )}
        {this.state.age > 19 && this.state.age < 110 && (
          <h3>You are an Adult</h3>
        )}
        {this.state.age > 110 && <h3>Invalid Age</h3>}
      </div>
    );
  }
}
export default CardClass;
