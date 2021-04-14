import { render, screen } from '@testing-library/react';
import VideoCard from './VideoCard.component.jsx';
import UserState from '../../context/user/UserState';
import VideosState from '../../context/videos/VideosState';
import HomeView from '../../components/pages/HomeView/HomeView.component.jsx';

import videos from '../../data/videos.json';

it('test the video cards is returning an object', () => {
  render(
    videos.items.map((video) => (
        <UserState><VideosState><VideoCard video={video} /></VideosState></UserState>
      ))
    );
  const videoCard = screen.getAllByTestId("card-item");
  expect(typeof(videoCard) === "object").toBe(true);
});
