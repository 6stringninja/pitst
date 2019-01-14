// lib/app.ts
import express = require('express');
import { ClientInfo } from '../shared/models/ClientInfo/ClientInfo';
import os from 'os';
import { ClientInfoIpMac } from '../shared/models/ClientInfo/ClientInfoIpMac';
export class ServerOs{
   Ips(): ClientInfoIpMac[] {
    const cip: ClientInfoIpMac[] = [];
    const nit = os.networkInterfaces();
    Object.keys(nit)
      .map((f) => nit[f])
      .forEach((ff) => {
        const filtered = ff.filter((tr) => tr.internal === false && tr.family === 'IPv4');
        if (filtered && filtered.length > 0) {
          const itm = filtered[0];
          if (cip.filter((ft) => ft.ip === itm.address).length === 0) {
            cip.push(new ClientInfoIpMac(filtered[0].address, filtered[0].mac));
          }
        }
      });
    return cip;
  }
}
// Create a new express application instance
const app: express.Application = express();
const clients: ClientInfo[] = [];
let index: number = 0;
for (index; index < 20; index++) {
  const cl = new ClientInfo(`fake ${index}`);
  clients.push(cl);
}
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});
app.get('/sh', (req: express.Request, res: express.Response) => {
  res.send({ data: clients });
});
app.get('/who', (req: express.Request, res: express.Response) => {

  res.send({ ip: {data:(new ServerOs().Ips()[0].ip)} });
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
console.log(si.Ips());
  setTimeout(() => {
    dosomething();
  }, 5000);
}
dosomething();
