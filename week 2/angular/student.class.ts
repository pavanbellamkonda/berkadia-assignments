class Student {
    name: string;
    id: number;
    age: number;
    
    constructor(n: string, i: number, a: number){
        this.name = n;
        this.id = i;
        this.age = a;
    }

    display(){
        return " Name: " + this.name + " ID: " + this.id + " Age: " + this.age + "<br>";
    }
}

export = Student;