"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServerConfig_1 = require("../ServerConfig");
class ClientLite {
    constructor(name = '', ip = '', updated = new Date(), times = 0, pistat = null, api = '') {
        this.name = name;
        this.ip = ip;
        this.updated = updated;
        this.times = times;
        this.pistat = pistat;
        this.api = api;
    }
}
exports.ClientLite = ClientLite;
// tslint:disable-next-line:max-classes-per-file
class ClientList {
    constructor() {
        this.clients = [];
    }
    updateOrAdd(postWhoInput) {
        const client = postWhoInput.clientInfo;
        const newItem = new ClientLite(client.name, client.ipMacs.find((f) => f.ip.startsWith(ServerConfig_1.serverConfig.ipfilter)).ip);
        newItem.api = `http://${newItem.ip}:${client.apiport}/`;
        newItem.pistat = postWhoInput.pistat;
        const find = this.clients.find((f) => f.name === client.name);
        if (find) {
            newItem.times = find.times + 1;
            this.clients[this.clients.indexOf(find)] = newItem;
        }
        else {
            this.clients.push(newItem);
        }
    }
}
exports.ClientList = ClientList;
//# sourceMappingURL=ClientList.js.map