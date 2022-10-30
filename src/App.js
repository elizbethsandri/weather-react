import './App.css';
import Weather from './Weather';
import SearchEngine from './SearchEngine';
import CurrentLocationWeather from './CurrentLocationWeather';
import Forecast from './Forecast';

function App() {
  return (
    <div className="App-wrapper">
      <header className="App-header">
        <h1>Weather today</h1>
      </header>
      <SearchEngine />
      <Weather city="Tokyo" />
      <CurrentLocationWeather />
      <br />
      <br />
      <Forecast />
      <p>
      <a className="GitHubLink" href="https://github.com/elizbethsandri/weather-app-2.0" target="_blank">
     Open-source code</a>, by Liz Sandri
      </p>
    </div>
  );
}

export default App;
