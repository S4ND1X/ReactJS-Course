// Libraries imports
import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";

// Components Imports
import MeetingList from "./components/meeting-list";

function App() {
  let meetingsAtLoad = JSON.parse(localStorage.getItem("meetingList"));
  if (!meetingsAtLoad) {
    meetingsAtLoad = [];
  }
  // The app has a meetingList state that contain all meetings
  const [meetingList, setMeetingList] = useState(meetingsAtLoad);

  useEffect(() => {
    let meetingsAtLoad = JSON.parse(localStorage.getItem("meetingList"));
    if (meetingsAtLoad) {
      localStorage.setItem("meetingList", JSON.stringify(meetingList));
    } else {
      localStorage.setItem("meetingList", JSON.stringify([]));
    }
  }, [meetingList]);

  //Each time a meeting is created the new meeting is added to the previous list o meetings
  const createMeeting = (meeting) => {
    setMeetingList([...meetingList, meeting]);
  };

  //Function to remove a date
  const removeMeeting = (id) => {
    setMeetingList(meetingList.filter((meeting) => id !== meeting.id));
  };

  const title = meetingList.length === 0 ? "Add meeting" : "Your meetings";

  return (
    //oa
    <Fragment>
      <h1>Administrador</h1>
      <div className="container">
        {/* Estas clases vienen definidad por skeleton */}
        <div className="row">
          <div className="one-half column">
            {/* Form receives the createMeatting function to set the state of the list */}
            <Form createMeeting={createMeeting} />
          </div>
          {/* The meetingList receives the component in charge of rendering all the meetings*/}
          <div className="one-half column">
            <MeetingList
              title={title}
              meetingList={meetingList}
              removeMeeting={removeMeeting}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
