let myLibrary = [
  {
    title: "Python Crash Course",
    author: "Eric Matthes",
    pages: 380,
    read: false,
  },
  {
    title: "JavaScript: The Definitive Guide",
    author: "David Flanagan",
    pages: 1100,
    read: false,
  },
  {
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C.Martin",
    pages: 250,
    read: true,
  },
];

function book(title, author, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  event.preventDefault();
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;
  const input3 = document.getElementById("input3").value;
  const input4 = document.querySelector('input[name="input4"]:checked').value;
  let newBook = {
    title: input1,
    author: input2,
    pages: input3,
    read: input4,
  };
  myLibrary = [...myLibrary, newBook];

  displayBooks();
  dialog.style.display = "none";
}

function displayBooks() {
  const tableBody = document
    .getElementById("booksTable")
    .getElementsByTagName("tbody")[0];
  tableBody.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const newRow = tableBody.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteRow(index);
    deleteButton.className = "delete-button";
    const actionCell = document.createElement("td");
    actionCell.appendChild(deleteButton);
    newRow.appendChild(actionCell);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "myCheckbox";
    cell5.appendChild(checkbox);

    if (book.read === true) {
      checkbox.checked = true;
    } else {
    }

    cell1.innerHTML = book.title;
    cell2.innerHTML = book.author;
    cell3.innerHTML = book.pages;
    cell4.innerHTML = book.read;
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        cell4.textContent = "true";
      } else {
        cell4.textContent = "false";
      }
    });
  });
  if (tableBody.children.length === 0) {
    document.getElementById("booksTable").style.display = "none";
  }
}
displayBooks();

const dialog = document.getElementById("myDialog");
const openDialogBtn = document.getElementById("openDialog");
const closeDialogBtn = document.getElementById("closeDialog");

// Open the dialog when the button is clicked
openDialogBtn.onclick = function () {
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("input3").value = "";
  dialog.style.display = "block";
};

// Close the dialog when the close button is clicked
closeDialogBtn.onclick = function () {
  dialog.style.display = "none";
};

// Close the dialog when clicking outside of the dialog content
window.onclick = function (event) {
  if (event.target === dialog) {
    dialog.style.display = "none";
  }
};

function deleteRow(index) {
  myLibrary.splice(index, 1); // Remove the object from the array
  displayBooks(); // Refresh the table display
}
