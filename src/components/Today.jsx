import {  useContext } from "react";
import { styled } from "styled-components";
import { WeatherContext } from "../context/weatherContext";

const Today = styled.div`
 display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "city city" "temp weather-data";

  height: 50;
  padding-left: 4;
  gap: 1rem;

  #city {
    font-size: 32px;
    grid-area: city;
    justify-self :center; 
    margin: 0;
  }
  #temp {
    font-size: 64px;
    grid-area: temp;
    margin: 0;
    align-self: center;
    justify-self: end;
  }
  .small{font-size:12px;}

  #weather-details ,  #weather-data{
    display: flex;
    flex-direction: column;
    gap: 8px;
    p{margin:0;}
  }
  #weather-data {
grid-area: weather-data;
  }
`;

export default function TodayContainer() {
  const { city, current } = useContext(WeatherContext);
  // const isDay = current.is_day === "yes" ? true : false;
  return (
    <Today>
      <p id="city">{city}</p>
      <p id="temp">{current.temperature}°</p>
      <div id="weather-data">
        
          <p>Feels like {current.feelslike}°</p>
        <div id="weather-details" >
          <p className="small">Humidity {current.humidity}%</p>
          <p className="small">Wind {current.wind_speed}km/h</p>
          <p className="small">Precipitation {current.precip}%</p>
        </div>
      </div>
    </Today>
  );
}

