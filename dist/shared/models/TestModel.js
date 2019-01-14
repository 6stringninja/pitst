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
//# sourceMappingURL=TestModel.js.map