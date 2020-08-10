import React, { useReducer } from "react";

import projectContext from "./projectContext";

import projectReducer from "./projectReducer";

import { NEW_PROJECT_BTN, GET_PROJECTS, ADD_PROJECT } from "../types";

import { v4 as uuidv4 } from "uuid";

const ProjectState = (props) => {
  const projects = [
    {
      id: 1,
      name: "Proyecto 1",
    },
    {
      id: 2,
      name: "Proyecto 2",
    },
    {
      id: 3,
      name: "Proyecto 3 ",
    },
  ];

  //Defininf the intial state
  const initialState = {
    projects: [],
    create: false,
  };
  //Dispatch to execute the actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  //CRUD functions
  const showForm = () => {
    dispatch({
      type: NEW_PROJECT_BTN,
    });
  };

  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  const addProject = (project) => {
    project.id = uuidv4();
    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  //Returning the context provider with the intial state
  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        create: state.create,
        showForm,
        getProjects,
        addProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
