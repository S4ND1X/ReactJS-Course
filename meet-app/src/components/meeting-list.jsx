import React from "react";
import Meeting from "./meeting";

export default function MeetingList({ meetingList }) {
  return (
    <div>
      <h2>Meeting List</h2>
      {meetingList.map((meeting) => (
        <Meeting meeting={meeting} />
      ))}
    </div>
  );
}
