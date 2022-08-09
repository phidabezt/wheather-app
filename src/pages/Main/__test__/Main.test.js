import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { mockForecastData, mockCurrentWeather } from '~/__fixtures__/mockData';
import userEvent from '@testing-library/user-event';
import MainPage from '../index';
import SearchTag from '~/components/SearchTag';
import axios from '../../../api/axiosClients';

jest.mock('../../../api/axiosClients');

describe('Load data', () => {
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

  it('should return weather data error', async () => {
    axios.get = jest.fn().mockRejectedValue({ err: 'Failed to fetch data' });
    render(<MainPage />);
    await waitFor(() => {
      expect(axios.get).toBeCalled();
    });
    await waitFor(() => {
      expect(screen.queryByText('Wind Speed')).not.toBeInTheDocument();
    });
  });
});

describe('User Search', () => {
  it('should search text when user enter valid input', async () => {
    axios.get = jest.fn().mockResolvedValueOnce(mockCurrentWeather).mockResolvedValueOnce(mockForecastData);
    const onSearchSubmit = jest.fn();
    const onSearchChange = jest.fn();
    render(
      <MainPage>
        <SearchTag onSearchSubmit={onSearchSubmit} onSearchChange={onSearchChange} />
      </MainPage>,
    );

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

    userEvent.type(screen.getByPlaceholderText('Search for city ...'), 'Hanoi');
    expect(screen.getByPlaceholderText('Search for city ...').value).toBe('Hanoi');

    // userEvent.click(screen.getByRole('button', { name: 'search-button' }));

    console.log(axios.get.mock.calls);
    expect(axios.get).toHaveBeenCalledTimes(2);
    // expect(onSearchSubmit).toHaveBeenCalledTimes(1);
  });

  // it('should pop up message when user enter invalid input', async () => {
  //   axios.get = jest.fn().mockRejectedValue({ err: '404 - City not found' });
  //   render(<MainPage />);
  //   await waitFor(() => {
  //     expect(axios.get).toBeCalled();
  //   });
  //   await waitFor(() => {
  //     expect(screen.queryByText('Wind Speed')).not.toBeInTheDocument();
  //   });
  // });
});
