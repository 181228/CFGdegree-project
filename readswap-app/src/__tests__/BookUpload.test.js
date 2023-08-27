import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import BookUploadForm from '../pages/Page_BookUpload/BookUploadForm';

test('displays success message when book is posted', async () => {
    render(<BookUploadForm />);

    const usernameInput = screen.getByLabelText('Username');
    const titleInput = screen.getByLabelText('Book Title');
    const authorInput = screen.getByLabelText('Book Author');
    const genreInput = screen.getByLabelText('Book Genre');
    const conditionInput = screen.getByLabelText('Book Condition');
    const trade_forInput = screen.getByLabelText('Trade For');
    const priceInput = screen.getByLabelText('Book Price');
    const imageInput = screen.getByLabelText('Book Image');

    fireEvent.change(usernameInput, { target: { value: 'aginsideout' } });
    fireEvent.change(titleInput, { target: { value: 'The Lovely Bones' } });
    fireEvent.change(authorInput, { target: { value: 'Alice Sebold' } });
    fireEvent.change(genreInput, { target: { value: 'Novel' } });
    fireEvent.change(conditionInput, { target: { value: 'Like new' } });
    fireEvent.change(trade_forInput, { target: { value: 'Other novel' } });
    fireEvent.change(priceInput, { target: { value: '9.99' } });
    fireEvent.change(imageInput, { target: { value: '20.jpg' } });

    fireEvent.click(screen.getByText('UPLOAD'));

    await waitFor(() => {
        expect(screen.getByText('Book posted!')).toBeInTheDocument();
    });

    // ASSERTIONS OUTSIDE OF WAITFOR
    expect(usernameInput.value).toBe('');
    expect(titleInput.value).toBe('');
    expect(authorInput.value).toBe('');
    expect(genreInput.value).toBe('');
    expect(conditionInput.value).toBe('');
    expect(trade_forInput.value).toBe('');
    expect(priceInput.value).toBe('');
    expect(imageInput.value).toBe('');
});
