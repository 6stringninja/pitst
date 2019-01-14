"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PostBase_1 = require("../shared/commands/PostBase");
class PostWho extends PostBase_1.PostBase {
    constructor() {
        super('http://localhost:3000/who');
    }
    mapResult(resp, body) {
        return body.result;
    }
}
exports.PostWho = PostWho;
//# sourceMappingURL=PostWho.js.map