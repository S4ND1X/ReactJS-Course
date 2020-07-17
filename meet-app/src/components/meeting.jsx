import React from "react";

//The componentn receives the meeting as prop and each atrribute is display
export default function Meeting({ meeting }) {
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
    </div>
  );
}
