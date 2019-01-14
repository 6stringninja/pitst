"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
const express = require("express");
const ClientInfo_1 = require("../shared/models/ClientInfo/ClientInfo");
const PostWhoResult_1 = require("../shared/models/Messages/PostWhoResult");
const ServerConfig_1 = require("../shared/ServerConfig");
const ServerOs_1 = require("./ServerOs");
const ClientList_1 = require("../shared/ClientList/ClientList");
// Create a new express application instance
const app = express();
const clientlist = new ClientList_1.ClientList();
const clients = [];
let index = 0;
for (index; index < 20; index++) {
    const cl = new ClientInfo_1.ClientInfo(`fake ${index}`);
    clients.push(cl);
}
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/api/sh', (req, res) => {
    res.send(clientlist);
});
app.get('/who', (req, res) => {
    console.log(req);
    res.send({
        ip: { data: new ServerOs_1.ServerOs().Ips()[0].ip, clients: clients.map(m => m.name) }
    });
});
app.post('/who', (req, res) => {
    const wi = req.body;
    if (wi.hashcode && wi.hashcode === ServerConfig_1.serverConfig.securityHash) {
        console.log(wi.clientInfo.name);
        clientlist.updateOrAdd(wi);
        res.send({ result: new PostWhoResult_1.PostWhoResult(new ServerOs_1.ServerOs().Ips()[0].ip) });
        const find = clientlist.clients.find(f => f.name === wi.clientInfo.name);
        console.log(find.api);
        if (find) {
            const adrs = `http://${ServerConfig_1.serverConfig.localMask ? ServerConfig_1.serverConfig.localMask : find.ip}:${wi.apiPort}/`;
        }
    }
    else {
        console.log('bad hash');
    }
});
app.get('/clients', (req, res) => {
    console.log(clients);
    res.send(clients);
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
function dosomething() {
    const si = new ServerOs_1.ServerOs();
    console.log(clientlist.clients.map(c => c.name));
    setTimeout(() => {
        dosomething();
    }, 5000);
}
exports.dosomething = dosomething;
dosomething();
//# sourceMappingURL=server.js.map