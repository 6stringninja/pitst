import { MessageBase } from './MessageBase';
// tslint:disable-next-line:max-classes-per-file
export class PostWhoResult extends MessageBase {
    constructor(public serverip = '') {
        super();
    }
}
