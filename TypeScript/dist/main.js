"use strict";
var MyPeople = /** @class */ (function () {
    function MyPeople() {
        this.Name = "hdf";
    }
    return MyPeople;
}());
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (prev, current) { return prev + current; }, 0);
}
function Test1(type) {
    var res = type == 1 /* Body */;
}
function toJson(value) {
    return JSON.stringify(value);
}
var a = 0;
a = "1s";
a += 2;
console.log(a);
//# sourceMappingURL=main.js.map