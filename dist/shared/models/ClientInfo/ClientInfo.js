"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClientInfoCpu_1 = require("./ClientInfoCpu");
class ClientInfo {
    constructor(name = '', updated = new Date(), totalmemory = 0, cpu = new ClientInfoCpu_1.ClientInfoCpu(), loadavg = [], apiport = 0) {
        this.name = name;
        this.updated = updated;
        this.totalmemory = totalmemory;
        this.cpu = cpu;
        this.loadavg = loadavg;
        this.apiport = apiport;
    }
}
exports.ClientInfo = ClientInfo;
//# sourceMappingURL=ClientInfo.js.map