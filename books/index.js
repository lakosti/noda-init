//* МЕТОДИ РОБОТИ З ФАЙЛАМИ
//! якщо await поставити перед промісом, він поверне результат виконання промісу
//! append додає після останнього символу

const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path"); // краще нормалізує шлях (path під капотом перетворює буфер на звичайний файл)

// __dirname // абсолютний шлях до папки де знаходиться файл
const booksPath = path.join(__dirname, "books.json");

//! додаємо шлях до книг і зчитуємо їх з файлу (отримуємо)
const getAll = async () => {
  //*читаємо json як текст
  const data = await fs.readFile(booksPath, "utf-8");
  //* текст у форматі json тому парсимо
  return JSON.parse(data);
};

//! шукаємо книгу по id
const getById = async (id) => {
  // //? приводимо id до рядка,кругом де він використовуєтсья, якщо він написаний числом при використанні yargs
  // const bookId = String(id);

  //* зчитуємо всі книги і шукаємо по  айді
  const books = await getAll();
  const getBookById = books.find((item) => item.id === id);
  return getBookById || null; //* поверни результат або null
};

//! додаємо книгу
const addBook = async (book) => {
  //* отрмуємо всі книги щоб додати книгу в кінець
  const books = await getAll();
  const newBook = {
    id: nanoid(),
    ...book,
  };
  books.push(newBook);
  //*перезаписуємо всі книги і вказуємо шлях і об'єкт приводимо до рядка
  await fs.writeFile(booksPath, JSON.stringify(books, null, 2)); // null - символ заміни (тобто ніякі) // 2 - відступи
  return newBook;
};

//! оновляємо дані книги
const updateBookById = async (id, book) => {
  //* отрмуємо всі книги, і якщо така є, то перезаписуємо на нові дані
  const books = await getAll();
  const findIndex = books.findIndex((book) => book.id === id);
  if (findIndex === -1) {
    return null;
  }
  books[findIndex] = { id, ...book }; //записали нові дані в книгу
  await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
  return books[findIndex]; // повернули ці дані
};

//! видаляємо книгу
const deleteBookById = async (id) => {
  const books = await getAll();
  const findIndex = books.findIndex((book) => book.id === id);
  if (findIndex === -1) {
    return null;
  }
  const [result] = books.splice(findIndex, 1); // вирізає по індексу
  await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
  return result;
};

module.exports = {
  getAll,
  getById,
  addBook,
  updateBookById,
  deleteBookById,
};
