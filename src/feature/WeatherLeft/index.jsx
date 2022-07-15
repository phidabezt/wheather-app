import React from 'react'
import classes from './WeatherLeft.module.scss'
import SearchBar from '../SearchBar'
import TodayOverview from '../TodayOverview'
import ChartArea from '../ChartArea'

export default function WeatherLeft(props) {
  const { degreeData, degreeCategories } = props
  return (
    <div className={classes['weather__left']}>
      <SearchBar />
      <TodayOverview />
      <ChartArea degreeData={degreeData} degreeCategories={degreeCategories} />
    </div>
  )
}
