import React from 'react';
import renderer from 'react-test-renderer';

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import VideoCard from '../components/VideoCard/VideoCard.component';
import videos from '../data/videos.json';

test('Renders without crashing', () => {
    shallow(<VideoCard />);
});
