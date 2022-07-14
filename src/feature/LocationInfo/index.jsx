import React from 'react'
import classes from './LocationInfo.module.scss'

export default function LocationInfo() {
  return (
    <div className={classes.locationInfo}>
      <h3 className={classes['locationInfo__title']}>Hanoi, Vietnam</h3>
      <p className={classes['locationInfo__clock']}>
        08:54 <span>AM</span>
      </p>
    </div>
  )
}
