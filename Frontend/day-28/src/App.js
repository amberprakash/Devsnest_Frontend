import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [place, setPlace] = useState("");
  const [placeData, setPlaceData] = useState({});
  const updatePlaceData = () => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=ebf9e31012374671a0c172826211509&q=${place}`)
      .then(res => res.json())
      .then(data => {
        setPlaceData(data);
      });

  };
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 form">
            <input type="text" value={place} onChange={(e) => {
              setPlace(e.target.value);
            }} />
            <button className="btn btn-primary" onClick={updatePlaceData}>Submit</button>
          </div>
          <div className="offset-md-4 col-12 col-md-4 weather">
            <div className="card">
              {placeData.location ? (
                <div>
                  <img src={placeData.current.condition.icon} />
                  <div className="temp">{placeData.current.temp_c}°</div>
                  <div className="desc">{placeData.current.condition.text}</div>
                  <div className="place">{placeData.location.name}</div>
                  <div className="container">
                    <div className="row whp">
                      <div className="col">
                        <div className="titile">Wind Now</div>
                        <div className="data">
                          {placeData.current.wind_kph}<spna className="unit">KM</spna></div>
                      </div>
                      <div className="col">
                        <div className="titile">Humidity</div>
                        <div className="data">
                          {placeData.current.humidity}<spna className="unit">%</spna></div>
                      </div>
                      <div className="col">
                        <div className="titile">Precipitation</div>
                        <div className="data">
                          {placeData.current.precip_in}<spna className="unit">%</spna></div>
                      </div>
                    </div>
                  </div>



                </div>
              ) : <h2>Place Not Found</h2>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
