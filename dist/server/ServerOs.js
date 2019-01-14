"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const ClientInfoIpMac_1 = require("../shared/models/ClientInfo/ClientInfoIpMac");
const ServerConfig_1 = require("./ServerConfig");
class ServerOs {
    Ips(filtr = ServerConfig_1.serverConfig.ipfilter) {
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
        return cip.filter((f) => f.ip.startsWith(filtr));
    }
}
exports.ServerOs = ServerOs;
//# sourceMappingURL=ServerOs.js.map