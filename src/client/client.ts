
import { ClientInfoBuilder } from './clientinfobuilder';
import { ClientInfoBuilderService } from './clientinfobuilder/ClientInfoBuilderService';
import { PiMonitorFetchService } from './PiMonitorFetch/PiMonitorFetchService';
import { PiMonitorFetchTest } from './PiMonitorFetch/PiMonitorFetchTest';

const request = require('request');



const cb = new ClientInfoBuilder();
const inj: ClientInfoBuilderService = new ClientInfoBuilderService();
const pfs: PiMonitorFetchService  = new PiMonitorFetchService();
pfs.override(new PiMonitorFetchTest());
pfs.service.result$.subscribe((s) => console.log(s));
pfs.service.get();
export function dosomething() {

  request('http://localhost:3000/who', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
});

  cb.get();
  console.log(inj.service.get());
  setTimeout(() => {
    dosomething();
  }, 2000);
}
dosomething();
