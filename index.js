// const date = new Date();

// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(`Today is ${days[date.getDay()]}`);

// console.log("Hello my friend");

//* Common JS module

const users = require("./users.js");
console.log(users);

const { admins } = require("./users.js");
console.log(admins);

//* відразу можна викликати функцію //* можна вказати лише деректорію папки, файл по дефолту обереться індекс
const currentMonth = require("./date").getCurrentMonth();
console.log(currentMonth);

//?
const { getCurrentMonth } = require("./date");
const currentMonth1 = getCurrentMonth();
console.log(currentMonth1);
