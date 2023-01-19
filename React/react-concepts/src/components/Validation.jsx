import React from "react";
import { useState } from "react";

//functional components Implementation
const Validation = () => {
  const [name, setName] = useState("vijay");
  const [contact, setContact] = useState("7988536454");
  const [email, setEmail] = useState("vky405021@gmail.com");
  const [institute, setInstitute] = useState("Aps");
  const [events, setEvents] = useState(["dancing"]);
  const [data, setData] = useState([]);
  const [isNameError, setIsNameError] = useState(true);
  const [isEmailError, setIsEmailError] = useState(true);
  const [isContactError, setIsContactError] = useState(true);

  const eventOptions = [
    { key: "dancing", value: "dancing" },
    { key: "mono-act", value: "mono-act" },
    { key: "drama", value: "drama" },
    { key: "singing", value: "singing" },
  ];
  const handleSubmit = (event) => {
    event.preventDefault();
    /*Name Validation*/
    let nameError = false;
    let namePattern = /^[a-zA-Z]+$/gm;
    let nameRegex = new RegExp(namePattern);
    if (nameRegex.test(name)) {
      console.log("1");
      nameError = false;
    } else {
      nameError = true;
    }
    setIsNameError(nameError);
    /*Email Validation*/
    let emailError = false;
    let emailPattern = /^[a-zA-Z0-9+_.]+@[a-z-A-z]+\.[a-zA-Z]{2,3}$/gm;
    let emailRegex = new RegExp(emailPattern);
    if (emailRegex.test(email)) {
      console.log("2");
      emailError = false;
    } else {
      emailError = true;
    }
    setIsEmailError(emailError);
    /*Contact verification*/
    let contactError = true;
    let contactPattern = /^[0-9]{1,10}$/gm;
    let contactRegex = new RegExp(contactPattern);
    if (contactRegex.test(contact)) {
      console.log("3");
      contactError = false;
    } else {
      contactError = true;
    }
    setIsContactError(contactError);
    console.log(name + "-->", isNameError);
    console.log(email + "-->", isEmailError);
    console.log(contact + "-->", isContactError);
    if (!isContactError && !isEmailError && !isNameError)
      setData([
        ...data,
        {
          name: name,
          institute: institute,
          events: events,
          contact: contact,
          email: email,
        },
      ]);
  };
  return (
    <div className="form-container">
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>Enter Your Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label>Enter Your Email</label>
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Enter Your Contact</label>
        <input
          type="text"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
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
        <div className="error">{}</div>
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Institution</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={"row - " + index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.institute}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
              <td>{data.events.join()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Validation;
