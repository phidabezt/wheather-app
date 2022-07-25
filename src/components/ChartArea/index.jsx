import React from 'react';
import classes from './ChartArea.module.scss';
import Chart from 'react-apexcharts';
import { DEGREE_CATEGORIES } from '@constants/graphData';
import Skeleton from '../Skeleton';

export default function ChartArea(props) {
  const { hourlyTemp, units, loading } = props;
  const graphStyle = {
    options: {
      chart: {
        id: 'basic-bar',
        parentHeightOffset: 0,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
        offsetX: 5,
      },
      fill: {
        colors: ['#89cff0'],
        type: 'gradient',
      },

      dataLabels: {
        enabled: true,
        offsetY: -5,
        style: {
          fontSize: '17px',
          fontFamily: 'Franklin Gothic Medium, Arial, sans-serif',
          colors: ['#333', '#999'],
        },
        background: {
          enabled: false,
        },
      },
      stroke: {
        curve: 'smooth',
        colors: ['#46c2ff'],
        width: 2,
      },

      legend: {
        show: false,
      },
      grid: {
        show: true,
      },
      xaxis: {
        categories: DEGREE_CATEGORIES,
        labels: {
          style: {
            fontSize: '15px',
            fontWeight: 'bold',
            fontFamily: 'Franklin Gothic Medium, sans-serif',
          },
        },
      },
      yaxis: {
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
        name: units === 'metric' ? '°C' : '°F',
        data: hourlyTemp,
      },
    ],
  };
  return (
    <div className={classes['chart']}>
      <h3 className={classes['chart__title']}>Hourly Temperature</h3>
      {loading ? (
        <Skeleton width={'100%'} height={300} />
      ) : (
        <Chart options={graphStyle.options} series={graphStyle.series} type="area" height="300" />
      )}
    </div>
  );
}
