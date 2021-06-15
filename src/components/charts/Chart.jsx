import React from 'react';
import "./Chart.css";
import { Line } from "react-chartjs-2";


  

const Chart = ({data})=> {
   
        return (
           
            <Line data={data} />
         
        )
    
}

export default Chart
