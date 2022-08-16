import { render, screen } from '@testing-library/react';
import { mockSunInfoList } from '~/__fixtures__/mockData';
import SunInfo from '..';

describe('Basic Info', () => {
  it('should render properly', () => {
    const props = { sunInfoList: mockSunInfoList, loading: false };
    render(<SunInfo {...props} />);
    const sunRise = mockSunInfoList[0].value;
    const sunSet = mockSunInfoList[1].value;
    expect(screen.getByText(sunRise)).toBeInTheDocument();
    expect(screen.getByText(sunSet)).toBeInTheDocument();
  });

  it('should show skeleton when loading', async () => {
    const props = { sunInfoList: mockSunInfoList, loading: true };

    render(<SunInfo {...props} />);
    expect(screen.getAllByLabelText('skeleton-loading')).toBeTruthy();
  });
});
