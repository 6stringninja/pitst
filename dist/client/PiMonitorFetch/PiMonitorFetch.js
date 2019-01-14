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
var PiMonitorFetchBase_1 = require("./PiMonitorFetchBase");
var PiMonitorFetch = /** @class */ (function (_super) {
    __extends(PiMonitorFetch, _super);
    function PiMonitorFetch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PiMonitorFetch.prototype.get = function () {
        throw new Error('Method not implemented.');
    };
    return PiMonitorFetch;
}(PiMonitorFetchBase_1.PiMonitorFetchBase));
exports.PiMonitorFetch = PiMonitorFetch;
//# sourceMappingURL=PiMonitorFetch.js.map