import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Register from '../pages/Page_Register/Register';

test('displays error message for underage user', async () => {
    render(<Register />);

    const firstNameInput = screen.getByPlaceholderText('First name');
    const lastNameInput = screen.getByPlaceholderText('Last name');
    const usernameInput = screen.getByPlaceholderText('Username');
    const emailInput = screen.getByPlaceholderText('Email');
    const cityInput = screen.getByPlaceholderText('City');
    const passwordInput = screen.getByPlaceholderText('Password');
    const yearOfBirthInput = screen.getByPlaceholderText('Year of birth');
    const submitButtons = screen.getAllByText('Register');

    const submitButton = submitButtons[0];

    fireEvent.change(firstNameInput, { target: { value: 'Sophie' } });
    fireEvent.change(lastNameInput, { target: { value: 'Queens' } });
    fireEvent.change(usernameInput, { target: { value: 'squeen' } });
    fireEvent.change(emailInput, { target: { value: 'squeens@email.com' } });
    fireEvent.change(cityInput, { target: { value: 'Birmingham' } });
    fireEvent.change(passwordInput, { target: { value: 'sTrOnGpAsSwOrD0' } });
    fireEvent.change(yearOfBirthInput, { target: { value: '2014' } });

    fireEvent.click(submitButton);

    // FORESEEING THE ERROR FOR UNDERAGE USER
    const errorMessage = await screen.findByText('You are underage and cannot register.');
    expect(errorMessage).toBeInTheDocument();
});