//importa tudo disponível no express, é uma função pois tem um export default dentro do express
import express from 'express';


//instancia basica do servidor
const server = express();


server.get('/', (req,res) => {
    return res.send("Teste de response do GET")
});


export {server};