import React from 'react';
import { render, screen } from '@testing-library/react'; // Dodano screen

import AboutUs from '../pages/Page_AboutUs/AboutUs'; // Sprawdź, czy to jest prawidłowa ścieżka do pliku AboutUs.js

test('renders AboutUs component', () => {
    render(<AboutUs />);

    // Check that the text from the 'About Us' section exists in the component
    const aboutUsTitle = screen.getByText('About Us');
    expect(aboutUsTitle).toBeInTheDocument();
});
