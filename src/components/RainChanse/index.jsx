import React from 'react';
import classes from './RainChanse.module.scss';
import Chart from 'react-apexcharts';
import { RAIN_CATEGORIES } from '@constants/graphData';

export default function RainChanse(props) {
  const { dailyRainChance } = props;
  const graphStyle = {
    options: {
      chart: {
        id: 'rain-bar',
        parentHeightOffset: 0,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
        foreColor: 'white',
      },
      fill: {
        colors: ['#89cff0'],
        type: 'gradient',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: true,
        textAnchor: 'middle',
        style: {
          fontSize: '16px',
          colors: ['#f2eded', '#999'],
        },
        background: {
          enabled: false,
        },
        offsetY: -30,
      },
      stroke: {
        curve: 'smooth',
        colors: ['#46c2ff'],
        width: 2,
      },
      grid: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      xaxis: {
        categories: RAIN_CATEGORIES,
        labels: {
          style: {
            fontSize: '15px',
            fontWeight: 'bold',
            fontFamily: 'Franklin Gothic Medium, sans-serif',
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
    },
    series: [
      {
        name: '%',
        data: dailyRainChance,
      },
    ],
  };
  return (
    <div className={classes['rain-chanse']}>
      <h3>Daily Rain Chance (%)</h3>
      <Chart options={graphStyle.options} series={graphStyle.series} type="bar" height="250" />
    </div>
  );
}
