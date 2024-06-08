//? -------------- WORK WITH BOOK -------------

const books = require("./books"); //* import from book folder index.js

//? відносний шлях - ./books
//? абсолютний шлях - (__dirname + path)

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "read":
      const allBooks = await books.getAll();
      return console.log(allBooks);
    case "getById":
      const findBook = await books.getById(id);
      return console.log(findBook);
    case "add":
      const newBook = await books.addBook({ title, author });
      return console.log(newBook);
    case "updateById":
      const updateBook = await books.updateBookById(id, { title, author });
      console.log(updateBook);
    case "delete":
      const deleteBook = await books.deleteBookById(id);
      console.log(deleteBook);
  }
};

// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "e1Tpn_I3wBkLREY6wG0lb" });
// invokeAction({ action: "add", title: "Hello world", author: "Jhon C. McCrae" });
// invokeAction({ action: "add", title: "Hello world2", author: "Jhon Maclaren" });

//? при put запиті передаємо всі дані, навіть якщо не всі змінюютсья, бо вони потім втрачаються
// invokeAction({
//   action: "updateById",
//   id: "M9WoDSo__XvWDedmKvKo6",
//   title: "Supernatural",
//   author: "Din Vinchester",
// });
invokeAction({ action: "delete", id: "M9WoDSo__XvWDedmKvKo6" });
