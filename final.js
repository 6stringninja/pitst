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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("shared/models/TestModel", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TestModel = /** @class */ (function () {
        function TestModel(id, name) {
            if (id === void 0) { id = 0; }
            if (name === void 0) { name = ''; }
            this.id = id;
            this.name = 'hi' + name + id;
        }
        Object.defineProperty(TestModel.prototype, "name", {
            get: function () {
                return this._name + this.id;
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: true,
            configurable: true
        });
        return TestModel;
    }());
    exports.TestModel = TestModel;
});
define("shared/ServiceBase", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ServiceBase = /** @class */ (function () {
        function ServiceBase() {
        }
        ServiceBase.prototype.override = function (service) {
            this.service = service;
        };
        return ServiceBase;
    }());
    exports.ServiceBase = ServiceBase;
});
define("shared/models/ClientInfo/ClientInfoCpu", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ClientInfoCpu = /** @class */ (function () {
        function ClientInfoCpu(name, cores, idle, total, inuseper, idleper) {
            if (name === void 0) { name = ''; }
            if (cores === void 0) { cores = 0; }
            if (idle === void 0) { idle = 0; }
            if (total === void 0) { total = 0; }
            if (inuseper === void 0) { inuseper = 0; }
            if (idleper === void 0) { idleper = 0; }
            this.name = name;
            this.cores = cores;
            this.idle = idle;
            this.total = total;
            this.inuseper = inuseper;
            this.idleper = idleper;
        }
        return ClientInfoCpu;
    }());
    exports.ClientInfoCpu = ClientInfoCpu;
});
define("shared/models/ClientInfo/ClientInfoIpMac", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ClientInfoIpMac = /** @class */ (function () {
        function ClientInfoIpMac(ip, mac) {
            if (ip === void 0) { ip = ''; }
            if (mac === void 0) { mac = ''; }
            this.ip = ip;
            this.mac = mac;
        }
        return ClientInfoIpMac;
    }());
    exports.ClientInfoIpMac = ClientInfoIpMac;
});
define("shared/models/ClientInfo/ClientInfo", ["require", "exports", "shared/models/ClientInfo/ClientInfoCpu"], function (require, exports, ClientInfoCpu_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ClientInfo = /** @class */ (function () {
        function ClientInfo(name, updated, totalmemory, cpu, loadavg) {
            if (name === void 0) { name = ''; }
            if (updated === void 0) { updated = new Date(); }
            if (totalmemory === void 0) { totalmemory = 0; }
            if (cpu === void 0) { cpu = new ClientInfoCpu_1.ClientInfoCpu(); }
            if (loadavg === void 0) { loadavg = []; }
            this.name = name;
            this.updated = updated;
            this.totalmemory = totalmemory;
            this.cpu = cpu;
            this.loadavg = loadavg;
        }
        return ClientInfo;
    }());
    exports.ClientInfo = ClientInfo;
});
define("client/clientinfobuilder/IClientInfoBuilder", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("client/clientinfobuilder/ClientInfoBuilderService", ["require", "exports", "typescript-ioc", ".", "shared/ServiceBase"], function (require, exports, typescript_ioc_1, _1, ServiceBase_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ClientInfoBuilderService = /** @class */ (function (_super) {
        __extends(ClientInfoBuilderService, _super);
        function ClientInfoBuilderService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        var _a;
        __decorate([
            typescript_ioc_1.Inject,
            __metadata("design:type", typeof (_a = typeof _1.ClientInfoBuilder !== "undefined" && _1.ClientInfoBuilder) === "function" ? _a : Object)
        ], ClientInfoBuilderService.prototype, "service", void 0);
        ClientInfoBuilderService = __decorate([
            typescript_ioc_1.Singleton
        ], ClientInfoBuilderService);
        return ClientInfoBuilderService;
    }(ServiceBase_1.ServiceBase));
    exports.ClientInfoBuilderService = ClientInfoBuilderService;
});
define("client/clientinfobuilder/FakeClientInfoBuilder", ["require", "exports", "shared/models/ClientInfo/ClientInfo", "shared/models/ClientInfo/ClientInfoCpu", "shared/models/ClientInfo/ClientInfoIpMac"], function (require, exports, ClientInfo_1, ClientInfoCpu_2, ClientInfoIpMac_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            cl.cpu = new ClientInfoCpu_2.ClientInfoCpu();
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
});
define("client/client", ["require", "exports", "shared/models/TestModel", "./clientinfobuilder", "client/clientinfobuilder/ClientInfoBuilderService", "client/clientinfobuilder/FakeClientInfoBuilder"], function (require, exports, TestModel_1, clientinfobuilder_1, ClientInfoBuilderService_1, FakeClientInfoBuilder_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
define("client/ClientInfoBuilder/index", ["require", "exports", "os", "shared/models/ClientInfo/ClientInfo", "shared/models/ClientInfo/ClientInfoCpu", "shared/models/ClientInfo/ClientInfoIpMac"], function (require, exports, os_1, ClientInfo_2, ClientInfoCpu_3, ClientInfoIpMac_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    os_1 = __importDefault(os_1);
    var ClientInfoBuilder = /** @class */ (function () {
        function ClientInfoBuilder() {
        }
        ClientInfoBuilder.prototype.get = function () {
            var clientinfo = new ClientInfo_2.ClientInfo(this.HostName());
            clientinfo.cpu = this.cpus();
            clientinfo.totalmemory = os_1.default.totalmem();
            clientinfo.loadavg = os_1.default.loadavg();
            clientinfo.ipMacs = this.Ips();
            return clientinfo;
        };
        ClientInfoBuilder.prototype.HostName = function () {
            return os_1.default.hostname();
        };
        ClientInfoBuilder.prototype.Ips = function () {
            var cip = [];
            var nit = os_1.default.networkInterfaces();
            Object.keys(nit)
                .map(function (f) { return nit[f]; })
                .forEach(function (ff) {
                var filtered = ff.filter(function (tr) { return tr.internal === false && tr.family === 'IPv4'; });
                if (filtered && filtered.length > 0) {
                    var itm_1 = filtered[0];
                    if (cip.filter(function (ft) { return ft.ip === itm_1.address; }).length === 0) {
                        cip.push(new ClientInfoIpMac_2.ClientInfoIpMac(filtered[0].address, filtered[0].mac));
                    }
                }
            });
            return cip;
        };
        ClientInfoBuilder.prototype.cpus = function () {
            var cputype = new ClientInfoCpu_3.ClientInfoCpu();
            var cpus = os_1.default.cpus();
            cputype.cores = cpus.length;
            cputype.name =
                cputype.cores > 0 ? cpus[0].model + " " + cpus[0].speed : 'unknown';
            var totalIdle = 0;
            var totalTick = 0;
            for (var i = 0, len = cpus.length; i < len; i++) {
                var cpu = cpus[i];
                var t = void 0;
                // tslint:disable-next-line:forin
                for (t in cpu.times) {
                    totalTick += cpu.times[t];
                }
                totalIdle += cpu.times.idle;
            }
            cputype.idle = totalIdle / cpus.length;
            cputype.total = totalTick / cpus.length;
            cputype.idleper = cputype.idle / cputype.total;
            cputype.inuseper = 1.0 - cputype.idleper;
            return cputype;
        };
        return ClientInfoBuilder;
    }());
    exports.ClientInfoBuilder = ClientInfoBuilder;
});
//# sourceMappingURL=final.js.map