// const person = {
// 	name : 'Jhon',
// 	_age : 25,
//
// 	getAge: function (){
// 		return this._age;
// 	},
// 	setAge(value){
// 		this._age = value;
// 	}
// }
//
// console.log(person.getAge())
// person.setAge(40)




const person = {
	name: 'John',
	_age : 25,
	get age(){
		return this._age;
	},
	set age(value){
		this._age = value > 122 ? 122 : value < 0 ? 0 : value;
	}
}

// function checkAndFixAge(age) {
// 	if (age > 122) {
// 		return 122
// 	}
//
// 	if (age < 0) {
// 		return 0;
// 	}
//
// 	return age;
// }

//
// person.age = checkAndFixAge(36)
// console.log(person.age);
//
// person.age = checkAndFixAge(1241241)
// console.log(person.age);
//
// person.age = checkAndFixAge(-1241241)
// console.log(person.age);

console.log(person.age)
person.age = 36;
console.log(person.age)


person.age = 111141;
console.log(person.age)

person.age = -111141;
console.log(person.age)