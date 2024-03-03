function greet(msg , divider){
	return `${msg} ${divider} My name is ${this.name}`;
}

const person1 = {
	name: 'John',
	greet,
}

const person2 = {
	name: 'Bob',
	greet,
}

const person3 = {
	name: 'Marry',
	greet,
}

console.log(person1.greet('hi' , '!!!'))
console.log(person2.greet.call(person3, 'hi' , '///'))
console.log(person3.greet.apply(person2, ['hi' , '???']))

console.log('-----------------')

const greenJohn = greet.bind(person1)
console.log(greenJohn('hi' , '!!!'))

const greenMarry = greet.bind(person3)
console.log(greenMarry('hi' , '!!!'))

console.log(greenMarry.call(person2, 'hi' , '///'))

console.log('-----------------')

const powNum = Math.pow.bind(null, 2)

console.log('Answer = ' , powNum(5))