"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestModel_1 = require("../shared/models/TestModel");
var clientinfobuilder_1 = require("./clientinfobuilder");
var ClientInfoBuilderService_1 = require("./clientinfobuilder/ClientInfoBuilderService");
var FakeClientInfoBuilder_1 = require("./clientinfobuilder/FakeClientInfoBuilder");
var ts = new TestModel_1.TestModel(1, 'server');
var cb = new clientinfobuilder_1.ClientInfoBuilder();
var inj = new ClientInfoBuilderService_1.ClientInfoBuilderService();
inj.override(new FakeClientInfoBuilder_1.FakeClientInfoBuilder());
function dosomething() {
    // console.log(os.networkInterfaces());
    cb.get();
    console.log(inj.service.get());
    setTimeout(function () {
        dosomething();
    }, 2000);
}
exports.dosomething = dosomething;
dosomething();
//# sourceMappingURL=client.js.map