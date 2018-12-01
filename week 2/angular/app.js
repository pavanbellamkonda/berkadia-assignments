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
