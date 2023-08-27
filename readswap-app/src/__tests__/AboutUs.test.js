import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from '../pages/Page_AboutUs/AboutUs';

test('renders the AboutUs component', () => {
    render(<AboutUs />);
    
    // SEARCHING FOR TEXT WITHIN ELEMENT TO CONFIRM RENDERING
    const aboutUsElement = screen.getByText(/About Us/i);
    expect(aboutUsElement).toBeInTheDocument();
});
