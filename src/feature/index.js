import React, { useState } from 'react'
import './index.scss'
import WeatherLeft from './WeatherLeft'
import WeatherRight from './WeatherRight'

export default function Weather() {
  const [graphDegree, setGraphDegree] = useState({
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
      },
      fill: {
        colors: ['#89cff0'],
        type: 'gradient',
      },

      dataLabels: {
        enabled: true,
        textAnchor: 'middle',
        offsetY: -5,
        style: {
          fontSize: '12px',
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
        categories: [
          '00:00',
          '03:00',
          '06:00',
          '09:00',
          '12:00',
          '15:00',
          '18:00',
          '21:00',
        ],
      },
    },
    series: [
      {
        name: 't °C',
        data: [30, 40, 45, 50, 49, 45, 40, 31],
      },
    ],
  })

  const [graphRain, setGraphRain] = useState({
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
        categories: ['7PM', '8PM', '9PM', '10PM'],
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
        data: [30, 20, 40, 50],
      },
    ],
  })

  return (
    <section className="weather">
      <WeatherLeft
        graphOption={graphDegree.options}
        graphSeries={graphDegree.series}
      />
      <WeatherRight
        graphOption={graphRain.options}
        graphSeries={graphRain.series}
      />
    </section>
  )
}
