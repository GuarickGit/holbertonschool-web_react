interface Teacher {
	readonly firstName: string, // readonly = can only be set during initialization of an object of this interface
	readonly lastName: string,
	fullTimeEmployee: boolean,
	yearsOfExperience?: number, // ? signifie Optional
	location: string

	[attribute: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
