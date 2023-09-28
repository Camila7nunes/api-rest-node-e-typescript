//importando server que foi exportado no Server.ts
import {server} from './server/Server';

//"escuta" o servidor, passando a porta que vai rodar a API node
server.listen(process.env.PORT || 3333, () => {
    console.log(`App rodando na porta ${process.env.PORT || 3333}`);
});