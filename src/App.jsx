import "./App.css";
import List from "./components/List"
import React, { useState } from "react";
// import Date from "./components/Date"
import DatePicker from "react-datepicker";
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";

import "react-datepicker/dist/react-datepicker.css";

function getDate() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const today = new Date();
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month} ${date} ${year}`;
}

function App() {
  const [newName, setNewName] = useState("")
  const [nameList, setNameList] = useState([])
  const [currentDate, setCurrentDate] = useState(getDate());
  const allMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // calendar
  const [startDate, setStartDate] = useState(new Date());
  const years = range(1900, getYear(new Date()) + 1, 1);

  return (
    <div className="App">
      <h1>Birthday reminder</h1>
      {/* <Date/> */}
      <h3>Today is {currentDate}</h3>
      
      <form >
        <div>
          <label htmlFor="name">New Birthday</label>
          <input value={newName} onChange={e => setNewName(e.target.value)} type="text" id="name" placeholder="Enter a name"/>
        </div>

        <DatePicker  
      showIcon
        renderCustomHeader={({
          date,
          changeMonth,
          changeYear
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
        
        <select
              value={allMonths[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(allMonths.indexOf(value))
              }
            >
              {allMonths.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />

        <button>Add Birthday</button>

      </form>

      <h3>Today's birthdays</h3>
      
      <List />
      
    </div>
  );
}

export default App;
