"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_promise_1 = __importDefault(require("child-process-promise"));
const spawn = child_process_promise_1.default.spawn;
spawn('cd', ['rsptst'], { capture: ['stdout', 'stderr'] })
    .then((result) => {
    console.log('[spawn] stdout: ', result.stdout.toString());
})
    .catch((err) => {
    console.error('[spawn] stderr: ', err.stderr);
});
class CommandRunnerCommand {
    constructor(command = '', params = [], nextcommand = null) {
        this.command = command;
        this.params = params;
        this.next = nextcommand;
    }
}
exports.CommandRunnerCommand = CommandRunnerCommand;
// tslint:disable-next-line:max-classes-per-file
class CommandRunner {
    run(cmd, output = '') {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield spawn(cmd.command, cmd.params, { capture: ['stdout', 'stderr'] });
                console.log('[spawn] stdout: ', result.stdout.toString());
                output += result.stdout.toString();
                if (cmd.next) {
                    yield this.run(cmd.next, output);
                }
                return output;
            }
            catch (err) {
                console.error('[spawn] stderr: ', err.stderr);
                return 'error';
            }
        });
    }
}
exports.CommandRunner = CommandRunner;
//# sourceMappingURL=CommandRunner.js.map