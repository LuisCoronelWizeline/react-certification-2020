import { render, screen } from '@testing-library/react';
import Navbar from './Navbar.component';

describe('Navbar component tests', () => {

  beforeEach(() => {
    render(<Navbar />);
  });

  it('test the menu option is available in the navbar', () => {
    const menuOption = screen.getByTestId("menu-icon");
    expect(menuOption).toBeInTheDocument();
  });
  
  it('test the light option is rendering in the navbar', () => {
    const lightOption = screen.getByText(/Light/i);
    expect(lightOption).toBeInTheDocument();
  });
  
  it('test the dark option is rendering in the navbar', () => {
    const darkOption = screen.getByText(/Dark/i);
    expect(darkOption).toBeInTheDocument();
  });

  it('test the account option is available in the navbar', () => {
    const accountOption = screen.getByTestId("account-icon");
    expect(accountOption).toBeInTheDocument();
  });

});
