import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import PaymentConfirmation from '../pages/Page_PaymentConfirmation/PaymentConfirmation';

test('displays "Processing payment..." message during payment processing', async () => {
    render(<PaymentConfirmation />);
    
    const processingMessage = screen.getByText('Processing payment...');
    expect(processingMessage).toBeInTheDocument();
});

test('displays success message after payment processing', async () => {
    render(<PaymentConfirmation />);
    
    // WAIT FOR PAYMENT PROCESSING TO FINISH
    await waitFor(() => {
        const successMessage = screen.getByText('Awesome! Payment received. Package on the way! 📦');
        expect(successMessage).toBeInTheDocument();
    });
});