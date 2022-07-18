import React from 'react';
import IconSunRise from '@animated/clear-day.svg';
import IconSunSet from '@animated/haze-day.svg';
import classes from './SunInfo.module.scss';

export default function SunInfo() {
  return (
    <div className="sun-info">
      <h3 className="sun-info__title">Sunrise & Sunset</h3>
      <div className={classes['sun-info__grids']}>
        <div className={classes['sun-info__grid']}>
          <img src={IconSunRise} alt="sunrise" className={classes['sun-info__icon']} />
          <p className={classes['sun-info__title']}>
            Sun
            <span className={classes['sun-info__title--rise']}>rise</span>
          </p>
          <p className={classes['sun-info__value']}>
            4:20 <span>AM</span>
          </p>
        </div>
        <div className={classes['sun-info__grid']}>
          <img src={IconSunSet} alt="sunset" className={classes['sun-info__icon']} />
          <p className={classes['sun-info__title']}>
            Sun
            <span className={classes['sun-info__title--set']}>set</span>
          </p>
          <p className={classes['sun-info__value']}>
            5:50 <span>PM</span>
          </p>
        </div>
      </div>
    </div>
  );
}
