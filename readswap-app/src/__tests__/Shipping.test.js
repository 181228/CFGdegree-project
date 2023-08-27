import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Shipping from '../pages/Shipping/Shipping';

test('displays error message for missing fields on form submission', async () => {
    render(<Shipping />, { wrapper: MemoryRouter });

    const submitButton = screen.getByText('Submit');

    fireEvent.click(submitButton);

    // FORESEEING ERROR DUE TO MISSING FIELDS
    const errorMessage = await screen.findByText('Please fill in all fields.');
    expect(errorMessage).toBeInTheDocument();
});
