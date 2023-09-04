import 'isomorphic-fetch';
import {apiBaseConnection} from "/manual_qa_test/js/api/api-get-json";


test('Check id connection status to endpoint [Random 200]', async () => {
    let result = await apiBaseConnection(
        'https://api.chucknorris.io/jokes',
        'random',
        ''
    );

    expect(result.status).toBe(200);
});

test('Check id connection status to endpoint [Random Categories 200]', async () => {
    let result = await apiBaseConnection(
        'https://api.chucknorris.io/jokes',
        'random',
        'categories=Animal'
    );

    expect(result.status).toBe(200);
});

test('Check id connection status to endpoint [Searched 200]', async () => {
    let result = await apiBaseConnection(
        'https://api.chucknorris.io/jokes',
        'search',
        'query=Chuck Norris'
    );

    expect(result.status).toBe(200);
});
