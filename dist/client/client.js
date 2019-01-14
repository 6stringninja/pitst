"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clientinfobuilder_1 = require("./clientinfobuilder");
const ClientInfoBuilderService_1 = require("./clientinfobuilder/ClientInfoBuilderService");
const PiMonitorFetchService_1 = require("./PiMonitorFetch/PiMonitorFetchService");
const PiMonitorFetchTest_1 = require("./PiMonitorFetch/PiMonitorFetchTest");
const express = require("express");
const PostWhoInput_1 = require("../shared/models/Messages/PostWhoInput");
const ClientConfig_1 = require("./ClientConfig");
const app = express();
app.use(express.json());
const PostWho_1 = require("./PostWho");
exports.clientConfig = new ClientConfig_1.ClientConfig();
const pw = new PostWho_1.PostWho();
pw.result$.subscribe(s => {
    //  console.log('who res');
    // console.log(s);
});
// Fetch Stats through Node
const cb = new clientinfobuilder_1.ClientInfoBuilder();
const inj = new ClientInfoBuilderService_1.ClientInfoBuilderService();
// Fetch Pi Stats internal
const pfs = new PiMonitorFetchService_1.PiMonitorFetchService();
let pistat;
pfs.override(new PiMonitorFetchTest_1.PiMonitorFetchTest());
pfs.service.result$.subscribe(s => (pistat = s));
function dosomething() {
    pfs.service.get();
    const c = inj.service.get();
    c.name = 'Test2';
    const pwi = new PostWhoInput_1.PostWhoInput(c, pistat);
    pwi.hashcode = exports.clientConfig.securityHash;
    pwi.apiPort = pwi.clientInfo.apiport = exports.clientConfig.apiport;
    pw.post(pwi);
    //  cb.get();
    // console.log(inj.service.get());
    setTimeout(() => {
        dosomething();
    }, 2000);
}
exports.dosomething = dosomething;
dosomething();
/*
const tst = new CommandRunner();
const testc = new CommandRunnerCommand(
  'dir',
  [],
  new CommandRunnerCommand(
    'mkdir',
    ['testdir'],
    new CommandRunnerCommand('CD', ['testdir'], new CommandRunnerCommand('dir'))
  )
);
let outp = ';';
tst.run(testc, outp);
console.log(outp);*/
app.get('/', (req, res) => {
    console.log("server req");
    res.send('Hello Server!');
});
app.listen(exports.clientConfig.apiport, () => {
    console.log(`Example app listening on port ${exports.clientConfig.apiport}!`);
});
//# sourceMappingURL=client.js.map