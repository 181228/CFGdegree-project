import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PaymentGateway from '../pages/Page_PaymentGateway/PaymentGateway';

test('submits payment form and redirects to /confirmation', () => {
    // Mock the useNavigate hook
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockNavigate,
    }));

    render(<PaymentGateway />, { wrapper: MemoryRouter });

    const nameInput = screen.getByPlaceholderText('Jack Allen');
    const cardNumberInput = screen.getByPlaceholderText('1234 5678 9012 3456');
    const expiryDateInput = screen.getByPlaceholderText('MM/YY');
    const cvvInput = screen.getByPlaceholderText('123');
    const submitButton = screen.getByText('SUBMIT');

    fireEvent.change(nameInput, { target: { value: 'Jack Allen' } });
    fireEvent.change(cardNumberInput, { target: { value: '1234567890123456' } });
    fireEvent.change(expiryDateInput, { target: { value: '12/23' } });
    fireEvent.change(cvvInput, { target: { value: '123' } });

    fireEvent.click(submitButton);

    // Check if the useNavigate function was called with the correct path
    expect(mockNavigate).toHaveBeenCalledWith('/confirmation');
});