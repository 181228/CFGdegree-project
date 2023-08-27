import React from 'react';
import { render, screen } from '@testing-library/react';
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart';

test('renders ShoppingCart page with Cart component', () => {
    render(<ShoppingCart />);

    // ENSURING THE TEXT ON THE PAGE IS RENDERED
    const cartComponentText = screen.getByText('Your Shopping Cart is Empty');
    expect(cartComponentText).toBeInTheDocument();
});
