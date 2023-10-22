import { useContext } from "react";
import { styled } from "styled-components";
import { ForecastContext } from '../context/forecastContext';



const Daily = styled.div`

display: flex;
flex-direction: row;
gap:1rem;
justify-content: center;
border-bottom: 1px solid black;

.content{
    display: flex;
    flex-direction: column;
    gap: .25rem;
    &:active{
        background-color: #eee;
    }
    
}
.tempMinMax{
    display:flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: .75rem;

    p:first-of-type{margin-bottom: 0;/*border-bottom:1px solid black*/}
    p:last-of-type{margin-top: 0;}
}
.day{font-size: 1rem;
    margin-top:.1rem;

}


`;




export default function ForecastDaily() {
    const {daily,days,setDate} = useContext(ForecastContext);

    return (
    <Daily>

{Array.from({length:days},(_,i)=>i).map((day,i)=><div className='content' onClick={()=>setDate(()=>daily.time[i])} key={i}>
    <div className='tempMinMax'>

    <p>{daily.temperature_2m_max[i]}°</p>
    <p>{daily.temperature_2m_min[i]}°</p>        
    </div>
    <p className="day">{daily.time[i].slice(-5).replace('-','.')}</p>
</div>)}

</Daily>)
}