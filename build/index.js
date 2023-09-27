"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importando server que foi exportado no Server.ts
const Server_1 = require("./server/Server");
//"escuta" o servidor, passando a porta que vai rodar a API node
Server_1.server.listen(process.env.PORT || 3333, () => {
    console.log(`App rodando na porta ${process.env.PORT || 3333}`);
});
