const person = new Object({
	name : 'Denys',
	age : 25,
	greet: function(){
	console.log('Greet!')
	}
})

Object.prototype.sayHello = function (){
	console.log('Hello')
}

console.log(person.sayHello())

const lena = Object.create(person) // prototype
lena.name = 'Elena'

const str = new String('I amd string');
console.log(str)