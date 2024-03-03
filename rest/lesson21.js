// // function divide(a, b) {
// // 	try {
// // // Спроба виконати потенційно небезпечну операцію
// // 		if (b === 0) {
// // 			throw new Error('Не можна ділити на нуль!');
// // 		} else {
// // 			console.log('Результат ділення: ', a / b);
// // 		}
// // 	} catch (err) {
// // // Обробка помилок, які могли виникнути в блоку try
// // 		console.error('Сталася помилка: ', err.message);
// // 	} finally {
// // // Код, який виконується завжди, незалежно від помилок
// // 		console.log('Операція ділення завершена.');
// // 	}
// // }
// // divide(10, 2); // Виклик функції з коректними даними
// // divide(10, 0); // Виклик функції з діленням на нуль
// //
// // const error = new Error('My custom error')
// //
// // console.dir(error)
// // console.log(error.message)
// //
// // error.code = 1
// // error.statusCode = 500
// //
// // console.log(error.code)
// // console.log(error.statusCode)
//
// // const inc = x => x + 1;
// //
// // console.log(inc(5))
// // аналог з function
// // const inc = function (x) {
// // 	return x + 1;
// // };
//
// // const counter = (a , b) => (a + b ) + 1;
// // console.log('Result (a + b) + 1  = ',counter(5,5) , 'in total')
//
// // const sayHello = () => 'Hello world';
// // console.log(sayHello());
//
//
// let person = {
// 	name: 'John',
// 	greet: function () {
// 		return `Hi! My name is  ${this.name}`;
// 	}
// };
//
//
// let person2 = {
// 	name: 'Marry',
// 	greet: function () {
// 		return `Hi! My name is  ${this.name}`;
// 	}
// };
// console.log(person.greet());
// console.log(person2.greet());

const calc = (a , b) => {
	return a + b;
}


console.log(calc(5 ,6))