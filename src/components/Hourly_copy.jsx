import { styled } from "styled-components";
import { ForecastContext } from "../context/forecastContext";
import { useContext, useState, useEffect } from "react";
import Chart from "./echart/Chart";


const Hourly = styled.div`
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export default function ForecastHourly() {


  const { selectedDate, hourly } = useContext(ForecastContext);




  const [startIndex, setStartIndex] = useState(null);
  const [endIndex, setEndIndex] = useState(null);

  useEffect(() => {
    function getDayEndIndex() {
      let startIndex = 0;
      hourly.time.find((a, i) => {
        if (a.slice(0, 10) === selectedDate) {
          startIndex = i;
          return true;
        }
        return false;
      });

      return startIndex+24;
    }
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
    let endDayIndex = getDayEndIndex();

    if(new Date(selectedDate).getDate()===new Date().getDate()){
      startDayIndex = getCurrentIndex(startDayIndex);
    }

    setStartIndex(() => startDayIndex);
    setEndIndex(() => endDayIndex);

  }, [selectedDate,hourly.time]);



//currently the chart gets 24 values, 
  return (
    <Hourly>
      {/* {Array.from({ length: 24 }, (_, i) => i).map((hour, i) => (
        <div className="content" key={i}>
          <p className="hour">{hourly.time[current + i].slice(-5)}</p>

          <p className="temp">{hourly.temperature_2m[current + i]}°</p>
        </div>
      ))} */}
  
      <Chart isToday={new Date(selectedDate).getDate()===new Date().getDate()} hours={hourly.time.slice(startIndex,startIndex+25)} temp={hourly.temperature_2m.slice(startIndex,startIndex+25)}/>
    </Hourly>
  );
}
