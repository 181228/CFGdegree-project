import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Login from '../pages/Page_Login/Login';

// MOCK USENAVIGATE HOOK
jest.mock('react-router-dom', () => {
    return {
        ...jest.requireActual('react-router-dom'),
        useNavigate: jest.fn(),
    };
});

test('performs login on form submission and redirects on success', async () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(<Login />, { wrapper: MemoryRouter });
    
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: 'Login' });

    fireEvent.change(usernameInput, { target: { value: 'aginsideout' } });
    fireEvent.change(passwordInput, { target: { value: '0404789' } });

    fireEvent.click(submitButton);

    // Wait for fetch operation to complete an check if redirection path is ends with `/`
    await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith('/');
    });
});
