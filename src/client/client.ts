
import { ClientInfoBuilder } from './clientinfobuilder';
import { ClientInfoBuilderService } from './clientinfobuilder/ClientInfoBuilderService';
import { PiMonitorFetchService } from './PiMonitorFetch/PiMonitorFetchService';
import { PiMonitorFetchTest } from './PiMonitorFetch/PiMonitorFetchTest';

const cb = new ClientInfoBuilder();
const inj: ClientInfoBuilderService = new ClientInfoBuilderService();
const pfs: PiMonitorFetchService  = new PiMonitorFetchService();
pfs.override(new PiMonitorFetchTest());
pfs.service.result$.subscribe((s) => console.log(s));
pfs.service.get();
export function dosomething() {

  cb.get();
  console.log(inj.service.get());
  setTimeout(() => {
    dosomething();
  }, 2000);
}
dosomething();
