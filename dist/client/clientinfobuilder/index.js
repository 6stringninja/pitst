"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var os_1 = __importDefault(require("os"));
var ClientInfo_1 = require("../../shared/models/ClientInfo/ClientInfo");
var ClientInfoCpu_1 = require("../../shared/models/ClientInfo/ClientInfoCpu");
var ClientInfoIpMac_1 = require("../../shared/models/ClientInfo/ClientInfoIpMac");
var ClientInfoBuilder = /** @class */ (function () {
    function ClientInfoBuilder() {
    }
    ClientInfoBuilder.prototype.get = function () {
        var clientinfo = new ClientInfo_1.ClientInfo(this.HostName());
        clientinfo.cpu = this.cpus();
        clientinfo.totalmemory = os_1.default.totalmem();
        clientinfo.loadavg = os_1.default.loadavg();
        clientinfo.ipMacs = this.Ips();
        return clientinfo;
    };
    ClientInfoBuilder.prototype.HostName = function () {
        return os_1.default.hostname();
    };
    ClientInfoBuilder.prototype.Ips = function () {
        var cip = [];
        var nit = os_1.default.networkInterfaces();
        Object.keys(nit)
            .map(function (f) { return nit[f]; })
            .forEach(function (ff) {
            var filtered = ff.filter(function (tr) { return tr.internal === false && tr.family === 'IPv4'; });
            if (filtered && filtered.length > 0) {
                var itm_1 = filtered[0];
                if (cip.filter(function (ft) { return ft.ip === itm_1.address; }).length === 0) {
                    cip.push(new ClientInfoIpMac_1.ClientInfoIpMac(filtered[0].address, filtered[0].mac));
                }
            }
        });
        return cip;
    };
    ClientInfoBuilder.prototype.cpus = function () {
        var cputype = new ClientInfoCpu_1.ClientInfoCpu();
        var cpus = os_1.default.cpus();
        cputype.cores = cpus.length;
        cputype.name =
            cputype.cores > 0 ? cpus[0].model + " " + cpus[0].speed : 'unknown';
        var totalIdle = 0;
        var totalTick = 0;
        for (var i = 0, len = cpus.length; i < len; i++) {
            var cpu = cpus[i];
            var t = void 0;
            // tslint:disable-next-line:forin
            for (t in cpu.times) {
                totalTick += cpu.times[t];
            }
            totalIdle += cpu.times.idle;
        }
        var idle = totalIdle / cpus.length;
        var total = totalTick / cpus.length;
        cputype.idleper = idle / total;
        cputype.inuseper = 1.0 - cputype.idleper;
        return cputype;
    };
    return ClientInfoBuilder;
}());
exports.ClientInfoBuilder = ClientInfoBuilder;
//# sourceMappingURL=index.js.map