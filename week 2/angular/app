System.register("student.class", [], function (exports_1, context_1) {
    "use strict";
    var Student;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Student = /** @class */ (function () {
                function Student(n, i, a) {
                    this.name = n;
                    this.id = i;
                    this.age = a;
                }
                Student.prototype.display = function () {
                    return "--------------- Name: " + this.name + " --------------- ID: " + this.id + " --------------- Age: " + this.age + " ---------------";
                };
                return Student;
            }());
            exports_1("Student", Student);
        }
    };
});
System.register("app", ["student.class"], function (exports_2, context_2) {
    "use strict";
    var student_class_1, s1;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (student_class_1_1) {
                student_class_1 = student_class_1_1;
            }
        ],
        execute: function () {
            s1 = new student_class_1.Student("Pavan", 101, 20);
            document.write(s1.display());
        }
    };
});
