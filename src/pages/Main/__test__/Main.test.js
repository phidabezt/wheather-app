import { render, screen, waitFor } from '@testing-library/react';
import {
  mockForecastData,
  mockCurrentWeather,
  mockForecastDataLondon,
  mockCurrentWeatherLondon,
} from '~/__fixtures__/mockData';
import userEvent from '@testing-library/user-event';
import MainPage from '..';
import axios from '../../../api/axiosClients';

jest.mock('../../../api/axiosClients');

describe('Load data', () => {
  it('should show skeleton loading when data is being fetched', () => {
    render(<MainPage />);
    expect(screen.getAllByLabelText('skeleton-loading')).toBeTruthy();
  });

  it('should load data from api', async () => {
    axios.get = jest.fn().mockResolvedValueOnce(mockCurrentWeather).mockResolvedValueOnce(mockForecastData);

    render(<MainPage />);

    await waitFor(() => {
      expect(axios.get).toBeCalledWith('/weather', {
        params: { appid: '773007840d4a26b4cd8cb4434fcb304a', q: 'Hanoi' },
      });
    });
    await waitFor(() => {
      expect(axios.get).toBeCalledWith('/onecall', {
        params: { appid: '773007840d4a26b4cd8cb4434fcb304a', lon: 105.8412, lat: 21.0245, units: 'metric' },
      });
    });

    expect(axios.get).toHaveBeenCalledTimes(2);

    await waitFor(() => {
      expect(screen.getByText('Wind Speed')).toBeInTheDocument();
    });
  });
});

describe('User Search', () => {
  it('should search text when user enter valid input', async () => {
    render(<MainPage />);
    axios.get = jest.fn().mockResolvedValueOnce(mockCurrentWeatherLondon).mockResolvedValueOnce(mockForecastDataLondon);
    userEvent.type(screen.getByPlaceholderText('Search for city ...'), 'London');
    await waitFor(() => {
      expect(screen.getByPlaceholderText('Search for city ...')).toHaveValue('London');
    });

    userEvent.click(screen.getByRole('button', { name: 'search-button' }));
    await waitFor(() => {
      expect(axios.get).toBeCalledWith('/weather', {
        params: { appid: '773007840d4a26b4cd8cb4434fcb304a', q: 'London' },
      });
    });
    await waitFor(() => {
      expect(axios.get).toBeCalledWith('/onecall', {
        params: { appid: '773007840d4a26b4cd8cb4434fcb304a', lon: -0.1257, lat: 51.5085, units: 'metric' },
      });
    });

    expect(axios.get).toBeCalledTimes(2);
  });

  it('should pop up error message when user enter invalid input', async () => {
    axios.get = jest.fn().mockRejectedValueOnce({
      cod: '404',
      message: 'city not found',
    });
    render(<MainPage />);
    await waitFor(() => {
      expect(screen.getByText('Wind Speed')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(axios.get).toBeCalled();
    });
    expect(screen.getByText('May be your city input is invalid')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: 'close-button' }));
    expect(screen.queryByText('May be your city input is invalid')).not.toBeInTheDocument();
  });

  it('should return default value when user hit location button', async () => {
    axios.get = jest.fn().mockResolvedValueOnce(mockCurrentWeather).mockResolvedValueOnce(mockForecastData);
    render(<MainPage />);
    userEvent.click(screen.getByRole('button', { name: 'location-button' }));

    await waitFor(() => {
      expect(screen.getByText('Wind Speed')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(axios.get).toBeCalledWith('/weather', {
        params: { appid: '773007840d4a26b4cd8cb4434fcb304a', q: 'Hanoi' },
      });
    });
    await waitFor(() => {
      expect(axios.get).toBeCalledWith('/onecall', {
        params: { appid: '773007840d4a26b4cd8cb4434fcb304a', lon: 105.8412, lat: 21.0245, units: 'metric' },
      });
    });

    expect(axios.get).toBeCalledTimes(2);
  });
});
