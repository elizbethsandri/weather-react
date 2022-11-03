import './App.css';
import Weather from './Weather';
import Forecast from './Forecast';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Weather defaultCity="New York" />
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
