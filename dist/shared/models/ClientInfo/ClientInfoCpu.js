"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClientInfoCpu = /** @class */ (function () {
    function ClientInfoCpu(name, cores, inuseper, idleper) {
        if (name === void 0) { name = ''; }
        if (cores === void 0) { cores = 0; }
        if (inuseper === void 0) { inuseper = 0; }
        if (idleper === void 0) { idleper = 0; }
        this.name = name;
        this.cores = cores;
        this.inuseper = inuseper;
        this.idleper = idleper;
    }
    return ClientInfoCpu;
}());
exports.ClientInfoCpu = ClientInfoCpu;
//# sourceMappingURL=ClientInfoCpu.js.map