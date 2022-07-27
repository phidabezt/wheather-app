import React from 'react';
import classes from './TodayOverview.module.scss';
import Skeleton from '../Skeleton';

export default function TodayOverview(props) {
  const { loading, weatherInfoList } = props;

  return (
    <div className={classes['overview']}>
      <div className={classes['overview__inner']}>
        <h3 className={classes['overview__header']}>Today overview</h3>
        <div className={classes['overview__grids']}>
          {weatherInfoList.map((info) =>
            loading ? (
              <Skeleton width={380} height={114} key={info.id} />
            ) : (
              <div className={`${classes['overview__grid']}`} key={info.id}>
                <img src={info.iconSrc} alt={info.name} className={classes['overview__icon']} />
                <p className={classes['overview__title']}>{info.name}</p>
                <p className={classes['overview__value']}>{info.value}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
