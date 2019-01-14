"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
const rx_1 = require("rx");
const ErrorMessage_1 = require("./ErrorMessage");
class PostBase {
    constructor(url = '', body = null, errorCode = 'E0', errorMessage = 'Post Error Occured') {
        this.url = url;
        this.body = body;
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
        this.result$ = rx_1.Observable.create((obs) => (this.observer = obs));
        this.error$ = rx_1.Observable.create((obse) => (this.observererror = obse));
    }
    post(bdy = this.body) {
        // console.log(bdy);
        request_1.default.post(this.url, {
            json: bdy,
        }, (error, res, body) => {
            if (error) {
                console.error(error);
                if (this.observererror) {
                    this.observererror.onNext(new ErrorMessage_1.ErrorMessage(this.errorCode, this.errorMessage, error));
                }
                return;
            }
            this.observer.onNext(this.mapResult(res, body));
            //  console.log(`statusCode: ${res.statusCode}`);
            // console.log(body);
        });
    }
}
exports.PostBase = PostBase;
//# sourceMappingURL=PostBase.js.map