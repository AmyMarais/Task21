import React from 'react';
import SearchBar from '../components/Searchbar';
// import renderer from "react-test-renderer"
import {render} from '@testing-library/react';

// Testing if the SearchBar Component renders correctly
test("Correct Render", () => {
    const tree = render(<SearchBar />)
    expect(tree).toMatchSnapshot();
})

test('Check API correct and works', async () => {
    // Constant API Key variable
    // await the fetch method and assign it to a variable so we can test it. 
    const postToServer = await fetch(`https://itunes.apple.com/search?term=adele&media=all`, {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
            search:"adele",
            option:"all"
        })
    })
    expect(postToServer).toBeDefined();
    // awaits the received object data from above and converts it to a string. Then it assigns it to a variable that we can test.
    const convertJSON = await postToServer.json();
    // Testing to see if the data is correct or not. Decided to try out another matcher called toBeTruthy which determines if the data is True or not. If not it will fail the test. 
    expect(convertJSON).toBeTruthy();
})