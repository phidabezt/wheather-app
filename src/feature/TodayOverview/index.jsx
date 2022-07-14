import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWind,
  faCloudRain,
  faWater,
  faSun,
} from '@fortawesome/free-solid-svg-icons'
import classes from './TodayOverview.module.scss'

export default function TodayOverview() {
  return (
    <div className={classes.overview}>
      <div className={classes['overview__inner']}>
        <h3 className={classes['overview__inner__header']}>Today overview</h3>
        <div className={classes['overview__inner__grids']}>
          <div
            className={`${classes['overview__inner__grids__grid']} ${classes['grid__1']}`}
          >
            <FontAwesomeIcon
              className={classes['overview__inner__grids__grid__icon']}
              icon={faWind}
            />
            <p className={classes['overview__inner__grids__grid__title']}>
              Wind Speed
            </p>
            <p className={classes['overview__inner__grids__grid__value']}>
              12 km/h
            </p>
          </div>
          <div
            className={`${classes['overview__inner__grids__grid']} ${classes['grid__2']}`}
          >
            <FontAwesomeIcon
              className={classes['overview__inner__grids__grid__icon']}
              icon={faCloudRain}
            />
            <p className={classes['overview__inner__grids__grid__title']}>
              Rain Chanse
            </p>
            <p className={classes['overview__inner__grids__grid__value']}>
              24 %
            </p>
          </div>
          <div
            className={`${classes['overview__inner__grids__grid']} ${classes['grid__3']}`}
          >
            <FontAwesomeIcon
              className={classes['overview__inner__grids__grid__icon']}
              icon={faWater}
            />
            <p className={classes['overview__inner__grids__grid__title']}>
              Pressure
            </p>
            <p className={classes['overview__inner__grids__grid__value']}>
              720 hpa
            </p>
          </div>
          <div
            className={`${classes['overview__inner__grids__grid']} ${classes['grid__4']}`}
          >
            <FontAwesomeIcon
              className={classes['overview__inner__grids__grid__icon']}
              icon={faSun}
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
