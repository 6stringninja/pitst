import { ClientInfoBuilder } from './clientinfobuilder';
import { ClientInfoBuilderService } from './clientinfobuilder/ClientInfoBuilderService';
import { PiMonitorFetchService } from './PiMonitorFetch/PiMonitorFetchService';
import { PiMonitorFetchTest } from './PiMonitorFetch/PiMonitorFetchTest';

import express = require('express');
import { PostWhoInput } from '../shared/models/Messages/PostWhoInput';
import { PiStat } from '../shared/models/PiStat';
import { ClientConfig } from './ClientConfig';
import { timingSafeEqual } from 'crypto';
import { PostWho } from './PostWho';
const app: express.Application = express();

export class ApplicationClient {
  app: express.Application = express();
  cb: ClientInfoBuilder;
  inj: ClientInfoBuilderService;
  pfs: PiMonitorFetchService;
  pistat: PiStat;
  pw: PostWho;
  constructor(public config = new ClientConfig()) {
    this.cb = new ClientInfoBuilder();
    this.inj = new ClientInfoBuilderService();
    this.pw = new PostWho();
    // Fetch Pi Stats internal
    this.pfs = new PiMonitorFetchService();

    this.pfs.override(new PiMonitorFetchTest());
    this.pfs.service.result$.subscribe(s => (this.pistat = s));

    app.use(express.json());
    app.listen(this.config.apiport, () => {
      console.log(`Example app listening on port ${this.config.apiport}!`);
    });
    this.dosomething();
  }
  dosomething() {
    this.pfs.service.get();
    const c = this.inj.service.get();
    c.name = 'Test2';
    const pwi = new PostWhoInput(c, this.pistat, this.config.apiport);
    pwi.hashcode = this.config.securityHash;
    pwi.apiPort = pwi.clientInfo.apiport = this.config.apiport;
    pwi.clientInfo.name = this.config.name;
    this.pw.post(pwi);
    //  cb.get();
    // console.log(inj.service.get());
    setTimeout(() => {
      this.dosomething();
    }, 2000);
  }
}
export function createConfig(name: string, port: number): ClientConfig {
  const cfg = new ClientConfig();
  cfg.name = name;
  cfg.apiport = port;
  return cfg;
}
const clients: ApplicationClient[] = [
 /* new ApplicationClient(createConfig('Client 1', 3001)),
  new ApplicationClient(createConfig('Client 2', 3002)),
  new ApplicationClient(createConfig('Client 3', 3003)),
  new ApplicationClient(createConfig('Client 4', 3004)),
  new ApplicationClient(createConfig('Client 5', 3005))*/
];
for (let index = 1; index <= 600; index++) {
    clients.push(new ApplicationClient(createConfig(`Client ${3005 + index}`, 3005 + index)));
   // const element = array[index];
    
}
