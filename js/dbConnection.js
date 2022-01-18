const express = require('express');
const mysql = require('mysql');
const port = process.env.port || 3000;

//создание соединения
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "test",
    password: "кщще"
});

const app = express();
app.use(express.static(__dirname.slice(0, -2))); //  для того, чтобы отображались стили и т.д.

// app.use((request, response) => {
//     response.type('text/plain');
//     response.status(404);
//     response.send('404 - не найдено');
// });

connection.connect(function(err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    } else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

//отправка файла
app.get('/andrey', (request, response) => {
    response.sendFile(__dirname.slice(0, -2) + 'user.html');
});

//запуск сервера на порт 3000
app.listen(port, () => {
    console.log("Server started on port 3000");
});