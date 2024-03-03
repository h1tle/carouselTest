class Person {
	constructor (name , age ,sex ){
		this.name = name;
		this.age = age;
		this.sex = sex;
	}
	greet(){
		console.log(`Привет! Меня зовут ${this.name}`)
	}
}

const person = new Person ('John', 25,'male');
console.log(person)
person.greet()


class Developer extends Person {constructor(name, age, sex, skills)
{
	super(name, age, sex);
	this.skills = skills || [];
}

}