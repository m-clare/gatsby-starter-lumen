import * as d3 from "d3";
import React, { useRef, useEffect } from "react";

function Circles() {
  const chartRef = useRef(null);

  const myData = [40, 10, 20, 60, 30];

  useEffect(() => {
    const circleChart = d3.select(chartRef.current)
          .append('g')
          .attr("class", "chart")
          .attr("transform", `translate(50, 0)`)

    circleChart
      .selectAll('circle')
      .data(myData)
      .join('circle')
      .attr('cx', function(d, i) {
        return i * 100;
      })
      .attr('cy', 50)
      .attr('r', function(d) {
        return 0.5 * d;
      })
      .style('fill', 'orange');
  }, [])



  return (
    <>
      <svg id="circleChart" ref={chartRef} width="600" height="100"/>
    </>
  )
}

export { Circles }
