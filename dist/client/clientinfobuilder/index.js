"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const ClientInfo_1 = require("../../shared/models/ClientInfo/ClientInfo");
const ClientInfoCpu_1 = require("../../shared/models/ClientInfo/ClientInfoCpu");
const ClientInfoIpMac_1 = require("../../shared/models/ClientInfo/ClientInfoIpMac");
class ClientInfoBuilder {
    get() {
        const clientinfo = new ClientInfo_1.ClientInfo(this.HostName());
        clientinfo.cpu = this.cpus();
        clientinfo.totalmemory = os_1.default.totalmem();
        clientinfo.loadavg = os_1.default.loadavg();
        clientinfo.ipMacs = this.Ips();
        return clientinfo;
    }
    HostName() {
        return os_1.default.hostname();
    }
    Ips() {
        const cip = [];
        const nit = os_1.default.networkInterfaces();
        Object.keys(nit)
            .map((f) => nit[f])
            .forEach((ff) => {
            const filtered = ff.filter((tr) => tr.internal === false && tr.family === 'IPv4');
            if (filtered && filtered.length > 0) {
                const itm = filtered[0];
                if (cip.filter((ft) => ft.ip === itm.address).length === 0) {
                    cip.push(new ClientInfoIpMac_1.ClientInfoIpMac(filtered[0].address, filtered[0].mac));
                }
            }
        });
        return cip;
    }
    cpus() {
        const cputype = new ClientInfoCpu_1.ClientInfoCpu();
        const cpus = os_1.default.cpus();
        cputype.cores = cpus.length;
        cputype.name =
            cputype.cores > 0 ? `${cpus[0].model} ${cpus[0].speed}` : 'unknown';
        let totalIdle = 0;
        let totalTick = 0;
        for (let i = 0, len = cpus.length; i < len; i++) {
            const cpu = cpus[i];
            let t;
            // tslint:disable-next-line:forin
            for (t in cpu.times) {
                totalTick += cpu.times[t];
            }
            totalIdle += cpu.times.idle;
        }
        const idle = totalIdle / cpus.length;
        const total = totalTick / cpus.length;
        cputype.idleper = idle / total;
        cputype.inuseper = 1.0 - cputype.idleper;
        return cputype;
    }
}
exports.ClientInfoBuilder = ClientInfoBuilder;
//# sourceMappingURL=index.js.map