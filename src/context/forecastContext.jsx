
import { useState, createContext, useEffect } from 'react';



export const ForecastContext = createContext();

export const ForecastProvider = ({ children,lat,lon }) => {
    const [forecast, setForecast] = useState(null);
    const [selectedDate,setDate] = useState(null);


    useEffect( ()=>{


      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=GMT`
        async function getWeather(){
          try {
            setForecast(null)
            let weather = await fetch(url);
            weather = await weather.json();
            setForecast(()=>weather)
            setDate(()=>weather.daily.time[0])
          }catch(err){
            console.log(err)  
          }
          
        }
        getWeather()
      
    
      },[lon,lat])
    
    return (
        <ForecastContext.Provider value={{selectedDate,setDate,daily:forecast?.daily,hourly:forecast?.hourly,days:4}}>
        {forecast===null?<p>Loading...</p>:children}
        </ForecastContext.Provider>
    );
    }