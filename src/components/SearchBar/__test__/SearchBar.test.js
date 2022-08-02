import { render, screen, waitFor } from '@testing-library/react';
import { mockForecastData } from '~/mocks/mockForecastData';
import userEvent from '@testing-library/user-event';
import SearchBar from '../index';
import classes from '../SearchBar.module.scss';

const MockSearchBar = ({ setUnits }) => <SearchBar forecastData={mockForecastData} setUnits={setUnits} />;

describe('Date information', () => {
  it('should render month information correctly', () => {
    render(<MockSearchBar />);
    expect(screen.getByText(mockForecastData.localMonth)).toBeVisible();
  });

  it('should render day information correctly', () => {
    render(<MockSearchBar />);
    expect(screen.getByText(mockForecastData.localDay)).toBeVisible();
  });
});

describe('Unit buttons', () => {
  describe('display', () => {
    it('should render unit buttons', () => {
      render(<MockSearchBar />);
      expect(screen.getByText('C°')).toBeVisible();
      expect(screen.getByText('F°')).toBeVisible();
    });
  });

  describe('event', () => {
    it('should able to click unit buttons', async () => {
      const setUnits = jest.fn();
      render(<MockSearchBar setUnits={setUnits} />);
      const celsiusButton = screen.getByText('C°');
      const fahrenheitButton = screen.getByText('F°');
      userEvent.click(celsiusButton);
      expect(setUnits).toHaveBeenCalledWith('metric');
      userEvent.click(fahrenheitButton);
      expect(setUnits).toHaveBeenCalledWith('imperial');
    });
  });
});

describe('Input area', () => {
  it('should render input with placeholder="Search for city ..."', () => {
    render(<MockSearchBar />);
    expect(screen.getByPlaceholderText('Search for city ...')).toBeVisible();
  });

  it('should render interaction button', () => {
    render(<MockSearchBar />);
    expect(screen.getAllByRole('button').length).toBe(2);
  });
});
