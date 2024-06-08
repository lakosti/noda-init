//? -------------- WORK WITH BOOK -------------

//! process.argv -- глобальна змінна шо містить дані які написали, це масив, де міститься шлях до ноди, файлу, та команди (слова) які людина написала

const books = require("./books"); //* import from book folder index.js
const { program } = require("commander");

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
    default:
      return console.log("Unknown action");
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
// invokeAction({ action: "delete", id: "M9WoDSo__XvWDedmKvKo6" });

//! консольний дадаток

// //*node app --action read
// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1]; //* знаходимо наступний елемент
//   invokeAction({ action });
// }

//* node app -a getById -i 1
//* node app -a read

program
  .option("-a, --action, <type>")
  .option("-i, --id, <type>")
  .option("-t, --title, <type>")
  .option("-at, --author, <type>");

program.parse(); //*зчитує

const options = program.opts(); //* повертає те шо написали в консоль
invokeAction(options);
