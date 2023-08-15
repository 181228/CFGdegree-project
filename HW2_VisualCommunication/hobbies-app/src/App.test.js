import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Team Introduction title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Team Introduction/i);
  expect(titleElement).toBeInTheDocument();
})
