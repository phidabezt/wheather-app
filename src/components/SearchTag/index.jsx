import React from 'react';
import classes from './SearchTag.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function SearchTag(props) {
  const { placeholder, setSearchText, formatTimeCurrent } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchText(e.target.city_search.value);
  };

  return (
    <form
      className={classes['search-tag']}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input className={classes['search-tag__input']} name="city_search" placeholder={placeholder} />
      <button
        type="submit"
        className={classes['search-tag__button']}
        onClick={() => {
          formatTimeCurrent();
        }}
      >
        <FontAwesomeIcon icon={faSearch} className={classes['search-tag__icon']} />
      </button>
      <button className={classes['search-tag__location']}>
        <FontAwesomeIcon icon={faMapLocationDot} className={classes['search-tag__icon']} />
      </button>
    </form>
  );
}
