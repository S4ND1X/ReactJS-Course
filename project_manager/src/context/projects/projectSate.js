import React, { useReducer } from "react";

import projectContext from "./projectContext";

import projectReducer from "./projectReducer";

import { ADD_NEW_PROJECT } from "../types";

const ProjectState = (props) => {
  //Defininf the intial state
  const initialState = {
    create: false,
  };
  //Dispatch to execute the actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  //CRUD functions
  const showForm = () => {
    dispatch({
      type: ADD_NEW_PROJECT,
    });
  };

  //Returning the context provider with the intial state
  return (
    <projectContext.Provider value={{ create: state.create, showForm }}>
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
