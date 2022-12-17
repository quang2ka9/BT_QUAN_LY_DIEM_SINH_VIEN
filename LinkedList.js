"use strict";
exports.__esModule = true;
exports.LinkedList = void 0;
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.insertFirst = function (name, score) {
        var node = new Node_1.Node(name, score);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    LinkedList.prototype.insertLast = function (name, score) {
        if (!this.tail) {
            this.insertFirst(name, score);
        }
        else {
            var node = new Node_1.Node(name, score);
            this.tail.next = node;
            this.size++;
        }
    };
    LinkedList.prototype.showList = function () {
        var listData = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next;
        }
        return listData;
    };
    LinkedList.prototype.totalStudentFail = function () {
        var listStudentFail = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.score <= 5) {
                listStudentFail.push(currentNode.readData());
                currentNode = currentNode.next;
            }
            else {
                currentNode = currentNode.next;
            }
        }
        return listStudentFail;
    };
    LinkedList.prototype.listStudentMaxScore = function () {
        var listStudentMaxScore = [];
        var currentNode = this.head;
        var maxScore = currentNode.score;
        if (this.size) {
            while (currentNode !== null) {
                if (maxScore < currentNode.score) {
                    maxScore = currentNode.score;
                }
                currentNode = currentNode.next;
            }
            ;
            currentNode = this.head;
            while (currentNode !== null) {
                if (currentNode.score == maxScore) {
                    listStudentMaxScore.push(currentNode);
                }
                currentNode = currentNode.next;
            }
            return listStudentMaxScore;
        }
        return null;
    };
    LinkedList.prototype.findByName = function (name) {
        var currentNode = this.head;
        if (this.size) {
            while (currentNode !== null) {
                if (currentNode.name == name) {
                    return currentNode;
                }
                currentNode = currentNode.next;
            }
        }
        return null;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
