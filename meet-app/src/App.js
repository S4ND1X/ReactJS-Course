// Libraries imports
import React, { Fragment, useState } from "react";
import Form from "./components/Form";

// Components Imports
import MeetingList from "./components/meeting-list";

function App() {
  // The app has a meetingList state that contain all meetings
  const [meetingList, setMeetingList] = useState([]);

  //Each time a meeting is created the new meeting is added to the previous list o meetings
  const createMeeting = (meeting) => {
    setMeetingList([...meetingList, meeting]);
  };

  return (
    //Fragment is a component that do not create an extra node in react but when you need to group childs and doesn't need styles it's the way to go
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
            <MeetingList meetingList={meetingList} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
