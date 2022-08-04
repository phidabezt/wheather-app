import { render, screen, waitFor } from '@testing-library/react';
import { mockForecastData } from '@constants/mockForecastData';
import { mockCurrentWeather } from '@constants/mockCurrentWeather';
import userEvent from '@testing-library/user-event';
import MainPage from '../index';
import axiosClient from 'axios';

const mockApiController = {
  // mock a GET method
  getCurrentWeather: jest.fn(() => axiosClient.get('/weather')),
  getWeatherData: jest.fn(() => axiosClient.get('/onecall')),
};

// mock a fetching data function
const fetchWeatherData = async (searchText) => {
  const responseLocation = await mockApiController.getCurrentWeather({
    params: {
      q: searchText || 'Hanoi',
      appid: process.env.REACT_APP_API_KEY,
    },
  });

  const { lat, lon } = responseLocation.coord;
  const responseForecast = await mockApiController.getWeatherData({
    params: {
      lat,
      lon,
      appid: process.env.REACT_APP_API_KEY,
      units: 'metric',
    },
  });
  return responseForecast;
};

describe('when API call is successful', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should return weather data', async () => {
    mockApiController.getCurrentWeather.mockResolvedValueOnce({ ...mockCurrentWeather });
    mockApiController.getWeatherData.mockResolvedValueOnce({ ...mockForecastData });
    render(<MainPage />);

    const result = await fetchWeatherData('London');

    expect(mockApiController.getCurrentWeather).toHaveBeenCalledTimes(1);
    expect(mockApiController.getWeatherData).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockForecastData);
  });
});

// when API call is unsuccessful
