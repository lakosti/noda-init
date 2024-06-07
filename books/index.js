//* МЕТОДИ РОБОТИ З ФАЙЛАМИ

const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path"); // краще нормалізує шлях (path під капотом перетворює буфер на звичайний файл)

// __dirname // абсолютний шлях до папки де знаходиться файл
const booksPath = path.join(__dirname, "books.json");

const getAll = async () => {
  //*читаємо json як текст
  const data = await fs.readFile(booksPath, "utf-8");
  //* текст у форматі json тому парсимо
  return JSON.parse(data);
};

const getById = async (id) => {
  //* зчитуємо всі книги і шукаємо по  айді
  const books = await getAll();
  const getBookById = books.find((item) => item.id === id);
  return getBookById || null; //* поверни результат або null
};

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

module.exports = {
  getAll,
  getById,
  addBook,
};
