// lib/app.ts
import express = require('express');
import { request } from 'http';
import { ClientInfo } from '../shared/models/ClientInfo/ClientInfo';
import { PostWhoInput } from '../shared/models/Messages/PostWhoInput';
import { PostWhoResult } from '../shared/models/Messages/PostWhoResult';

import { serverConfig } from '../shared/ServerConfig';
import { ServerOs } from './ServerOs';
import { ClientList } from '../shared/ClientList/ClientList';
// Create a new express application instance
const app: express.Application = express();
const clientlist = new ClientList();
const clients: ClientInfo[] = [];
let index = 0;
for (index; index < 20; index++) {
  const cl = new ClientInfo(`fake ${index}`);
  clients.push(cl);
}
app.use(express.json());

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});
app.get('/api/sh', (req: express.Request, res: express.Response) => {
  res.send(clientlist);
});
app.get('/who', (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({
    ip: { data: new ServerOs().Ips()[0].ip, clients: clients.map(m => m.name) }
  });
});
app.post('/who', (req, res) => {
  const wi = req.body as PostWhoInput;
  if (wi.hashcode && wi.hashcode === serverConfig.securityHash) {
    console.log(wi.clientInfo.name);
    clientlist.updateOrAdd(wi);

    res.send({ result: new PostWhoResult(new ServerOs().Ips()[0].ip) });
    const find = clientlist.clients.find(f => f.name === wi.clientInfo.name);
    console.log(find.api);
    if (find) {
      const adrs = `http://${
        serverConfig.localMask ? serverConfig.localMask : find.ip
      }:${wi.apiPort}/`;
    }
  } else {
    console.log('bad hash');
  }
});
app.get('/clients', (req: express.Request, res: express.Response) => {
  console.log(clients);
  res.send(clients);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

export function dosomething() {
  const si = new ServerOs();
  console.log(clientlist.clients.map(c => c.name));
  setTimeout(() => {
    dosomething();
  }, 5000);
}
dosomething();
