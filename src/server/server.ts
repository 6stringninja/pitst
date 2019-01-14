// lib/app.ts
import express = require('express');
import { request } from 'http';
import { ClientInfo } from '../shared/models/ClientInfo/ClientInfo';
import { PostWhoInput } from '../shared/models/Messages/PostWhoInput';
import { PostWhoResult } from '../shared/models/Messages/PostWhoResult';
import { ClientList } from './ClientList/ClientList';
import { serverConfig } from './ServerConfig';
import { ServerOs } from './ServerOs';
// Create a new express application instance
const app: express.Application = express();
const clientlist = new ClientList();
const clients: ClientInfo[] = [];
let index: number = 0;
for (index; index < 20; index++) {
  const cl = new ClientInfo(`fake ${index}`);
  clients.push(cl);
}
app.use(express.json());

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});
app.get('/sh', (req: express.Request, res: express.Response) => {
  res.send({ data: clients });
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
    clientlist.updateOrAdd(wi);

    res.send({ result: new PostWhoResult(new ServerOs().Ips()[0].ip) });
    const find = clientlist.clients.find(f => f.name === wi.clientInfo.name);
    console.log(find.api);
    if (find) {
 
      let adrs = `http://${(serverConfig.localMask ? serverConfig.localMask : find.ip)}:${wi.apiPort}/`;
     
     
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
  console.log(clientlist.clients);
  setTimeout(() => {
    dosomething();
  }, 5000);
}
dosomething();
