/* eslint-disable react/prop-types */
import Chart from 'react-apexcharts';

const ChartMap = ({ data, ttl }) => {
  const options = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: ['January', 'February', 'March'],
    },
  };
  const series = [
    {
      name: 'series-1',
      data,
    },
  ];

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="bar" width="500" />
          {ttl}
        </div>
      </div>
    </div>
  );
};

export default ChartMap;
