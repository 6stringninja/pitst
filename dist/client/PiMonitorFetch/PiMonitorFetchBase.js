"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rx_1 = require("rx");
var PiMonitorFetchBase = /** @class */ (function () {
    function PiMonitorFetchBase() {
        var _this = this;
        this.result$ = rx_1.Observable.create(function (observer) {
            _this.objserver$ = observer;
        });
    }
    PiMonitorFetchBase.prototype.proccess = function (result) {
        this.objserver$.onNext(result);
    };
    return PiMonitorFetchBase;
}());
exports.PiMonitorFetchBase = PiMonitorFetchBase;
//# sourceMappingURL=PiMonitorFetchBase.js.map