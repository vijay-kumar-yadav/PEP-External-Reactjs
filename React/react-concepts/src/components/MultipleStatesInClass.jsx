import React from "react";

export default class MultipleStatesInClass extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "as",
      institute: "as",
      events: ["mono-act"],
      data: [],
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      ...this.state,
      data: [
        ...this.state.data,
        {
          name: this.state.name,
          institute: this.state.institute,
          events: this.state.events,
        },
      ],
    });
    console.log(this.data);
  }
  eventOptions = [
    { key: "dancing", value: "dancing" },
    { key: "mono-act", value: "mono-act" },
    { key: "drama", value: "drama" },
    { key: "singing", value: "singing" },
  ];
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Enter Your Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) =>
              this.setState({ ...this.state, name: event.target.value })
            }
          />
          <label>Enter Your Institution</label>
          <input
            type="text"
            value={this.state.institute}
            onChange={(event) =>
              this.setState({ ...this.state, institute: event.target.value })
            }
          ></input>
          <label>Select Events</label>
          <select
            multiple
            value={this.state.events}
            onChange={(event) => {
              const values = [...event.target.selectedOptions].map(
                (option) => option.value
              );
              this.setState({ ...this.state, events: values });
            }}
          >
            {this.eventOptions.map((data) => (
              <option key={data.key}>{data.value}</option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Institution</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((data, index) => (
              <tr key={"row - " + index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.institute}</td>
                <td>{data.events.join()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
