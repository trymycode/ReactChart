import React from 'react';
import "./Chart.css";
import { Line } from "react-chartjs-2";


  

const Chart = ({data})=> {
   
        return (
            <div className="App">
            <Line data={data} />
          </div>
        )
    
}

export default Chart
