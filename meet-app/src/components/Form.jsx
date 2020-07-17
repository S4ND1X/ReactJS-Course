import React, { Fragment } from "react";

const Form = () => {
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
        />
        <label>Owner</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner name"
        />
        <label>Date</label>
        <input type="date" name="date" className="u-full-width" />
        <label>Time</label>
        <input type="time" name="time" className="u-full-width" />
        <label>Message</label>
        <textarea name="message" className="u-full-width"></textarea>

        <button type="submit" className="u-full-width button-primary">
          Send message
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
