import React from 'react';
import { render } from '@testing-library/react';
import Forum from '../pages/Page_Forum/Forum';

test('renders forum component', () => {
    // CHECKING IF THE DATA RENDERS CORRECTLY (NO STRUCTURAL ISSUES)
    render(<Forum />);
});
