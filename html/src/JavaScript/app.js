const storedData = localStorage.getItem('booksData');

if (storedData) {
    const books = JSON.parse(storedData);
    const tableBody = document.querySelector('.book-table-body');

    books.forEach(book => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.id}</td>
            <td>${book.bookName}</td>
            <td>${book.authorName}</td>
            <td>${book.publisher}</td>
            <td>${book.pages}</td>
            <td>${book.copies}</td>
        `;

        tableBody.appendChild(row);
    });
} else {
    console.log('Данные не найдены в localStorage');
}

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const publisher = document.getElementById('publisher').value;
    const pages = document.getElementById('pages').value;
    const copies = document.getElementById('copies').value;

    const newBook = {
        id: Date.now(),
        bookName,
        authorName,
        publisher,
        pages,
        copies
    };

    let books = JSON.parse(localStorage.getItem('booksData')) || [];
    books.push(newBook);
    localStorage.setItem('booksData', JSON.stringify(books));

    // Добавляем новую книгу в таблицу
    const tableBody = document.querySelector('.book-table-body');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${newBook.id}</td>
        <td>${newBook.bookName}</td>
        <td>${newBook.authorName}</td>
        <td>${newBook.publisher}</td>
        <td>${newBook.pages}</td>
        <td>${newBook.copies}</td>
    `;
    tableBody.appendChild(row);
    document.getElementById('myDialog').close();
}
