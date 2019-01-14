import { ClientInfoBuilder } from './clientinfobuilder';
import { ClientInfoBuilderService } from './clientinfobuilder/ClientInfoBuilderService';
import { PiMonitorFetchService } from './PiMonitorFetch/PiMonitorFetchService';
import { PiMonitorFetchTest } from './PiMonitorFetch/PiMonitorFetchTest';

import express = require('express');
import { PostWhoInput } from '../shared/models/Messages/PostWhoInput';
import { PiStat } from '../shared/models/PiStat';
import { ClientConfig } from './ClientConfig';
const app: express.Application = express();

app.use(express.json());

// tslint:disable-next-line:ordered-imports
import {
  CommandRunner,
  CommandRunnerCommand
} from './CommandRunner/CommandRunner';
import { PostWho } from './PostWho';

export const clientConfig = new ClientConfig();

const pw = new PostWho();
pw.result$.subscribe(s => {
  //  console.log('who res');
  // console.log(s);
});

// Fetch Stats through Node
const cb = new ClientInfoBuilder();
const inj: ClientInfoBuilderService = new ClientInfoBuilderService();

// Fetch Pi Stats internal
const pfs: PiMonitorFetchService = new PiMonitorFetchService();
let pistat: PiStat;

pfs.override(new PiMonitorFetchTest());
pfs.service.result$.subscribe(s => (pistat = s));

export function dosomething() {
  pfs.service.get();
  const c = inj.service.get();
  c.name = 'Test2';
  const pwi = new PostWhoInput(c, pistat);
  pwi.hashcode = clientConfig.securityHash;
   pwi.apiPort = pwi.clientInfo.apiport = clientConfig.apiport;
 
  pw.post(pwi);
  //  cb.get();
  // console.log(inj.service.get());
  setTimeout(() => {
    dosomething();
  }, 2000);
}
dosomething();
/*
const tst = new CommandRunner();
const testc = new CommandRunnerCommand(
  'dir',
  [],
  new CommandRunnerCommand(
    'mkdir',
    ['testdir'],
    new CommandRunnerCommand('CD', ['testdir'], new CommandRunnerCommand('dir'))
  )
);
let outp = ';';
tst.run(testc, outp);
console.log(outp);*/
app.get('/', (req: express.Request, res: express.Response) => {
  console.log("server req");
  res.send('Hello Server!');
});

app.listen(clientConfig.apiport, () => {
  console.log(`Example app listening on port ${clientConfig.apiport}!`);
});
