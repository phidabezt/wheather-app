import React from 'react'
import IconSunRise from '../../animated/clear-day.svg'
import IconSunSet from '../../animated/haze-day.svg'
import classes from './SunInfo.module.scss'

export default function SunInfo() {
  return (
    <div className="sunInfo">
      <div className="sunInfo__inner">
        <h3 className="sunInfo__inner__tilte">Sunrise & Sunset</h3>
        <div className={classes['sunInfo__inner__grids']}>
          <div className={classes['sunInfo__inner__grids__grid']}>
            <img
              src={IconSunRise}
              alt="sunrise"
              className={classes['sunInfo__inner__grids__grid__icon']}
            />
            <p className={classes['sunInfo__inner__grids__grid__title']}>
              Sun
              <span
                className={classes['sunInfo__inner__grids__grid__title__rise']}
              >
                rise
              </span>
            </p>
            <p className={classes['sunInfo__inner__grids__grid__value']}>
              4:20 <span>AM</span>
            </p>
          </div>
          <div className={classes['sunInfo__inner__grids__grid']}>
            <img
              src={IconSunSet}
              alt="sunset"
              className={classes['sunInfo__inner__grids__grid__icon']}
            />
            <p className={classes['sunInfo__inner__grids__grid__title']}>
              Sun
              <span
                className={classes['sunInfo__inner__grids__grid__title__set']}
              >
                set
              </span>
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
