import React from 'react'
import classes from './ChartArea.module.scss'
import Chart from 'react-apexcharts'

export default function ChartArea(props) {
  const { graphOption, graphSeries } = props
  return (
    <div className={classes.chart}>
      <Chart
        options={graphOption}
        series={graphSeries}
        type="area"
        height="300"
      />
    </div>
  )
}
