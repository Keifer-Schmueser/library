let myLibrary = [];
const titleField = document.getElementById('Title');
const authorField = document.getElementById('Author');
const pagesField = document.getElementById('Pages');
const readField = document.getElementById('Read');
const submitBtn = document.getElementById('submitBtn');
const addBookForm = document.getElementById('addBookForm');
const addBookBtn = document.getElementById('addBookBtn');
const container = document.getElementById('container');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addToLibrary() {
  let title = titleField.value;
  let author = authorField.value;
  let pages = pagesField.value;
  let read = readField.value;
  myLibrary.push({ title: title, author: author, pages: pages, read: read });
}

function displayBooks(book) {
  let addTitle = document.createElement('div');
  let addAuthor = document.createElement('div');
  let addPages = document.createElement('div');
  let addRead = document.createElement('div');
  let addDelete = document.createElement('button');
  let addStatus = document.createElement('button');

  addTitle.innerText = `${book.title}`;
  addAuthor.innerText = `${book.author}`;
  addPages.innerText = `${book.pages}`;
  addRead.innerText = `${book.read}`;
  addDelete.innerText = 'Delete';
  addDelete.addEventListener('click', event => {
    container.removeChild(addTitle);
    container.removeChild(addAuthor);
    container.removeChild(addPages);
    container.removeChild(addRead);
    container.removeChild(addStatus);
    container.removeChild(addDelete);
  });

  addStatus.innerText = 'Toggle read';
  addStatus.addEventListener('click', event => {
    if (addRead.innerText == 'Yes') {
      console.log('No');
      addRead.innerText = 'No';
    } else if (addRead.innerText == 'No') {
      addRead.innerText = 'Yes';
      console.log('Yes');
    }
  });

  container.appendChild(addTitle);
  container.appendChild(addAuthor);
  container.appendChild(addPages);
  container.appendChild(addRead);
  container.appendChild(addDelete);
  container.appendChild(addStatus);
}

addBookBtn.addEventListener('click', event => {
  addBookForm.style.display = 'flex';
});

submitBtn.addEventListener('click', event => {
  addToLibrary();
  let books = myLibrary[myLibrary.length - 1];
  displayBooks(books);
  titleField.value = '';
  authorField.value = '';
  pagesField.value = '';
  readField.value = '';
  addBookForm.style.display = 'none';
});
