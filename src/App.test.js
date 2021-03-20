import { render, screen } from '@testing-library/react';
import App from './App';

it('test the app is rendering', () => {
  render(<App />);
  const accountIcon = screen.getByTestId("account-icon");
  expect(accountIcon).toBeInTheDocument();
});
