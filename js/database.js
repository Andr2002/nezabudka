const express = require('express');
//const res = require('express/lib/response');
const mysql = require("mysql");
const path = require('path');

const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "test",
    password: "кщще"
});

connection.connect(function(err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    } else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

app.get("/select", (request, response) => {
    let sql = "SELECT * FROM users";
    connection.query(sql, (err, result) => {
        if (err) throw err;
        //console.log(result);
        for (let i in result) {
            console.log(`Логин: ${result[i].login} \t Пароль: ${result[i].password}`);
        }
        response.send('<h2>success</h2>')
    });
});

app.get("/insert", (request, response) => {
    let data = {
        login: "l0fgfffdn",
        password: "passfdfdwdrd",
        date: "CURRENT_DATE"
    }
    let sql = "INSERT INTO users(`login`, `password`, `dateOfReg`)" + `VALUES('${data.login}', '${data.password}', ${data.date})`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        //console.log(result);
        response.send('<h1>insert success</h1>');
    });
});

app.listen("3000", () => {
    console.log("Server started on port 3000");
});