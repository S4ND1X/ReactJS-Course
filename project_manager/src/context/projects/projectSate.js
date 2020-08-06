import React, { useReducer } from "react";

import projectContext from "./projectContext";

import projectReducer from "./projectReducer";

const ProjectState = (props) => {
  //Defininf the intial state
  const initialState = {
    create: false,
  };
  //Dispatch to execute the actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  //CRUD functions

  //Returning the context provider with the intial state
  return (
    <projectContext.Provider value={{ create: state.create }}>
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
