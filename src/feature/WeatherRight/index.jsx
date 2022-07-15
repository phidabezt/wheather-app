import React from 'react'
import BasicInfo from '../BasicInfo'
import LocationInfo from '../LocationInfo'
import RainChanse from '../RainChanse'
import SunInfo from '../SunInfo'
import classes from './WeatherRight.module.scss'

export default function WeatherRight(props) {
  const { rainData, rainCategories } = props
  return (
    <div className={classes.weatherRight}>
      <LocationInfo />
      <BasicInfo />
      <RainChanse rainData={rainData} rainCategories={rainCategories} />
      <SunInfo />
    </div>
  )
}
