// const Person = function (name, age, sex){
// 	this.name = name
// 	this.age = age
// 	this.sex = sex
// 	this.greet = function() {
// 		console.log(`Привет! Меня зовут ${this.name}`);
// 	}
// }
// const person = new Person('Peter', 25,'male');
//
// console.log(person)

const Person = function (name , age ,sex){
	const _show = () => {
		console.log(`${this.name} , ${this.age} , ${this.sex}`)
		this.name = name;
		this.age = age;
		this.sex = sex;
		this.print = function () {
			_show();
		}
	}
}
Person.prototype.start = 0

Person.prototype.end = 122

Person.prototype.greet = function (){
	console.log(`Привет! Меня зовут ${this.name}`)
}

const person = new Person('Peter', 25,'male');

console.log(person)
person.greet()
person.print()

// const Developer = function (name , age ,sex ,skills){
// 	Person.apply(this, arguments);
// 	this.skills = skills || [];
// 	return this;
// }