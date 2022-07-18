import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import classes from './SearchBar.module.scss'

export default function SearchBar() {
  return (
    <div className={classes['search']}>
      <div className={classes['search__date']}>
        <h2 className={classes['search__date--month']}>July 2022</h2>
        <h3 className={classes['search__date--day']}>Tuesday, July 12, 2022</h3>
      </div>

      <div className={classes['search__input']}>
        <input
          placeholder="Search for city ..."
          className={classes['search__input__text']}
        />
        <FontAwesomeIcon
          className={classes['search__input__button']}
          icon={faSearch}
        />

        <FontAwesomeIcon
          className={classes['search__input__location']}
          icon={faMapLocationDot}
        />
      </div>

      <div className={classes['search__degree']}>
        <p
          className={`${classes['search__degree__text']} ${classes['search__degree__text--active']}`}
        >
          C&deg;
        </p>
        <span>|</span>
        <p className={classes['search__degree__text']}>F&deg;</p>
      </div>
    </div>
  )
}
