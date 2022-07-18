import React from 'react'
import classes from './ChartArea.module.scss'
import Chart from 'react-apexcharts'

export default function ChartArea(props) {
  const { degreeData, degreeCategories } = props
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
        categories: degreeCategories,
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
        name: 't °C',
        data: degreeData,
      },
    ],
  }
  return (
    <div className={classes['chart']}>
      <h3 className={classes['chart__title']}>Hourly Temperature</h3>
      <Chart
        options={graphStyle.options}
        series={graphStyle.series}
        type="area"
        height="300"
      />
    </div>
  )
}
