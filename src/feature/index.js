import React, { useState, useEffect } from 'react'
import './index.scss'
import WeatherLeft from './WeatherLeft'
import WeatherRight from './WeatherRight'
import weatherApi from '../api/weatherApi'

export default function Weather() {
  const [weatherData, setWeatherData] = useState({})
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const searchParams = {
          q: 'london',
        }
        const response = await weatherApi.getWeatherData(
          'weather',
          searchParams
        )
        console.log(response)
      } catch (err) {
        console.log('Failed to fetch weather data', err)
      }
    }

    fetchWeatherData()
  })

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
