import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar.component.jsx';

describe('Navbar component tests', () => {

  beforeEach(() => {
    render(<SearchBar />);
  });

  it('test the magnifying glass icon is pressent', () => {
    const magnifyingGlassIcon = screen.getByTestId("magnifying-glass-icon");
    expect(magnifyingGlassIcon).toBeInTheDocument();
  });

  it('test the search video field is pressent', () => {
    const searchVideoField = screen.getByTestId("search-video-field");
    expect(searchVideoField).toBeInTheDocument();
  });

  it('test the close icon is pressent when click on the search video field', () => {
    const closeIcon = screen.getByTestId("close-icon");
    closeIcon.click();
    expect(closeIcon).toBeInTheDocument();
  });
  
});
