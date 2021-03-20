import { render, screen } from '@testing-library/react';
import VideoCard from './VideoCard.component.jsx';

import videos from '../../data/videos.json';

it('test the video cards is returning an object', () => {
  render(
    videos.items.map((video) => (
        <VideoCard key={video.etag} video={video} />
      ))
    );
  const videoCard = screen.getAllByTestId("card-item");
  expect(typeof(videoCard) === "object").toBe(true);
});
