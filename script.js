//complete this code
class Person {
	constructor(name , age){
		this._name= name;
		this._age = age;
	}
    get name() {
        return this._name;
    }


	    set age(newAge) {
        this._age = newAge;
    }

}

class Student extends Person {
		 study(){
		console.log(`${this._name} is studying`)
}
}

class Teacher extends Person {
	 teach(){
		console.log(`${this._name} is teaching`)
	}
}


const person = new Person("John", 25);
console.log(person._name); // Output: John

person.age = 30;
console.log(person._age); // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
