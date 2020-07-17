import React from "react";
import Meeting from "./meeting";

export default function MeetingList({ meetingList, removeMeeting, title }) {
  return (
    <div>
      <h2>{title}</h2>
      {meetingList.map((meeting) => (
        <Meeting
          meeting={meeting}
          removeMeeting={removeMeeting}
          key={meeting.id}
        />
      ))}
    </div>
  );
}
