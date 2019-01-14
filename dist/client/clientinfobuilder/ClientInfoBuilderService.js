"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_ioc_1 = require("typescript-ioc");
const _1 = require(".");
const ServiceBase_1 = require("../../shared/ServiceBase");
let ClientInfoBuilderService = class ClientInfoBuilderService extends ServiceBase_1.ServiceBase {
};
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", _1.ClientInfoBuilder)
], ClientInfoBuilderService.prototype, "service", void 0);
ClientInfoBuilderService = __decorate([
    typescript_ioc_1.Singleton
], ClientInfoBuilderService);
exports.ClientInfoBuilderService = ClientInfoBuilderService;
//# sourceMappingURL=ClientInfoBuilderService.js.map