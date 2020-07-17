import React, { Fragment, useState } from "react";
import Form from "./components/Form";

import MeetingList from "./components/meeting-list";

function App() {
  const [meetingList, setMeetingList] = useState([]);

  const createMeeting = (meeting) => {
    setMeetingList([...meetingList, meeting]);
  };

  return (
    <Fragment>
      <h1>Administrador</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createMeeting={createMeeting} />
          </div>
          <div className="one-half column">
            <MeetingList meetingList={meetingList} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
