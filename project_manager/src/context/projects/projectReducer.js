import { ADD_NEW_PROJECT } from "../types";

//State depending on action
export default (state, action) => {
  switch (action.type) {
    case ADD_NEW_PROJECT:
      return {
        ...state,
        create: true,
      };
      break;
    default:
      return state;
  }
};
