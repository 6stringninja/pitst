"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rx_1 = require("rx");
class PiMonitorFetchBase {
    constructor() {
        this.result$ = rx_1.Observable.create((observer) => {
            this.objserver$ = observer;
        });
    }
    proccess(result) {
        this.objserver$.onNext(result);
    }
}
exports.PiMonitorFetchBase = PiMonitorFetchBase;
//# sourceMappingURL=PiMonitorFetchBase.js.map