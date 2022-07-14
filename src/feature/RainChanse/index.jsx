import React from 'react'
import classes from './RainChanse.module.scss'
import Chart from 'react-apexcharts'

export default function RainChanse(props) {
  const { graphOption, graphSeries } = props
  return (
    <div className={classes.rainChanse}>
      <h3>Hourly Rain Chanse (%)</h3>
      <Chart
        options={graphOption}
        series={graphSeries}
        type="bar"
        height="250"
      />
    </div>
  )
}
