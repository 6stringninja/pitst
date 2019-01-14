"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MessageBase_1 = require("./MessageBase");
// tslint:disable-next-line:max-classes-per-file
class PostWhoResult extends MessageBase_1.MessageBase {
    constructor(serverip = '') {
        super();
        this.serverip = serverip;
    }
}
exports.PostWhoResult = PostWhoResult;
//# sourceMappingURL=PostWhoResult.js.map