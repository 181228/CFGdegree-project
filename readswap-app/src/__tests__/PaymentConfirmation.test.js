import React from 'react';
import { render, screen } from '@testing-library/react';
import PaymentConfirmation from '../pages/Page_PaymentConfirmation/PaymentConfirmation';

test('displays payment processing message', () => {
    render(<PaymentConfirmation />);

    const processingMessage = screen.getByText('Processing payment...');
    expect(processingMessage).toBeInTheDocument();
});
