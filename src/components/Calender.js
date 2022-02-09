import { useContext } from "react";
import DatePicker from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/Calender.css";
import AppContext from "../store/appContext";

export default function Calender() {
  const appContext = useContext(AppContext);
  const {
    addNewFlag,
    currentDate,
    currentList,
    showAddNewEvent,
    setAndShowCurrent,
  } = appContext;

  const onChange = (date) => {
    console.log(date);
    console.log("currentList", date.getTime());
    setAndShowCurrent(date);
  };

  return (
    <div className="d-flex flex-column">
      <DatePicker
        onChange={onChange}
        value={currentDate}
        next2Label={null}
        prev2Label={null}
      />

      <div className="eventList">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              {new Date(currentDate).toLocaleString("en-us", {
                weekday: "long",
              })}
            </div>
            {currentDate.toLocaleDateString()}
          </div>
          <button className="btn" onClick={showAddNewEvent}>
            {addNewFlag ? "Close" : "Add New"}
          </button>
        </li>
        {currentList.length > 0 &&
          currentList.map((item) => (
            <div
              key={item.name}
              className="list-group-item list-group-item-action"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{item.name}</h5>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
