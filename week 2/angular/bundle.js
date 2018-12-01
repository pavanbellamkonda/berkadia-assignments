(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Student = require("./student.class");
var names = ["Pavan", "Ravan", "Sravan", "Praveen", "Karan"];
var ids = [101, 102, 103, 104, 10];
var ages = [20, 25, 30, 35, 40, 45];
// var s1 = new Student("Pavan", 101, 20);
// var str = s1.display()
// document.write(str)
for (var i = 0; i < 5; i++) {
    var s = new Student(names[i], ids[i], ages[i]);
    console.log(s.display());
    document.writeln(s.display());
}

},{"./student.class":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
