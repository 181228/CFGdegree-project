import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Cart } from '../components/cart/Cart';

test('renders ShoppingCart page with Cart component', () => {
    render(
        <MemoryRouter>
            <Cart />
        </MemoryRouter>
    );
});