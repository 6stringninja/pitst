import { CpuInfo, NetworkInterfaceInfo } from 'os';
import { ClientInfoCpu } from './ClientInfoCpu';
import { ClientInfoIpMac } from './ClientInfoIpMac';

export class ClientInfo {
  public ipMacs: ClientInfoIpMac[];

  constructor(
    public name = '',
    public updated = new Date(),
    public totalmemory = 0,
    public cpu = new ClientInfoCpu(),
    public loadavg: number[] = [],
    public apiport = 0,
  ) {}
}
