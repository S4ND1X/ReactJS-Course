import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
const { v4: uuidv4 } = require("uuid");

//Defining the state of the meeting, in this is all te attributes but empty
const Form = ({ createMeeting }) => {
  const [meeting, setMeeting] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    message: "",
  });

  //Deconstructing the object to assign variables easier
  const { pet, owner, date, time, message } = meeting;

  //In charge of setting the new state of the meeting by copying the current values and setting the nmae of the attribute to the input value
  const handleChange = (e) => {
    setMeeting({
      ...meeting,
      [e.target.name]: e.target.value,
    });
  };

  // State that knows if the form was filled correctly
  const [error, setError] = useState(false);

  //Handling the submit button by validating all inputs
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      message.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);

    // ID
    meeting.id = uuidv4();
    // Add the current meeting object to the array of meeting on the main App
    createMeeting(meeting);

    //Reset form and state
    setMeeting({ pet: "", owner: "", date: "", time: "", message: "" });
  };

  return (
    <Fragment>
      <h2>Meeting</h2>

      {error ? <p className="alerta-error">Please fill al data</p> : null}

      <form onSubmit={handleSubmit}>
        <label>Pet's name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet's Name"
          onChange={handleChange}
          value={pet}
        />
        <label>Owner</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner name"
          onChange={handleChange}
          value={owner}
        />
        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />
        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleChange}
          value={time}
        />
        <label>Message</label>
        <textarea
          name="message"
          className="u-full-width"
          onChange={handleChange}
          value={message}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Send message
        </button>
      </form>
    </Fragment>
  );
};

Form.propTypes = {
  createMeeting: PropTypes.func.isRequired,
};


export default Form;
