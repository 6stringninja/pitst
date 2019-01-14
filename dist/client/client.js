"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clientinfobuilder_1 = require("./clientinfobuilder");
var ClientInfoBuilderService_1 = require("./clientinfobuilder/ClientInfoBuilderService");
var PiMonitorFetchService_1 = require("./PiMonitorFetch/PiMonitorFetchService");
var PiMonitorFetchTest_1 = require("./PiMonitorFetch/PiMonitorFetchTest");
var request = require('request');
var cb = new clientinfobuilder_1.ClientInfoBuilder();
var inj = new ClientInfoBuilderService_1.ClientInfoBuilderService();
var pfs = new PiMonitorFetchService_1.PiMonitorFetchService();
pfs.override(new PiMonitorFetchTest_1.PiMonitorFetchTest());
pfs.service.result$.subscribe(function (s) { return console.log(s); });
pfs.service.get();
function dosomething() {
    request('http://localhost:3000/who', { json: true }, function (err, res, body) {
        if (err) {
            return console.log(err);
        }
        console.log(body.url);
        console.log(body.explanation);
    });
    cb.get();
    console.log(inj.service.get());
    setTimeout(function () {
        dosomething();
    }, 2000);
}
exports.dosomething = dosomething;
dosomething();
//# sourceMappingURL=client.js.map