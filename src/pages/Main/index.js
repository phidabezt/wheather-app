import React, { useState, useEffect } from 'react'
import './main.scss'
import WeatherLeft from '../../components/WeatherLeft'
import WeatherRight from '../../components/WeatherRight'
import weatherApi from '../../api/weatherApi'
import queryString from 'query-string'

export default function MainPage() {
  const [weatherData, setWeatherData] = useState({})
  const [forecastData, setForecastData] = useState({})

  // useEffect(() => {
  //   const fetchWeatherData = async () => {
  //     try {
  //       const searchParams = {
  //         q: 'london',
  //         appid: process.env.REACT_APP_API_KEY,
  //       }
  //       const response = await weatherApi.getWeatherData(
  //         'weather',
  //         searchParams
  //       )
  //       setWeatherData(formatCurrentWeather(response))
  //     } catch (err) {
  //       console.log('Failed to fetch weather data', err)
  //     }
  //   }

  //   fetchWeatherData()
  // }, [])

  // useEffect(() => {
  //   const fetchForecastData = async () => {
  //     try {
  //       const searchParams = {
  //         lat: weatherData.lat,
  //         lon: weatherData.lon,
  //         appid: process.env.REACT_APP_API_KEY,
  //         units: 'metric',
  //       }
  //       const response = await weatherApi.getWeatherData(
  //         'onecall',
  //         searchParams
  //       )
  //       setForecastData(response)
  //     } catch (err) {
  //       console.log('Failed to fetch weather forecast data', err)
  //     }
  //   }

  //   fetchForecastData()
  // }, [weatherData])
  // console.log('forecastData', forecastData)

  const formatCurrentWeather = data => {
    const {
      coord: { lon, lat },
      main: { temp, feels_like, temp_min, temp_max, humidity },
      name,
      dt,
      sys: { sunrise, sunset, country },
      weather,
      wind: { speed },
    } = data

    const { main: details, icon } = weather[0]

    return {
      lat,
      lon,
      temp,
      feels_like,
      temp_min,
      temp_max,
      humidity,
      name,
      dt,
      sunrise,
      sunset,
      country,
      details,
      icon,
      speed,
    }
  }

  const formatForecastWeather = data => {
    const { timezone, daily, hourly } = data
    daily = daily.slice(1, 6).map()
  }

  const [degreeData, setDegreeData] = useState([30, 40, 45, 50, 49, 45, 40, 31])
  const degreeCategories = [
    '00:00',
    '03:00',
    '06:00',
    '09:00',
    '12:00',
    '15:00',
    '18:00',
    '21:00',
  ]
  const [rainData, setRainData] = useState([30, 20, 40, 50])
  const rainCategories = ['7PM', '8PM', '9PM', '10PM']

  return (
    <section className="weather">
      <WeatherLeft
        degreeData={degreeData}
        degreeCategories={degreeCategories}
      />
      <WeatherRight rainData={rainData} rainCategories={rainCategories} />
    </section>
  )
}
