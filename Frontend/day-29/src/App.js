import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Form from './components/Form';
import WeatherCart from './components/WeatherCart';

function App() {
  return (
    <div className="App">
      <Form />
      <WeatherCart />
    </div>
  );
}

export default App;
