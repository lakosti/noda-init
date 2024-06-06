// *ES 6 MODULE

import users from "./users.js";
console.log(users);
//*

// const date = new Date();

// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(`Today is ${days[date.getDay()]}`);

// console.log("Hello my friend");

//* Common JS module

// const users = require("./users.js");
// console.log(users);

// const { admins } = require("./users.js");
// console.log(admins);

// //* відразу можна викликати функцію //* можна вказати лише деректорію папки, файл по дефолту обереться індекс
// const currentMonth = require("./date").getCurrentMonth();
// console.log(currentMonth);

// //?
// const { getCurrentMonth } = require("./date");
// const currentMonth1 = getCurrentMonth();
// console.log(currentMonth1);

//? ---------------------- WORK - WITH - FILIES-----------------

//! 1 readFile

// const fs = require("fs"); // - це як імпорт //* якщо просто імпортуємо з fs - це колбек, якщо з fs/promises - це проміси
// import fs from "fs";
import fs from "fs/promises";
// const fs = require("fs").promises

//*callback
// fs.readFile("./file.txt", "utf8", (error, data) => {
//   console.log(error);
//   console.log(data);
// });

//*promise
// fs.readFile("./file.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//*найчастіше використовують асинхронні функції
const readFile = async () => {
  const data = await fs.readFile("./file.txt", "utf8");
  console.log(data);
  // console.log(data.toString()) -- приводить буфер  до рядка
};

readFile();

//! 2 addText
// const addText = async () => {
//   const result = await fs.appendFile("./file.txt", " Last text"); //* додає в кінець
//   const result1 = await fs.appendFile("./file.txt", "\nFirst text"); //* додає на початок

//   console.log(result);
//   console.log(result1);
// };

// addText();

//! 3 replaceText

const replaceText = async () => {
  const resut2 = await fs.writeFile("./file.txt", "Replace all");
  console.log(resut2);
};

replaceText();
