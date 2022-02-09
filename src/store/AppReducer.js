import {
  ADD_NEW_EVENT,
  SHOW_ADD_NEW_EVENT,
  CLOSE_ADD_NEW_EVENT,
  SET_CURRENT_DATE,
  SET_CURRENT_LIST,
  FETCH_FROM_LOCAL,
} from "./types";

const AppReducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_DATE:
      return { ...state, currentDate: action.payload, addNewFlag: false };

    case SET_CURRENT_LIST:
      return { ...state, currentList: action.payload, addNewFlag: false };
    case ADD_NEW_EVENT:
      return {
        ...state,
        eventList: [...state.eventList, action.payload],
        addNewFlag: false,
      };

    case FETCH_FROM_LOCAL:
      console.log("action.payload", action.payload);
      return {
        ...state,
        eventList: action.payload,
        addNewFlag: false,
      };

    case SHOW_ADD_NEW_EVENT:
      return { ...state, addNewFlag: !state.addNewFlag };

    case CLOSE_ADD_NEW_EVENT:
      return { ...state, addNewFlag: false };

    default:
      return state;
  }
};

export default AppReducer;
