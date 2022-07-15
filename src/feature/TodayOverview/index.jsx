import React from 'react'
import classes from './TodayOverview.module.scss'
import IconWind from '../../animated/dust-wind.svg'
import IconCloudRain from '../../animated/rain.svg'
import IconPressure from '../../animated/tornado.svg'
import IconSun from '../../animated/uv-index.svg'

export default function TodayOverview() {
  return (
    <div className={classes.overview}>
      <div className={classes['overview__inner']}>
        <h3 className={classes['overview__inner__header']}>Today overview</h3>
        <div className={classes['overview__inner__grids']}>
          <div className={`${classes['overview__inner__grids__grid']}`}>
            <img
              src={IconWind}
              alt="windy"
              className={classes['overview__inner__grids__grid__icon']}
            />
            <p className={classes['overview__inner__grids__grid__title']}>
              Wind Speed
            </p>
            <p className={classes['overview__inner__grids__grid__value']}>
              12 km/h
            </p>
          </div>
          <div className={`${classes['overview__inner__grids__grid']}`}>
            <img
              src={IconCloudRain}
              alt="cloud-rain"
              className={classes['overview__inner__grids__grid__icon']}
            />
            <p className={classes['overview__inner__grids__grid__title']}>
              Rain Chanse
            </p>
            <p className={classes['overview__inner__grids__grid__value']}>
              24 %
            </p>
          </div>
          <div className={`${classes['overview__inner__grids__grid']}`}>
            <img
              src={IconPressure}
              alt="pressure"
              className={classes['overview__inner__grids__grid__icon']}
            />
            <p className={classes['overview__inner__grids__grid__title']}>
              Pressure
            </p>
            <p className={classes['overview__inner__grids__grid__value']}>
              720 hpa
            </p>
          </div>
          <div className={`${classes['overview__inner__grids__grid']}`}>
            <img
              src={IconSun}
              alt="UV index"
              className={classes['overview__inner__grids__grid__icon']}
            />
            <p className={classes['overview__inner__grids__grid__title']}>
              Uv Index
            </p>
            <p className={classes['overview__inner__grids__grid__value']}>
              2,3
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
