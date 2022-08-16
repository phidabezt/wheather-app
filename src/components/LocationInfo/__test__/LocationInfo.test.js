import { screen, render } from '@testing-library/react';
import { mockTransformedForecastData } from '~/__fixtures__/mockData';
import LocationInfo from '..';

describe('Location Info', () => {
  it('should render properly', () => {
    const props = { forecastData: mockTransformedForecastData, loading: false };
    const { container } = render(<LocationInfo {...props} />);
    expect(screen.getByText(mockTransformedForecastData.localName)).toBeInTheDocument();
    expect(screen.getByText(mockTransformedForecastData.localTime)).toBeInTheDocument();
  });

  it('should show skeleton when loading', async () => {
    const props = { forecastData: mockTransformedForecastData, loading: true };

    render(<LocationInfo {...props} />);
    expect(screen.getAllByLabelText('skeleton-loading')).toBeTruthy();
  });
});
