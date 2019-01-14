import { ClientInfo } from '../../shared/models/ClientInfo/ClientInfo';
import { ClientInfoCpu } from '../../shared/models/ClientInfo/ClientInfoCpu';
import { ClientInfoIpMac } from '../../shared/models/ClientInfo/ClientInfoIpMac';
import { IClientInfoBuilder } from './IClientInfoBuilder';
export class FakeClientInfoBuilder implements IClientInfoBuilder {
  private fakeId = 0;
  private fakeMac = '';
  public get(): ClientInfo {
    const cl = new ClientInfo('fake');
    if (!this.fakeId) {
      this.fakeId = Math.floor(Math.random() * 254) + 1;
    }
    if (!this.fakeMac) {
      this.fakeMac = this.genMAC();
    }
    cl.ipMacs = [];
    cl.ipMacs.push(
      new ClientInfoIpMac(`192.168.1.${this.fakeId}`, this.fakeMac),
    );
    cl.cpu = new ClientInfoCpu();
    cl.cpu.cores = 4;
    cl.cpu.name = `Fake ${this.fakeId}`;
    return cl;
  }
  private genMAC() {
    const hexDigits = '0123456789ABCDEF';
    let macAddress = '';
    for (let i = 0; i < 6; i++) {
      macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
      macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
      if (i !== 5) { macAddress += ':'; }
    }

    return macAddress;
  }
}
