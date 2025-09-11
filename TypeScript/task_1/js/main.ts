interface Teacher {
	readonly firstName: string, // readonly = can only be set during initialization of an object of this interface
	readonly lastName: string,
	fullTimeEmployee: boolean,
	yearsOfExperience?: number, // ? signifie Optional
	location: string

	[attribute: string]: any; // Possibilité de rajouté des attributs, tant que la clé est une string, et ils peuvent être de n'importe quel types.
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);


interface Directors extends Teacher {
	numberOfReports: number
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));


class StudentClass implements StudentClassInterface {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework() {
		return "Currently working";
	}

	displayName() {
		return this.firstName;
	}
}
interface StudentClassInterface {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}

interface StudentClassConstructor {
	new (firstName: string, lastName: string): StudentClassInterface;
}

const studentClass: StudentClassConstructor = StudentClass;

const student = new studentClass("Kévin", "Fresne");
console.log(student.displayName());
console.log(student.workOnHomework());
