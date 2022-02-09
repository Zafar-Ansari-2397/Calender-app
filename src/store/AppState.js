import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./AppReducer";
import {
  ADD_NEW_EVENT,
  SHOW_ADD_NEW_EVENT,
  CLOSE_ADD_NEW_EVENT,
  SET_CURRENT_DATE,
  SET_CURRENT_LIST,
  FETCH_FROM_LOCAL,
} from "./types";

const AppState = (props) => {
  const initialState = {
    currentDate: new Date(),
    currentList: [],
    eventList: [],
    addNewFlag: false,
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setAndShowCurrent = (date) => {
    let currentList = [];
    dispatch({ type: SET_CURRENT_DATE, payload: date });

    currentList = state.eventList.filter(
      (item) =>
        new Date(item.date).getFullYear() === date.getFullYear() &&
        new Date(item.date).getDate() === date.getDate() &&
        new Date(item.date).getMonth() === date.getMonth()
    );

    console.log("currentList", currentList);
    dispatch({ type: SET_CURRENT_LIST, payload: currentList });
  };

  const addNewEvent = (data) => {
    console.log("AddnewEvnet", new Date(data.date));
    const newData = {
      name: data.name,
      date: new Date(data.date),
    };
    localStorage.setItem(
      "eventList",
      JSON.stringify([...state.eventList, newData])
    );
    dispatch({ type: ADD_NEW_EVENT, payload: newData });
  };

  const fetchFromLocalStorage = () => {
    const data = localStorage.getItem("eventList");
    console.log("{ data }", JSON.parse(data));
    const fetchedData = JSON.parse(data);
    if (fetchedData !== null && fetchedData.length > 0) {
      dispatch({ type: FETCH_FROM_LOCAL, payload: fetchedData });
    }
  };

  const showAddNewEvent = () => dispatch({ type: SHOW_ADD_NEW_EVENT });

  const closeAddNewEvent = () => dispatch({ type: CLOSE_ADD_NEW_EVENT });

  return (
    <AppContext.Provider
      value={{
        currentDate: state.currentDate,
        currentList: state.currentList,
        addNewFlag: state.addNewFlag,
        showAddNewEvent,
        closeAddNewEvent,
        addNewEvent,
        setAndShowCurrent,
        fetchFromLocalStorage,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppState;
