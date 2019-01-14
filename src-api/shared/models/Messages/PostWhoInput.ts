import { ClientInfo } from '../ClientInfo/ClientInfo';
import { PiStat } from '../PiStat';
export class MessageInputBase {
    public hashcode: string;
}
// tslint:disable-next-line:max-classes-per-file
export class PostWhoInput extends MessageInputBase {
    constructor(public clientInfo: ClientInfo, public pistat: PiStat, public apiPort) {
        super();
    }
}
