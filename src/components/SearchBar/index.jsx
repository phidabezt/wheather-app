import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import classes from './SearchBar.module.scss';

export default function SearchBar(props) {
  const { timeInfo } = props;
  console.log(timeInfo);
  return (
    <div className={classes['search']}>
      <div className={classes['search__date']}>
        <h2 className={classes['search__month']}>{timeInfo.localMonth}</h2>
        <h3 className={classes['search__day']}>{timeInfo.localDay}</h3>
      </div>

      <div className={classes['search__interaction']}>
        <input placeholder="Search for city ..." className={classes['search__input']} />
        <FontAwesomeIcon className={classes['search__button']} icon={faSearch} />

        <FontAwesomeIcon className={classes['search__location']} icon={faMapLocationDot} />
      </div>

      <div className={classes['search__degree']}>
        <p className={`${classes['search__icon']} ${classes['search__icon--active']}`}>C&deg;</p>
        <span>|</span>
        <p className={classes['search__icon']}>F&deg;</p>
      </div>
    </div>
  );
}
