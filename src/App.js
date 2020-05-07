import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Status from "./Components/Status.js"
import Calendar from "./Components/Calendar";

function App() {
  return (
    <div>
      <Status/>
      <Calendar/>
    </div>
  );
}
export default App;
