const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function addBooktoLibrary(book) {
    myLibrary.push(book);
}
// Dialog's Elements
const dialog = document.querySelector("dialog");
const addNewBook = document.getElementById("add-new-book");
const submitBook = document.getElementById("submit-btn");
const bookForm = document.getElementById("book-form");
const errorMessage = document.getElementById("error-message");
const closeBTN = document.getElementById("close-btn");

// Open the Dialog Box to add new Book
addNewBook.addEventListener("click", () => {
    dialog.showModal();
});
// Submit & close the Dialog Box
submitBook.addEventListener("click", (e) => {
    e.preventDefault();
    // Form's Elements
    const newTitle = document.getElementById("title").value.trim();
    const newAuthor = document.getElementById("author").value.trim();
    const newPages = document.getElementById("pages").value.trim();
    const newReadingStatus = document.getElementById("reading-status").value.trim();

    if (!newTitle || !newAuthor || !newPages || !newReadingStatus) {
        errorMessage.textContent = "Please fill in all fields.";
        return;
    }

    errorMessage.textContent = "";

    let newBook = new Book(newTitle, newAuthor, newPages, newReadingStatus);
    addBooktoLibrary(newBook);
    displayBook(myLibrary.length - 1);
    bookForm.reset();
    dialog.close();
});
closeBTN.addEventListener("click", ()=> {
    dialog.close();
});

function displayBook(i) {
    const booksCollection = document.getElementById("books-collection");

    let newCreatedBook = document.createElement("div");
    newCreatedBook.className = "booksContainer";
    let title = document.createElement("p");
    title.textContent = `Title: ${myLibrary[i].title}`;
    let author = document.createElement("p");
    author.textContent = `Author: ${myLibrary[i].author}`;
    let pages = document.createElement("p");
    pages.textContent = `No. of Pages: ${myLibrary[i].pages}`;
    let readingStatus = document.createElement("p");
    readingStatus.textContent = `Reading Status: ${myLibrary[i].read}`;

    newCreatedBook.appendChild(title);
    newCreatedBook.appendChild(author);
    newCreatedBook.appendChild(pages);
    newCreatedBook.appendChild(readingStatus);
    booksCollection.appendChild(newCreatedBook);
}

// Example book to test display
addBooktoLibrary(new Book("Book-1", "Author-1", 1200, "read"));
displayBook(myLibrary.length - 1);