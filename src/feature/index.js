import React, { useState, useEffect } from 'react'
import './index.scss'
import WeatherLeft from './WeatherLeft'
import WeatherRight from './WeatherRight'
import weatherApi from '../api/weatherApi'

export default function Weather() {
  const [weatherData, setWeatherData] = useState({})
  const [forecaseData, setForecaseData] = useState({})
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const searchParams = {
          q: 'london',
          appid: process.env.REACT_APP_API_KEY,
          exclude: 'current,minutely,hourly,alerts',
        }
        const response = await weatherApi.getWeatherData(
          'weather',
          searchParams
        )
        setWeatherData(formatCurrentWeather(response))
      } catch (err) {
        console.log('Failed to fetch weather data', err)
      }
    }

    fetchWeatherData()
  }, [])

  useEffect(() => {
    const fetchForecaseData = async () => {
      try {
        const searchParams = {
          lat: String(weatherData.lat),
          lon: String(weatherData.lon),
          exclude: 'current,minutely,hourly,alerts',
          appid: process.env.REACT_APP_API_KEY,
          // units: 'metric',
        }
        const response = await weatherApi.getWeatherData('oncall', searchParams)
        console.log(searchParams)
      } catch (err) {
        console.log('Failed to fetch weather data', err)
      }
    }

    fetchForecaseData()
  }, [])

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
