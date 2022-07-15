import React from 'react'
import classes from './BasicInfo.module.scss'
import IconCloudMoon from '../../animated/overcast-night.svg'

export default function BasicInfo() {
  return (
    <div className={classes.basicInfo}>
      <div className="basicInfo__degree">
        <img
          src={IconCloudMoon}
          alt="cloud-moon"
          className="basicInfo__degree__icon"
        />
        <h3 className={classes['basicInfo__degree__text']}>20&deg;C</h3>
      </div>
      <p className={classes['basicInfo__description']}>Dramatic Cloudy</p>
    </div>
  )
}
