import './App.css';
import Weather from './Weather';
import SearchEngine from './SearchEngine';

function App() {
  return (
    <div className="App-wrapper">
      <header className="App-header">
        <h1>Weather today</h1>
      </header>
      <SearchEngine />
      <Weather city="Tokyo" />
    </div>
  );
}

export default App;
