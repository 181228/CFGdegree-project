import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import BookDetails from '../pages/Page_BookDetails/BookDetails';

test('renders the BookDetails component', () => {
    // CHECKING IF THE DATA RENDERS CORRECTLY (NO STRUCTURAL ISSUES)
    render(
        <MemoryRouter initialEntries={['/book/1']}>
        <Route path="/book/:id" component={BookDetails} />
        </MemoryRouter>
    );
});
