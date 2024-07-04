import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [chartState, setChartState] = useState({
    series: [60, 40],
    options: {
      chart: {
        type: 'donut',
      },
      colors: ['#FF5733', '#3366FF'],
      legend: {
        show: false // Setting legend to not show
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartState.options} series={chartState.series} type="donut" />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}


export default ApexChart