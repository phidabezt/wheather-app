import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import classes from './SearchBar.module.scss'

export default function SearchBar() {
  return (
    <div className={classes.search}>
      <div className={classes['search__inner']}>
        <div className={classes['search__inner__date']}>
          <h2 className={classes['search__inner__date__month']}>July 2022</h2>
          <h3 className={classes['search__inner__date__day']}>
            Tuesday, July 12, 2022
          </h3>
        </div>

        <div className={classes['search__inner__input']}>
          <input
            placeholder="Search for city ..."
            className={classes['search__inner__input__text']}
          />
          <FontAwesomeIcon
            className={classes['search__inner__input__button']}
            icon={faSearch}
          />

          <FontAwesomeIcon
            className={classes['search__inner__input__location']}
            icon={faMapLocationDot}
          />
        </div>

        <div className={classes['search__inner__degree']}>
          <p
            className={`${classes['search__inner__degree__text']} ${classes['search__inner__degree__text__active']}`}
          >
            C&deg;
          </p>
          <span>|</span>
          <p className={classes['search__inner__degree__text']}>F&deg;</p>
        </div>
      </div>
    </div>
  )
}
