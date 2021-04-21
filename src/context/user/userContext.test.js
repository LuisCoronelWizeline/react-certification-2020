import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import UserState from '../../context/user/UserState';
import VideosState from '../../context/videos/VideosState';
import HomeView from '../../components/pages/HomeView/HomeView.component.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

it('test the user context is changing when click the dark mode', () => {
    render(<VideosState><UserState><Router><HomeView /></Router></UserState></VideosState>);

    const themeSwitch = screen.getByTestId('theme-switch');
    expect(themeSwitch).toBeInTheDocument();
    userEvent.click(screen.getByTestId('theme-switch'));
    
    expect(screen.getByTestId('home-background')).toHaveStyle('background-color: black')
    // screen.debug();
});
