import React from "react";
import "./App.css";
import Chart from "./components/charts/Chart";
import data1 from "./assets/data1.json";
import data2 from "./assets/data2.json";
import data3 from "./assets/data3.json";
import { getColor } from "./utils/utilityFunctions";

const sourceData = [data1, data2, data3];
const mappedData = {
  labels: [],
  datasets: [],
};
mappedData.labels = data1["X"].map((x) => x.key);
sourceData.forEach((x, i) => {
  let dataSetLabel = Object.keys(x)[0];

  mappedData.datasets.push({
    label: dataSetLabel,
    data: x[dataSetLabel] && x[dataSetLabel].map((item) => item.value),
    fill: false,
    borderColor: getColor(dataSetLabel),
  });
});

function App() {
  return (
    <div className="App">
     
      <div className="chart-container">
        <Chart data={mappedData} />
      </div>
    </div>
  );
}

export default App;
