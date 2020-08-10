import { NEW_PROJECT_BTN, GET_PROJECTS, ADD_PROJECT } from "../types";

//State depending on action
export default (state, action) => {
  switch (action.type) {
    case NEW_PROJECT_BTN:
      return {
        ...state,
        create: true,
      };
      break;
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        create: false,
      };
      break;
    default:
      return state;
  }
};
