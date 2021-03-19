import { render, screen } from '@testing-library/react';
import Navbar from './Navbar.component';

describe('Navbar component tests', () => {

  beforeEach(() => {
    render(<Navbar />);
  });

  it('test the search video option is available in the navbar', () => {
    const searchVideoOption = screen.getByTestId("search-icon");
    expect(searchVideoOption).toBeInTheDocument();
  });
  
  it('test the light option is rendering in the navbar', () => {
    const lightOption = screen.getByText(/Light/i);
    expect(lightOption).toBeInTheDocument();
  });
  
  it('test the dark option is rendering in the navbar', () => {
    const darkOption = screen.getByText(/Dark/i);
    expect(darkOption).toBeInTheDocument();
  });
});
