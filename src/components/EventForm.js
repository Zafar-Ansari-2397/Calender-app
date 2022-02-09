import React, { useContext, useState } from "react";
import AppContext from "../store/appContext";

function EventForm({ currentDate }) {
  const appContext = useContext(AppContext);
  const { addNewEvent } = appContext;
  const [eventData, setEventData] = useState({
    name: "",
    date: new Date(currentDate).toLocaleDateString("en-CA"),
  });

  const onSubmit = () => {
    console.log(eventData);
    addNewEvent(eventData);

    setEventData({
      name: "",
      date: new Date().toLocaleDateString("en-CA"),
    });
  };

  return (
    <div className="my-4 eventList">
      <div className="mb-3">
        <label className="form-label">Reminder</label>
        <input
          type="text"
          value={eventData.name}
          onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
          className="form-control"
          placeholder="Title Of Reminder"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Date</label>
        <input
          type="date"
          value={new Date(eventData.date).toLocaleDateString("en-CA")}
          pattern="\d{4}-\d{2}-\d{2}"
          onChange={(e) =>
            setEventData({
              ...eventData,
              date: new Date(e.target.value).toLocaleDateString("en-CA"),
            })
          }
          className="form-control"
          placeholder="enter event date"
        />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Add
        </button>
      </div>
    </div>
  );
}

export default EventForm;
