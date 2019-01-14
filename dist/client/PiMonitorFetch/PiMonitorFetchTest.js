"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PiStat_1 = require("../../shared/models/PiStat");
var PiMonitorFetchBase_1 = require("./PiMonitorFetchBase");
var PiMonitorFetchTest = /** @class */ (function (_super) {
    __extends(PiMonitorFetchTest, _super);
    function PiMonitorFetchTest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PiMonitorFetchTest.prototype.get = function () {
        var _this = this;
        setTimeout(function () {
            var fakePiStat = new PiStat_1.PiStat();
            fakePiStat.coolingstate = (Math.round(Math.random() * 80) + 70).toString();
            fakePiStat.cpu_count = '4';
            fakePiStat.success = true;
            _this.proccess(fakePiStat);
        }, 200);
    };
    return PiMonitorFetchTest;
}(PiMonitorFetchBase_1.PiMonitorFetchBase));
exports.PiMonitorFetchTest = PiMonitorFetchTest;
//# sourceMappingURL=PiMonitorFetchTest.js.map