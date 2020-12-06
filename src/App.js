import './App.css'
import Forecast from './components/Forecast/Forecast'
import RainySong from './components/Songs/RainySong'

function App() {
  return (
    <div className="App">
      <main>
        <Forecast/>
      </main>
      <footer>
        Page created by Tslil Press
      </footer>
    </div>
  );
}

export default App
