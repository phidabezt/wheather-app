import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import {
  mockForecastData,
  mockCurrentWeather,
  mockForecastDataLondon,
  mockCurrentWeatherLondon,
} from '~/__fixtures__/mockData';
import userEvent from '@testing-library/user-event';
import MainPage from '../index';
import axios from '../../../api/axiosClients';

jest.mock('../../../api/axiosClients');

// describe('Load data', () => {
//   it('should load data from api', async () => {
//     axios.get = jest.fn().mockResolvedValueOnce(mockCurrentWeather).mockResolvedValueOnce(mockForecastData);
//     render(<MainPage />);

//     await waitFor(() => {
//       expect(axios.get).toBeCalledWith('/weather', {
//         params: { appid: '773007840d4a26b4cd8cb4434fcb304a', q: 'Hanoi' },
//       });
//     });
//     await waitFor(() => {
//       expect(axios.get).toBeCalledWith('/onecall', {
//         params: { appid: '773007840d4a26b4cd8cb4434fcb304a', lon: 105.8412, lat: 21.0245, units: 'metric' },
//       });
//     });
//     expect(axios.get).toHaveBeenCalledTimes(2);

//     await waitFor(() => {
//       expect(screen.getByText('Wind Speed')).toBeInTheDocument();
//     });
//   });

//   it('should return weather data error', async () => {
//     axios.get = jest.fn().mockRejectedValue({ err: 'Failed to fetch data' });
//     render(<MainPage />);
//     await waitFor(() => {
//       expect(axios.get).toBeCalled();
//     });
//     await waitFor(() => {
//       expect(screen.queryByText('Wind Speed')).not.toBeInTheDocument();
//     });
//   });
// });

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
    render(<MainPage />);
    axios.get = jest.fn().mockRejectedValueOnce({
      cod: '404',
      message: 'city not found',
    });
    userEvent.type(screen.getByPlaceholderText('Search for city ...'), 'abcdef');
    await waitFor(() => {
      expect(screen.getByPlaceholderText('Search for city ...')).toHaveValue('abcdef');
    });

    userEvent.click(screen.getByRole('button', { name: 'search-button' }));

    await waitFor(() => {
      expect(axios.get).toBeCalled();
    });
    expect(screen.getByText('May be your city input is invalid')).toBeInTheDocument();
  });
});
