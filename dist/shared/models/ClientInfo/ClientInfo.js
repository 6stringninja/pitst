"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClientInfoCpu_1 = require("./ClientInfoCpu");
var ClientInfo = /** @class */ (function () {
    function ClientInfo(name, updated, totalmemory, cpu, loadavg) {
        if (name === void 0) { name = ''; }
        if (updated === void 0) { updated = new Date(); }
        if (totalmemory === void 0) { totalmemory = 0; }
        if (cpu === void 0) { cpu = new ClientInfoCpu_1.ClientInfoCpu(); }
        if (loadavg === void 0) { loadavg = []; }
        this.name = name;
        this.updated = updated;
        this.totalmemory = totalmemory;
        this.cpu = cpu;
        this.loadavg = loadavg;
    }
    return ClientInfo;
}());
exports.ClientInfo = ClientInfo;
//# sourceMappingURL=ClientInfo.js.map