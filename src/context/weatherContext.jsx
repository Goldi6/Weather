import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children ,city}) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {

   

    const fetchData = async () => {
      try {
        setWeather(null);
        const response = await axios.post("http://localhost:5000/api/proxy", {
          params: {query:city}, // Add any params you need for the API request
        });
        
        setWeather(() =>  response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();

  
  }, [city]);

  return (
    <WeatherContext.Provider value={{ city:weather?.location.name,current:weather?.current }}>
      {weather ? children : <p>Loading...</p>}
    </WeatherContext.Provider>
  );
};
