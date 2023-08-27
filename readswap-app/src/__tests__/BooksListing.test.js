import React from 'react';
import { render } from '@testing-library/react';
import BookListing from '../pages/Page_BooksListing/BooksListing';

test('renders the BookListing component', () => {
    // CHECKING IF THE DATA RENDERS CORRECTLY (NO STRUCTURAL ISSUES)
    render(<BookListing />);
});
