import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchTag from '../index';

const MockSearchTag = ({ value, onSearchChange, onSearchSubmit, onLocationClick }) => {
  return (
    <SearchTag
      value={value}
      onSearchChange={onSearchChange}
      onSearchSubmit={onSearchSubmit}
      onLocationClick={onLocationClick}
    />
  );
};

describe('button', () => {
  it('should render search button', () => {
    render(<SearchTag />);
    expect(screen.getByTitle('search')).toBeInTheDocument();
  });

  it('should render location button', () => {
    render(<SearchTag />);
    expect(screen.getByTitle('location')).toBeInTheDocument();
  });
});

describe('input', () => {
  it('should display input value correctly', () => {
    render(<SearchTag />);
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('');
    input.value = 'test';
    expect(input.value).toBe('test');
  });

  it('should display input value based on searchText correctly', () => {
    render(<MockSearchTag value="test" />);
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('test');
  });
});

describe('interaction', () => {
  it('should able to type in input', async () => {
    const onSearchChange = jest.fn();
    render(<MockSearchTag onSearchChange={onSearchChange} />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'test value');
    expect(input.value).toBe('test value');
  });

  it('should able to click search button', async () => {
    const onSearchSubmit = jest.fn();
    render(<MockSearchTag value="test" onSearchSubmit={onSearchSubmit} />);
    const button = screen.getByTitle('search');
    userEvent.click(button);
    expect(onSearchSubmit).toHaveBeenCalled();
  });

  it('should able to click location button', async () => {
    const onLocationClick = jest.fn();
    const onSearchSubmit = jest.fn();
    render(<MockSearchTag value="Hanoi" onLocationClick={onLocationClick} onSearchSubmit={onSearchSubmit} />);
    const button = screen.getByTitle('location');
    userEvent.click(button);
    expect(onLocationClick).toHaveBeenCalled();
    expect(onSearchSubmit).toHaveBeenCalled();
    expect(screen.getByRole('textbox').value).toBe('Hanoi');
  });
});
