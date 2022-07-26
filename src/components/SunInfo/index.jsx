import React from 'react';
import IconSunRise from '@animated/clear-day.svg';
import IconSunSet from '@animated/haze-day.svg';
import classes from './SunInfo.module.scss';
import Skeleton from '../Skeleton';

export default function SunInfo(props) {
  const { forecastData, loading } = props;
  const sunInfoList = [
    { id: 1, name: 'rise', iconSrc: IconSunRise, value: forecastData.sunrise },
    { id: 2, name: 'set', iconSrc: IconSunSet, value: forecastData.sunset },
  ];

  return (
    <div className="sun-info">
      <h3 className="sun-info__title">Sunrise & Sunset</h3>
      <div className={classes['sun-info__grids']}>
        {sunInfoList.map((info) =>
          loading ? (
            <Skeleton width={300} height={90} bgColor="var(--color-blue-6)" key={info.id} />
          ) : (
            <div className={classes['sun-info__grid']} key={info.id}>
              <img src={IconSunRise} alt="sunrise" className={classes['sun-info__icon']} />
              <p className={classes['sun-info__title']}>
                Sun
                <span className={classes['sun-info__title--rise']}>rise</span>
              </p>
              <p className={classes['sun-info__value']}>{forecastData.sunrise}</p>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
