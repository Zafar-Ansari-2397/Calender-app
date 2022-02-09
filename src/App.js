import { useContext, useEffect } from "react";
import "./styles/App.css";
import Calender from "./components/Calender";
import EventForm from "./components/EventForm";
import AppContext from "./store/appContext";

function App() {
  const appContext = useContext(AppContext);
  const { addNewFlag, currentDate, fetchFromLocalStorage } = appContext;

  useEffect(() => {
    fetchFromLocalStorage();
  }, []);

  return (
    <div className="container">
      <Calender />
      {addNewFlag && <EventForm currentDate={currentDate} />}
    </div>
  );
}

export default App;
