//! Web server -- це бекенд який сприймає http запити та повертає відповідь (json/html)
//! get запити перевіряютсься в гуглі (пишемо адресу хосту) решта -через програму постман
//! якщо запит приходить не з адреси хоста express, він йому відмовляє (CORS)

//* веб сервер можна створити і за допомогою вбудованого node module http
// import http from "http";

// const server = http.createServer((request, response) => {
//   const { url } = request;
//   if (url === "/") {
//     response.write("<h2> Home</h2>");
//   } else if (url === "/contacts") {
//     response.write("<h2>Contacts</h2>");
//   } else {
//     response.write("<h2>Not found</h2>");
//   }
//   response.end();
// });

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

//* СТВОРЕННЯ ВЕБ СЕРВЕРУ express  ///////////////////////////////////

//? 1 веб сервер який повертає розмітку /////////////////////////////////////

// import express, { request } from "express";

// const app = express(); //* змінна app це уже на факту наш веб сервер

// //*адреси серверу (якщо прийде get запит то виконати цей код)
// app.get("/", (request, response) => {
//   response.send("<h1>Home page</h1>");
// });

// app.get("/contacts", (request, response) => {
//   //   console.log(request.url); // /contacts
//   //   console.log(request.method); // get
//   response.send("<h1>Contact page</h1>");
// });

// app.listen(3000, () => console.log("Server running on 3000 PORT")); //*запуск серверу (від 999 до 10000)

//? 2 веб сервер який повертає JSON /////////////////////////////////////////

// import express from "express";

// import movies from "./movies.js";

// const app = express();

// app.set("json spaces", 4); /// налаштування json (res.send їх не враховує)

// app.get("/movies", (req, res) => {
//   //   res.send(movies); // сам перетворює на JSON
//   res.json(movies); // правильніше робити так, бо іноді приходить у відповідь null
// });

// app.listen(3000, () => console.log("Server running on 3000 PORT"));

//? middleware --проміжний обробник ( )

import express from "express";
import cors from "cors";
import movies from "./movies.js";

const app = express();

// //*middleware  (якщо не передаємо адресу спрацьовує для всіх запитів) (express шукає до першого співпадіння)
// app.use((req, res, next) => {
//   console.log("First middleware");
//   next(); // говорить express шукати далі
// });
// app.use((req, res, next) => {
//   console.log("Second middleware");
//   next(); // говорить express шукати далі
// });

// *CORS (дозволяються кросдоменні запити) або пакет npm i cors (у якому це все під капотом)
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });

//? 1 variant
// const corsMiddleware = cors();
// app.use(corsMiddleware);

//? 2 variant
app.use(cors());

//*якщо ваш бекенд віддає дані то краще починати зі слова api

app.get("/api/products", (req, res) => {
  res.json([]);
});

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

//*якщо з фронтенда приходить запит, а такої адреси немає, express повертає пусту розмітку, але нам потрібен об'єкт з помилкою (на фронті помилка знаходиться catch(err) {setErr(err.response.data.message)})

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: "Not found",
  });
});

app.listen(3000, () => console.log("Server running on 3000 PORT"));
