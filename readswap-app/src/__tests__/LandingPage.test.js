import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from '../pages/Page_LandingPage/LandingPage';

test('displays book titles on landing page', async () => {
    // Mock the API response data with book listings
    const mockBookListings = [
        {
            id: 1,
            title: 'The Murder Game',
            author: 'Tom Hindle',
            genre: 'Thriller',
            image: '0.jpg'
        },
        {
            id: 2,
            title: '1984',
            author: 'George Orwell',
            genre: 'Dystopian',
            image: '1.jpg'
        },
        {
            id: 3,
            title: 'One of us is back: Exclusive Edition - One of Us is Lying',
            author: 'Karen M.McManus',
            genre: 'Young Adult',
            image: '2.jpg'
        }
    ];

    // Mock the fetch function to return the mockBookListings
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve(mockBookListings)
        })
    );

    // Render the LandingPage component
    render(<LandingPage />);

    // Wait for the book titles to appear
    const bookTitles = await Promise.all(
        mockBookListings.map(book => screen.findByText(book.title))
    );

    // Assert that the book titles are displayed
    bookTitles.forEach(title => {
        expect(title).toBeInTheDocument();
    });
});