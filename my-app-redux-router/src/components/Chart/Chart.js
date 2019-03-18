import React, { Component } from "react";
import { LineChart, Line } from "recharts";
import "./style.css";
import Button from "../Button/Button";

export default class Chart extends Component {
  render() {
    const { data, randomData, resetData, emptyData } = this.props;
    return (
      <div className="ChartContainer">
        <div className="ChartDraw">
          <LineChart width={300} height={300} data={data}>
            <Line type="monotone" dataKey="line1" stroke="green" />
          </LineChart>
        </div>
        <div className="ChartButtons">
          <Button name="Random" click={randomData} />
          <Button name="Reset" click={resetData} />
          <Button name="Empty" click={emptyData} />
        </div>
      </div>
    );
  }
}
