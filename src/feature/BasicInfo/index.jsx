import React from 'react'
import classes from './BasicInfo.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faCloudMoon } from '@fortawesome/free-solid-svg-icons'

export default function BasicInfo() {
  return (
    <div className={classes.basicInfo}>
      <div className="basicInfo__degree">
        <FontAwesomeIcon
          className={classes['basicInfo__degree__icon']}
          icon={faCloudMoon}
        />
        <h3 className={classes['basicInfo__degree__text']}>20&deg;C</h3>
      </div>
      <p className={classes['basicInfo__description']}>Dramatic Cloudy</p>
    </div>
  )
}
