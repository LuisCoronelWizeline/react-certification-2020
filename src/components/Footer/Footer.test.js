import { render, screen } from '@testing-library/react';
import Footer from './Footer.component';

it('test the footer is rendering', () => {
  render(<Footer />);
  const footerCopyright = screen.getByText(/© Luis Coronel/i);
  expect(footerCopyright).toBeInTheDocument();
});
