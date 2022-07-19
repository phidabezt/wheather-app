import React from 'react';
import classes from './BasicInfo.module.scss';
import IconCloudMoon from '@animated/overcast-night.svg';

export default function BasicInfo() {
  return (
    <div className={classes['basic-info']}>
      <div className={classes['basic-info__content']}>
        <img src={IconCloudMoon} alt="cloud-moon" className="basic-info__icon" />
        <h3 className={classes['basic-info__degree']}>20&deg;C</h3>
      </div>

      <p className={classes['basic-info__description']}>Dramatic Cloudy</p>
    </div>
  );
}
