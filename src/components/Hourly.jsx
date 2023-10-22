import { styled } from "styled-components";
import { ForecastContext } from "../context/forecastContext";
import { useContext, useState, useEffect } from "react";
import Chart from "./echart/Chart";


const Hourly = styled.div`
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin: auto;
`;

export default function ForecastHourly() {


  const { selectedDate, hourly } = useContext(ForecastContext);




  const [startIndex, setStartIndex] = useState(null);

  useEffect(() => {
  
    function getDayStartIndex(start){
      let startIndex = 0;
      hourly.time.find((a, i) => {
        if (a.slice(0, 10) === selectedDate) {
          startIndex = i;
          return true;
        }
        return false;
      });

      return startIndex;
    }
    function getCurrentIndex(start){
      let startIndex = 0;
      hourly.time.slice().find((a, i) => {
        let currHour =  new Date().getHours();
 
        if (parseInt(a.slice(11, 13)) === parseInt(currHour)) {
          startIndex = i;
          return true;
        }
        return false;
      });

      return startIndex+start;
    }

    let startDayIndex = getDayStartIndex();

    if(new Date(selectedDate).getDate()===new Date().getDate()){
      startDayIndex = getCurrentIndex(startDayIndex);
    }

    setStartIndex(() => startDayIndex);

  }, [selectedDate,hourly.time]);



//currently the chart gets 24 values, 
  return (
    <Hourly>
     
  
      <Chart isToday={new Date(selectedDate).getDate()===new Date().getDate()} hours={hourly.time.slice(startIndex,startIndex+25)} temp={hourly.temperature_2m.slice(startIndex,startIndex+25)}/>
    </Hourly>
  );
}
