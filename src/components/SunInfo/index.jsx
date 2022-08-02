import React from 'react';
import classes from './SunInfo.module.scss';
import Skeleton from '../Skeleton';

export default function SunInfo(props) {
  const { loading, sunInfoList } = props;

  return (
    <div className="sun-info">
      <h3 className="sun-info__title">Sunrise & Sunset</h3>
      <div className={classes['sun-info__grids']}>
        {sunInfoList.map((info) =>
          loading ? (
            <Skeleton width={300} height={90} bgColor="var(--color-blue-6)" key={info.id} />
          ) : (
            <div className={classes['sun-info__grid']} key={info.id}>
              <img src={info.iconSrc} alt="sunrise" className={classes['sun-info__icon']} />
              <p className={classes['sun-info__title']}>
                Sun
                <span className={classes['sun-info__title--rise']}>rise</span>
              </p>
              <p className={classes['sun-info__value']}>{info.value}</p>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
