"use strict";
exports.__esModule = true;
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(name, score) {
        this.next = null;
        this.name = name;
        this.score = score;
    }
    Node.prototype.readData = function () {
        return "Name: ".concat(this.name, " - Score:").concat(this.score);
    };
    return Node;
}());
exports.Node = Node;
