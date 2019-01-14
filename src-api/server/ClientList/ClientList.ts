import { ClientInfo } from '../../shared/models/ClientInfo/ClientInfo';
import { PostWhoInput } from '../../shared/models/Messages/PostWhoInput';
import { PiStat } from '../../shared/models/PiStat';
import { serverConfig } from '../ServerConfig';

export class ClientLite {
  constructor(
    public name = '',
    public ip = '',
    public updated = new Date(),
    public times = 0,
    public pistat: PiStat = null,
    public api  = '',
  ) {}
}
// tslint:disable-next-line:max-classes-per-file
export class ClientList {
  public clients: ClientLite[] = [];
  public updateOrAdd(postWhoInput: PostWhoInput) {
    const client = postWhoInput.clientInfo;

    const newItem = new ClientLite(
      client.name,
      client.ipMacs.find((f) => f.ip.startsWith(serverConfig.ipfilter)).ip,

    );
    newItem.api = `http://${newItem.ip}:${client.apiport}/`;
    newItem.pistat = postWhoInput.pistat;

    const find = this.clients.find((f) => f.name === client.name);

    if (find) {
      newItem.times = find.times + 1;

      this.clients[this.clients.indexOf(find)] = newItem;
    } else {
      this.clients.push(newItem);
    }
  }
}
