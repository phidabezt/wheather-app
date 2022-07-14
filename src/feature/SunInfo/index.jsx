import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import classes from './SunInfo.module.scss'

export default function SunInfo() {
  return (
    <div className="sunInfo">
      <div className="sunInfo__inner">
        <h3 className="sunInfo__inner__tilte">Sunrise & Sunset</h3>
        <div className={classes['sunInfo__inner__grids']}>
          <div className={classes['sunInfo__inner__grids__grid']}>
            <FontAwesomeIcon
              className={classes['sunInfo__inner__grids__grid__icon']}
              icon={faSun}
            />
            <p className={classes['sunInfo__inner__grids__grid__title']}>
              Sunrise
            </p>
            <p className={classes['sunInfo__inner__grids__grid__value']}>
              4:20 <span>AM</span>
            </p>
          </div>
          <div className={classes['sunInfo__inner__grids__grid']}>
            <FontAwesomeIcon
              className={classes['sunInfo__inner__grids__grid__icon']}
              icon={faMoon}
            />
            <p className={classes['sunInfo__inner__grids__grid__title']}>
              Sunset
            </p>
            <p className={classes['sunInfo__inner__grids__grid__value']}>
              5:50 <span>PM</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
