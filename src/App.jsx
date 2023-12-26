import "./App.css";
import List from "./components/List"
// import Date from "./components/Date"

function App() {
  return (
    <div className="App">
      <h1>Birthday reminder</h1>
      <h3>Today's birthdays</h3>
      <List/>
    </div>
  );
}

export default App;
