"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PiStat_1 = require("../../shared/models/PiStat");
const PiMonitorFetchBase_1 = require("./PiMonitorFetchBase");
class PiMonitorFetchTest extends PiMonitorFetchBase_1.PiMonitorFetchBase {
    get() {
        setTimeout(() => {
            const fakePiStat = new PiStat_1.PiStat();
            fakePiStat.coolingstate = (Math.round(Math.random() * 80) + 70).toString();
            fakePiStat.cpu_count = '4';
            fakePiStat.success = true;
            this.proccess(fakePiStat);
        }, 200);
    }
}
exports.PiMonitorFetchTest = PiMonitorFetchTest;
//# sourceMappingURL=PiMonitorFetchTest.js.map