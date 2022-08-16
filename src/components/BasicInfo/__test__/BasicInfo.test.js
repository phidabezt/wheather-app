import { screen, render } from '@testing-library/react';
import { mockTransformedForecastData } from '~/__fixtures__/mockData';
import BasicInfo from '..';

describe('Basic Info', () => {
  it('should render properly', () => {
    const props = { forecastData: mockTransformedForecastData, loading: false };
    const { container } = render(<BasicInfo {...props} />);

    expect(container.getElementsByClassName('basic-info__degree').length).toBe(1);
    expect(screen.getByText(mockTransformedForecastData.temp)).toBeInTheDocument();
    expect(container.getElementsByClassName('basic-info__content').length).toBe(1);
    expect(screen.getByText(mockTransformedForecastData.description)).toBeInTheDocument();
  });

  it('should show skeleton when loading', async () => {
    const props = { forecastData: mockTransformedForecastData, loading: true };

    render(<BasicInfo {...props} />);
    expect(screen.getAllByLabelText('skeleton-loading')).toBeTruthy();
  });
});
