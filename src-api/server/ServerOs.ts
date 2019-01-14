import os from 'os';
import { ClientInfoIpMac } from '../shared/models/ClientInfo/ClientInfoIpMac';
import { serverConfig } from '../shared/ServerConfig';
export class ServerOs {
  public Ips(filtr = serverConfig.ipfilter): ClientInfoIpMac[] {
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
    return cip.filter((f) => f.ip.startsWith(filtr));
  }
}
