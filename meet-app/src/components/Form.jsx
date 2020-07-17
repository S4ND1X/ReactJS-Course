import React, { Fragment, useState } from "react";

const Form = () => {
  const [meeting, setMeeting] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    message: "",
  });

  const { pet, owner, date, time, message } = meeting;

  const handleChange = (e) => {
    setMeeting({
      ...meeting,
      [e.target.name]: e.target.value,
    });
  };

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar
    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      message.trim() === ""
    ) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    // ID

    // create meeting
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

export default Form;
