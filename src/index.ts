//importando server que foi exportado no Server.ts
import {server} from './server/Server';

//"escuta" o servidor, passando a porta que vai rodar a API node
server.listen(3333, () => console.log('App rodando!'));