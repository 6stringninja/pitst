"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerConfig {
    constructor() {
        this.ipfilter = '192.168.1';
        this.securityHash = 'abc123';
        this.localMask = 'localhost';
    }
}
exports.ServerConfig = ServerConfig;
exports.serverConfig = new ServerConfig();
//# sourceMappingURL=ServerConfig.js.map