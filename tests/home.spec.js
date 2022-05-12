// const React = require('react');
// const { rest } = require('msw');
// const { setupServer } = require('msw/node');
// const { render, fireEvent, waitFor, screen } = require('@testing-library/react');
// const { expect } = require('chai');
// // require('@testing-library/jest-dom');
// const Home = require('../client/components/Home');

import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../client/components/Home'
import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();

fetchMock.mockResponseOnce(JSON.stringify({return_string: 'muyvd'}))

const server = setupServer(
  rest.post('/test', (req, res, ctx) => {
    return res(ctx.json({return_string: ''}));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('loads and displays greeting', async () => {
    render(<Home />);
    fireEvent.click(screen.getByText('Submit'));
    await waitFor(() => screen.getByTestId('result'));
  
    expect(screen.getByTestId('result')).toHaveTextContent(JSON.stringify({return_string: 'muyvd'}));
});

