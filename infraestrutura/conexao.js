const mysql = require ('mysql');
const conexao = mysql.createConnection ({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'kvw%xtm?!4279596',
    database: 'agenda_petshop',
})

module.exports = conexao