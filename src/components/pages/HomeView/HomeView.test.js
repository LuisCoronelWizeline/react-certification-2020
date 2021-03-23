import { render, screen } from '@testing-library/react';

import Navbar from '../Navbar/Navbar.component.jsx';
import Footer from '../Footer/Footer.component.jsx';
import Videos from '../Videos/Videos.component.jsx';

it('test the navbar component is rendering', () => {
  render(<Navbar />);
  const accountIcon = screen.getByTestId("account-icon");
  expect(accountIcon).toBeInTheDocument();
});

it('test the footer component is rendering', () => {
    render(<Footer />);
    const footerCopyright = screen.getByText(/© Luis Coronel/i);
    expect(footerCopyright).toBeInTheDocument();
  });

it('test the videos component is rendering', () => {
    render(<Videos />);
    const videoCards = screen.getAllByTestId("card-item");
    expect(typeof(videoCards) === "object").toBe(true);
});
