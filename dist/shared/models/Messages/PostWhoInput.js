"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MessageInputBase {
}
exports.MessageInputBase = MessageInputBase;
// tslint:disable-next-line:max-classes-per-file
class PostWhoInput extends MessageInputBase {
    constructor(clientInfo, pistat, apiPort) {
        super();
        this.clientInfo = clientInfo;
        this.pistat = pistat;
        this.apiPort = apiPort;
    }
}
exports.PostWhoInput = PostWhoInput;
//# sourceMappingURL=PostWhoInput.js.map