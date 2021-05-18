import React from 'react';
import Favourites from '../components/Favourites';
// import renderer from "react-test-renderer"
import {render} from '@testing-library/react';

// Testing if the Favourites Component renders correctly.
test("Correct Render", () => {
    const tree = render(<Favourites />)
    expect(tree).toMatchSnapshot();
    const functionality = <Favourites />;
    expect(functionality).toBeDefined();
})