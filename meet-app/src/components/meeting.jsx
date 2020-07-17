import React from "react";

export default function Meeting({ meeting }) {
  return (
    <div className='cita'>
        <p>Pet Name: <span>{meeting.pet}</span></p>
        <p>Pet Owner: <span>{meeting.owner}</span></p>
        <p>Date: <span>{meeting.date}</span></p>
        <p>Message: <span>{meeting.message}</span></p>
    </div>
  );
}
