import React from 'react'
import classes from './LocationInfo.module.scss'

export default function LocationInfo() {
  return (
    <div className={classes['location-info']}>
      <h3 className={classes['location-info__title']}>Hanoi, Vietnam</h3>
      <p className={classes['location-info__clock']}>
        08:54 <span>AM</span>
      </p>
    </div>
  )
}
