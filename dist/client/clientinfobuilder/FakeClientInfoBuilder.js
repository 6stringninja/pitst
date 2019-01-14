"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClientInfo_1 = require("../../shared/models/ClientInfo/ClientInfo");
var ClientInfoCpu_1 = require("../../shared/models/ClientInfo/ClientInfoCpu");
var ClientInfoIpMac_1 = require("../../shared/models/ClientInfo/ClientInfoIpMac");
var FakeClientInfoBuilder = /** @class */ (function () {
    function FakeClientInfoBuilder() {
        this.fakeId = 0;
        this.fakeMac = '';
    }
    FakeClientInfoBuilder.prototype.get = function () {
        var cl = new ClientInfo_1.ClientInfo('fake');
        if (!this.fakeId) {
            this.fakeId = Math.floor(Math.random() * 254) + 1;
        }
        if (!this.fakeMac) {
            this.fakeMac = this.genMAC();
        }
        cl.ipMacs = [];
        cl.ipMacs.push(new ClientInfoIpMac_1.ClientInfoIpMac("192.168.1." + this.fakeId, this.fakeMac));
        cl.cpu = new ClientInfoCpu_1.ClientInfoCpu();
        cl.cpu.cores = 4;
        cl.cpu.name = "Fake " + this.fakeId;
        return cl;
    };
    FakeClientInfoBuilder.prototype.genMAC = function () {
        var hexDigits = '0123456789ABCDEF';
        var macAddress = '';
        for (var i = 0; i < 6; i++) {
            macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
            macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
            if (i !== 5) {
                macAddress += ':';
            }
        }
        return macAddress;
    };
    return FakeClientInfoBuilder;
}());
exports.FakeClientInfoBuilder = FakeClientInfoBuilder;
//# sourceMappingURL=FakeClientInfoBuilder.js.map