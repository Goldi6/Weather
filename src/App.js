import Today from "./components/Today";
import Nav from "./components/Nav";
import { useState } from "react";
import Forecast from "./components/Forecast.jsx";
import { ForecastProvider } from "./context/forecastContext";
import { WeatherProvider } from "./context/weatherContext";
import { styled } from "styled-components";

const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 4rem 0.5rem;
  justify-content: space-between;
`;
function App() {
  const options = [
    { name: "Jerusalem", lon: 35.2163, lat: 31.769 },
    { name: "Moscow", lat: 55.7522, lon: 37.6156 },
    { name: "Budapest", lat: 47.4984, lon: 19.0404 },
  ];
  //TODO security
  const [coords, setCoords] = useState(options[0]);

  const setOption = (item) => {
    setCoords(() => item);
  };

  return (
    <div className="App" >
      <div style={{maxWidth: '768px',margin:"auto"}}>
        <Nav locations={options} setLocation={setOption} />
        <Main>
          <div></div>
          <div></div>
          <WeatherProvider city={coords.name}>
            <Today />
          </WeatherProvider>
          <ForecastProvider lon={coords.lon} lat={coords.lat}>
            <Forecast />
          </ForecastProvider>
        </Main>
      </div>
    </div>
  );
}

export default App;
