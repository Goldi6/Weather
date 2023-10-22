import ReactEcharts from "echarts-for-react"; import { options } from "./graphConfig";

export default function Chart({hours,temp,isToday}) {

    


    const chartOptions = options(hours, temp,isToday);



    let itemWidth = 57;
    let length  = hours.length;
    let width = itemWidth * length;
    //let minWidth = itemWidth*6;

    
    return (
        <div style={{overflowX:'scroll'}}>

            <ReactEcharts option={chartOptions}   style={{height: '150px', width: `${width}px`}} />
      </div>
    
    )
}

