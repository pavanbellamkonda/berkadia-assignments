"use strict";
var Student = /** @class */ (function () {
    function Student(n, i, a) {
        this.name = n;
        this.id = i;
        this.age = a;
    }
    Student.prototype.display = function () {
        return " Name: " + this.name + " ID: " + this.id + " Age: " + this.age + "<br>";
    };
    return Student;
}());
module.exports = Student;
