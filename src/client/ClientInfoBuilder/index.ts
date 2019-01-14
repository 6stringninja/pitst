import os from 'os';
import { ClientInfo } from '../../shared/models/ClientInfo/ClientInfo';
import { ClientInfoCpu } from '../../shared/models/ClientInfo/ClientInfoCpu';
import { ClientInfoIpMac } from '../../shared/models/ClientInfo/ClientInfoIpMac';
import { IClientInfoBuilder } from './IClientInfoBuilder';
export class ClientInfoBuilder implements IClientInfoBuilder {
  public get(): ClientInfo {
    const clientinfo = new ClientInfo(this.HostName());
    clientinfo.cpu = this.cpus();
    clientinfo.totalmemory = os.totalmem();
    clientinfo.loadavg = os.loadavg();
    clientinfo.ipMacs = this.Ips();
    return clientinfo;
  }
  private HostName(): string {
    return os.hostname();
  }
  private Ips(): ClientInfoIpMac[] {
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
  private cpus(): ClientInfoCpu {
    const cputype = new ClientInfoCpu();
    const cpus = os.cpus();
    cputype.cores = cpus.length;
    cputype.name =
      cputype.cores > 0 ? `${cpus[0].model} ${cpus[0].speed}` : 'unknown';
    let totalIdle = 0;
    let totalTick = 0;
    for (let i = 0, len = cpus.length; i < len; i++) {
      const cpu = cpus[i];
      let t: any;
      // tslint:disable-next-line:forin
      for (t in cpu.times) {
        totalTick += cpu.times[t];
      }
      totalIdle += cpu.times.idle;
    }
    const idle = totalIdle / cpus.length;
    const total = totalTick / cpus.length;
    cputype.idleper =  idle / total;
    cputype.inuseper = 1.0 - cputype.idleper;
    return cputype;
  }
}
