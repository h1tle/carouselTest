// // function copy(mainObj){
// // 	let ObjCopy = {};
// // 	let key;
// // 	for (key in mainObj) {
// // 		ObjCopy[key] = mainObj[key];
// // }
// // return ObjCopy;
// // }
// // const numbers = {
// // 	a: 10,
// // 	b: 5,
// // 	c:{
// // 		x: 5,
// // 		y: 4
// // 	}
// // };
// // const newNumber = copy(numbers);
// // newNumber.a = 15;
// // console.log(newNumber);
//
//
// const personalPlanPeter = {
// 	name: "Peter",
// 	age: "29",
// 	skills: {
// 		languages: ['ru', 'eng'],
// 		programmingLangs: {
// 			js: '20%',
// 			php: '10%'
// 		},
// 		exp: '1 month'
// 	}
// };
//
// function showProgrammingLangs(plan) {
// 	let str = '';
// 	const {programmingLangs} = plan.skills;
// 	for(let key in programmingLangs){
// 		str = str + `Язык ${key} изучен на + ${programmingLangs[key]} \n`;
// 	}
// 	return str;
// }
//
// showProgrammingLangs(personalPlanPeter);
//
// const names = ['Peter', 'Marry', 'John'];
//
// names.forEach((name , i , arr) => {
// 	console.log(name , i , arr)
// })
// console.log('____________')
// names[2] = 'Andrew'
// names.forEach((name , i , arr) => {
// 	console.log(name , i , arr)
// })

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];
//
// function showFamily(arr) {
// 	let str = '';
//
// 	arr.length === 0 ? (str = 'Family is empty') : (str = 'Family includes: \n');
//
// 	arr.forEach(name => {
// 		str = str + `${name} \n`;
// 	});
//
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === 'Alex') {
// 			str = str + 'Andrews friend';
//
// 		}
// 	}
// 	return str;
// }
//
// console.log(showFamily(family));
// //
// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
//
// function standardizeStrings(arr) {
// 	arr.forEach(key =>{
// 		console.log(key.toLowerCase())
// 	})
// }
// standardizeStrings(favoriteCities);

// function reverse(str) {
// 	if (typeof str !== 'string') {
// 		console.log('NONO: Input is not a string');
// 		return '';
// 	}
//
// 	let newStr = '';
// 	let i = str.length - 1;
//
// 	while (i >= 0) {
// 		newStr += str[i];
// 		i--;
// 	}
//
// 	return newStr;
// }
//
// const someString = 'This is some strange string';
// console.log(reverse(someString));

// let arr = ['Alba', 2, 'Pedro', 'Denys', 'Fenna'];
// let str = arr.sort().join(' - ').toLowerCase();
//
// console.log(str);

// const person = {
// 	name: 'John',
// 	age: 25,
// 	skills: {
// 		languages: ['ru', 'eng'],
// 		programmingLangs: {
// 			js: '20%',
// 			php: '10%'
// 		},
// 		exp: '1 month'
// 	}
// }
//
// const functionality = {
// 	start: 0,
// 	end: 100,
// 	greet() {
// 		console.log(`Привет! Меня зовут ${this.name}`);
// 	},
// }
//
// Object.setPrototypeOf(person, functionality);
//
// person.greet();


// const Person= {
// 	constructor(name, age , sex) {
// 		this.name = name;
// 		this.age = age;
// 		this.sex = sex;
// },
// 	greet(){
// 		console.log(`Привет! Меня зовут ${this.name}`)
// 	},
// }
//
// const person = Object.create(Person).constructor('Peter', 25,'male');
// console.log(person)

const Person = {
	constructor(name, age, sex) {
		this.name = name;
		this.age = age;
		this.sex = sex;
		return this;
	},
	greet() {
		console.log(`Привет! Меня зовут ${this.name}`);
	},
};

const Developer = Object.create(Person);

Developer.constructor = function (name, age, sex , skills) {
Person.constructor.apply(this, arguments);
this.skills = skills || [];
return this;
}

Developer.developer  = function () {
	console.log(`I am a developer`);
}
const developer = Object.create(Developer);
developer.constructor('Peter', 25,'male' , ['html' , 'scss' , 'js']);

console.log('-----------------')

const developer2 = Object.create(Developer);
developer2.constructor('Peter', 25,'male');


console.log('developer' ,developer);

console.log('-----------------')

console.log('developer' ,developer2);


developer.greet();

console.log('-----------------')

developer.developer();
// function Person(name, age, sex) {
// 	this.name = name;
// 	this.age = age;
// 	this.sex = sex;
// }
//
// Person.prototype.greet = function() {
// 	console.log(`Привет! Меня зовут ${this.name}`);
// }
//
// const person = new Person('Peter', 25, 'male');
// console.log(person);
