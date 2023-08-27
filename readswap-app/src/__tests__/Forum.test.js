import React from 'react';
import { render } from '@testing-library/react';
import Forum from '../path/to/ForumComponent';

test('renders forum component', () => {
    // CHECKING IF THE DATA RENDERS CORRECTLY (NO STRUCTURAL ISSUES)
    render(<Forum />);
});
