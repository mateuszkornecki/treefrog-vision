import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const toggleButton = screen.getByText(/bouncing/);
  expect(toggleButton).toBeInTheDocument();
});
