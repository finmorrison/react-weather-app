import "./App.css";
import LocationInput from "./Location/LocationInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather app</h1>
        <h3>Weather app to get the current weather in a city</h3>
        <ul>
          <li>
            Features: Search for weather by city, display current weather and
            forecast, handle errors for invalid city names.
          </li>
          <li>
            Key Concepts: Fetching data from APIs, using useEffect for side
            effects, managing state with hooks, conditional rendering.
          </li>
        </ul>
      </header>
      <LocationInput />
    </div>
  );
}

export default App;
