import { render, screen } from '@testing-library/react';
import Navbar from './Navbar.component';

it('test the search video option is available in the navbar', () => {
  render(<Navbar />);
  const searchVideoOption = screen.getByText(/Search video .../i);
  expect(searchVideoOption).toBeInTheDocument();
});

it('test the light option is rendering in the navbar', () => {
  render(<Navbar />);
  const lightOption = screen.getByText(/Light/i);
  expect(lightOption).toBeInTheDocument();
});

it('test the dark option is rendering in the navbar', () => {
  render(<Navbar />);
  const darkOption = screen.getByText(/Dark/i);
  expect(darkOption).toBeInTheDocument();
});

