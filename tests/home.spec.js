import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../client/components/Home'
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('Home component', () => {
	beforeEach(() => {
		render(<Home />);
	});

	describe('when the form is filled', () => {
		beforeEach(() => {
			fireEvent.change(screen.getByLabelText('Input'), { target: { value: 'iamyourlyftdriver' } });
		});

		describe('and the request is successful', () => {
			beforeEach(() => {
				fetchMock.mockResponseOnce(JSON.stringify({ return_string: 'muyvd' }));
				fireEvent.click(screen.getByText('Submit'));
			});
			it('displays the JSON response', async () => {
				await waitFor(() => screen.getByTestId('result'));
				expect(screen.getByTestId('result')).toHaveTextContent(JSON.stringify({ return_string: 'muyvd' }));
			});
		});

		describe('and the request is failed', () => {
			beforeEach(() => {
				fetchMock.mockResponseOnce(JSON.stringify({ message: 'test error' }), { status: 500 });
				fireEvent.click(screen.getByText('Submit'));
			});
			it('displays the error message', async () => {
				await waitFor(() => screen.getByTestId('error'));
				expect(screen.getByTestId('error')).toHaveTextContent('test error');
			});
		});
	});
});


