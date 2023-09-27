//importa tudo disponível no express, é uma função pois tem um export default dentro do express
import express from 'express';
import {router} from './routes';

//instancia basica do servidor
const server = express();


server.use(express.json());
server.use(router);


export {server};