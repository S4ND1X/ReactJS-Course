import React, { Fragment, useState } from "react";

const Form = () => {
  const [meeting, setMeeting] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setMeeting({
      ...meeting,
      [e.target.name]: e.target.value,
    });
  };

  const { pet, owner, date, time, message } = meeting;

  return (
    <Fragment>
      <h2>Meeting</h2>

      <form>
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

export default Form;
