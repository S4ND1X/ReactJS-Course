import React from "react";
import PropTypes from "prop-types";

//The componentn receives the meeting as prop and each atrribute is display
export default function Meeting({ meeting, removeMeeting }) {
  return (
    <div className="cita">
      <p>
        Pet Name: <span>{meeting.pet}</span>
      </p>
      <p>
        Pet Owner: <span>{meeting.owner}</span>
      </p>
      <p>
        Date: <span>{meeting.date}</span>
      </p>
      <p>
        Message: <span>{meeting.message}</span>
      </p>

      <button
        className="button eliminar u-full-width"
        onClick={() => removeMeeting(meeting.id)}
      >
        Eliminar &times;
      </button>
    </div>
  );
}

Meeting.propTypes = {
  meeting: PropTypes.object.isRequired,
  removeMeeting: PropTypes.func.isRequired,
};
