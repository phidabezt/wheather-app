import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

export default function Weather() {
  return (
    <section className="weather">
      <div className="weather__left">
        <div className="weather__left__top">
          <div className="weather__left__top__date">
            <h2 className="weather__left__top__date__month">July 2022</h2>
            <h3 className="weather__left__top__date__day">
              Tuesday, July 12, 2022
            </h3>
          </div>

          <div className="weather__left__top__search">
            <input
              placeholder="Search location here"
              className="weather__left__top__search__text"
            />
            <FontAwesomeIcon
              className="weather__left__top__search__button"
              icon={faSearch}
            />

            <FontAwesomeIcon
              className="weather__left__top__search__location"
              icon={faMapLocationDot}
            />
          </div>

          <div className="weather__left__top__degree">
            <p className="weather__left__top__degree__text">
              C<span className="weather__left__top__degree__icon">o</span>
            </p>
            <span>|</span>
            <p className="weather__left__top__degree__text">
              F<span className="weather__left__top__degree__icon">o</span>
            </p>
          </div>
        </div>
        <div className="weather__left__middle">
          <h3 className="weather__left__middle__header">Today overview</h3>
          <div className="weather__left__middle__grids">
            <div className="weather__left__middle__grids__grid__1"></div>
            <div className="weather__left__middle__grids__grid__2"></div>
            <div className="weather__left__middle__grids__grid__3"></div>
            <div className="weather__left__middle__grids__grid__4"></div>
          </div>
        </div>
      </div>
      <div className="weather__right"></div>
    </section>
  )
}
