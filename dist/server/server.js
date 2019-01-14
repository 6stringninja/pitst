"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
var express = require("express");
var ClientInfo_1 = require("../shared/models/ClientInfo/ClientInfo");
var os_1 = __importDefault(require("os"));
var ClientInfoIpMac_1 = require("../shared/models/ClientInfo/ClientInfoIpMac");
var ServerOs = /** @class */ (function () {
    function ServerOs() {
    }
    ServerOs.prototype.Ips = function () {
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
    return ServerOs;
}());
exports.ServerOs = ServerOs;
// Create a new express application instance
var app = express();
var clients = [];
var index = 0;
for (index; index < 20; index++) {
    var cl = new ClientInfo_1.ClientInfo("fake " + index);
    clients.push(cl);
}
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/sh', function (req, res) {
    res.send({ data: clients });
});
app.get('/who', function (req, res) {
    res.send({ ip: { data: (new ServerOs().Ips()[0].ip) } });
});
app.get('/clients', function (req, res) {
    console.log(clients);
    res.send(clients);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
function dosomething() {
    var si = new ServerOs();
    console.log(si.Ips());
    setTimeout(function () {
        dosomething();
    }, 5000);
}
exports.dosomething = dosomething;
dosomething();
//# sourceMappingURL=server.js.map