import { render, screen } from '@testing-library/react';
import Navbar from './Navbar.component';

it('renders the search video option in the navbar', () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/Search video .../i);
  expect(linkElement).toBeInTheDocument();
});

it('renders the light option in the navbar', () => {
    render(<Navbar />);
    const linkElement = screen.getByText(/Light/i);
    expect(linkElement).toBeInTheDocument();
  });

it('renders the dark option in the navbar', () => {
render(<Navbar />);
const linkElement = screen.getByText(/Dark/i);
expect(linkElement).toBeInTheDocument();
});
  