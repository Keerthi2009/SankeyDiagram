import React from "react";
import ReactDOM from "react-dom";
import Sankey from "./Sankey";

import "./styles.css";
import BarChart from "./BarChart";
import Own from "./Own";
import Sunburst from "./Sunburst";
import WordCloud from "./WordCloud";

/* import Data from "./originaldata"; */
import AtozData2019 from "./atozdata2019";
import AtozData from "./atozdata";

/*
      <BarChart data={[5, 10, 1, 3]} size={[200, 200]} />
*/

/*
      <Sunburst data1={data1} data2={data2} edit={false} />

*/

function App() {
  const data1 = AtozData();
  const data2 = AtozData2019();
  return (
    <div className="App">
      <WordCloud data1={data1} data2={data2} edit={false} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
