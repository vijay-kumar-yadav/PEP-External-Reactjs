import React from "react";
import { useState } from "react";

//functional components Implementation
const MultipleStates = () => {
  const [name, setName] = useState("");
  const [institute, setInstitute] = useState("");
  const [events, setEvents] = useState([]);
  const [data, setData] = useState([]);
  const eventOptions = [
    { key: "dancing", value: "dancing" },
    { key: "mono-act", value: "mono-act" },
    { key: "drama", value: "drama" },
    { key: "singing", value: "singing" },
  ];
  const handleSubmit = (event) => {
    event.preventDefault();
    setData([
      ...data,
      {
        name: name,
        institute: institute,
        events: events,
      },
    ]);
  };
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>Enter Your Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label>Enter Your Institution</label>
        <input
          type="text"
          value={institute}
          onChange={(event) => setInstitute(event.target.value)}
        ></input>
        <select
          multiple
          value={events}
          onChange={(ev) => {
            const values = [...ev.target.selectedOptions].map(
              (option) => option.value
            );
            console.log(values);
            setEvents(values);
          }}
        >
          {eventOptions.map((data) => (
            <option key={data.key}>{data.value}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Institution</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
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
};

export default MultipleStates;
