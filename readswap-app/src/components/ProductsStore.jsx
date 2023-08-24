function fetchBooks() {
    return fetch('http://localhost:3000/api/books')
        .then(response => response.json())
        .then(data => {
            console.log("Fetched data:", data);
            return data.map(book => ({
                id: book.id,
                title: book.title,
                price: book.price,
                image: `http://localhost:3000/CoverImages/${book.image}`
            }));
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            return [];
        });
}

async function getProductsArray() {
    const productArray = await fetchBooks();
    return productArray;
}

export { getProductsArray };
