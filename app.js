//? -------------- WORK WITH BOOK -------------

const books = require("./books");

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
  }
};

// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "e1Tpn_I3wBkLREY6wG0lb" });
// invokeAction({ action: "add", title: "Hello world", author: "Jhon C. McCrae" });
invokeAction({ action: "add", title: "Hello world2", author: "Jhon Maclaren" });
