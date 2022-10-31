import './App.css';
import Weather from './Weather';
import SearchEngine from './SearchEngine';
import CurrentLocationWeather from './CurrentLocationWeather';
import Forecast from './Forecast';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header>
        <h1>Weather today</h1>
      </header>
      <SearchEngine />
      <Weather city="Tokyo" />
      <CurrentLocationWeather />
      <br />
      <br />
      <Forecast />
      <footer>
      <a className="GitHubLink" href="https://github.com/elizbethsandri/weather-react" target="_blank" rel='noreferrer'>
     Open-source code</a>, by Liz Sandri
      </footer>
      </div>
    </div>
  );
}

export default App;
