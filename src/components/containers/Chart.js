/* eslint-disable react/prop-types */
import Chart from 'react-apexcharts';

const ChartMap = ({ data, title }) => {
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
    <div>
      <h6 className="text-center m-0 p-0 mt-3">{`${title} by Month`}</h6>
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart options={options} series={series} type="bar" width="500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartMap;
