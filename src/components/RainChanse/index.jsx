import React from 'react'
import classes from './RainChanse.module.scss'
import Chart from 'react-apexcharts'

export default function RainChanse(props) {
  const { rainData, rainCategories } = props
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
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: true,
        textAnchor: 'middle',
        style: {
          fontSize: '20px',
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
      grid: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      xaxis: {
        categories: rainCategories,
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
      yaxis: {
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
    },
    series: [
      {
        name: '%',
        data: rainData,
      },
    ],
  }
  return (
    <div className={classes['rain-chanse']}>
      <h3>Hourly Rain Chanse (%)</h3>
      <Chart
        options={graphStyle.options}
        series={graphStyle.series}
        type="bar"
        height="250"
      />
    </div>
  )
}
