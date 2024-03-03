// // const string = 'Some string';
// //
// // let newString;
// //
// // newString = string
// // 		.replace('string', 'new string')
// // 		.concat(' was updated' )
// // 		.toUpperCase()
// // 		.slice(9);
// //
// // console.log(newString);
// //
// // const newArray = new Array(15);
// // newArray[5] = 'hello'
// // console.log(newArray);
//
// // const thirdArray = [, , 2, 4];
// // console.log(thirdArray);
// // console.log(thirdArray[1]);
//
// // function eat(arr) {
// // 	arr.pop(); // удаляет последний элемент массива
// // }
// //
// // var arr = ["нам", "не", "страшен", "серый", "волк"]
// //
// // console.log(arr.length); // arr.length === 5
// // eat(arr); // arr.length === 4
// //
// // // в функцию массив не скопирован, а передана ссылка
// // eat(arr);
// // console.log(arr.length); // arr.length === 3
//
//
// function compareNumeric(next, prev) {
// 	// prev - предыщий элемент массива
// 	// next - следующий элемент массива
//
// 	console.log(`next: ${next}, prev: ${prev}`)
//
// 	if (next > prev) return 1;  // післодовність правильна
// 	if (next < prev) return -1; // послідовність змінюється
// }
//
// //               next
// //            prev
// const arr = [ 2, 3, 15, 105, 22, -2 ];
// //                  next
// //               prev
//
// arr.sort(compareNumeric);
//
// console.log(arr); // [1, 2, 15, 22, 105, 202]
// console.log('-----------------------------------');
//
//
//
// arr.sort((a, b) => a - b);
// console.log(arr);  // [1, 2, 15, 22, 105, 202]
//
// console.log('-----------------------------------');
//

// const arr = ['why' , 'hello' , 'good']
//
// const arr = ["Я", "изучаю", "JavaScript"];
//
// arr.splice(1, 1 , '*DELETED*'); // начиная с позиции 1, удалить 1 элемент
//
// console.log(arr); //  осталось ["Я", "JavaScript"]


// const arr = ["Я", "сейчас", "изучаю", "JavaScript"];
//
// // удалить 2 первых элемента
// const removed = arr.splice(0, 2);
//
// // ["Я", "сейчас"] - массив удаленных элементов
// console.log(`Удалили: '${removed}'`);
//
// // ["изучаю", "JavaScript"] - остались в массиве
// console.log(`Осталось: [${arr}]`);

// const arr = ["Я", "сейчас", "изучаю", "JavaScript"];
//
// arr.splice(10,0, 'hello')
//
// console.log(arr)

// const months = ['Mar' , 'Apr' , 'June']
//
// months.push('End')
// months.unshift('Start')
//
// console.log(months)


//const arr = ["Яблоко", "Апельсин", "Груша"];

// arr.forEach((el) => console.log(el));

// /* традиционный for */
// console.log('----- for -----')
// for (let i = 0; i < arr.length; i++) {
// 	console.log(`${i}: ${arr[i]}`);
// }
// /* for..of */
// console.log('----- for..of -----')
//
// for (const el of arr) {
// 	console.log(el);
// }
// const arr = ["Яблоко", "Апельсин", "Груша"];
// /* элемент */
// console.log('----- 1 параметр -----')
// arr.forEach(function(item) {
// 	console.log(item);
// });
// /* элемент + индекс */
// console.log('----- 2 параметра -----')
// arr.forEach(function(item, i) {
// 	console.log(`${i}: ${item}`);
// });
// /* элемент + индекс + исходный массив */
// console.log('----- 3 параметра -----')
// arr.forEach(function(item, i, arr) {
// 	console.log(`${i}: ${item}, (массив: ${arr})`);
// });

// const arr = ["яблуко", "Апельсин", "Груша"];
// /* елемент */
// console.log('----- 1 параметр -----')
// arr.forEach((el) => console.log(el));
// /* елемент + індекс */
// console.log('----- 2 параметри -----')
// arr.forEach((el, i) => console.log(`${i}: ${el}`));
// /* елемент + індекс + масив */
// console.log('----- 3 параметри -----')
// arr.forEach((el, i, arr) => console.log(`${i}: ${el}, [${arr}]`));
// /* або */
// console.log('----- rest -----')
// arr.forEach(console.log);

// const names = ['HTML', 'CSS', 'JavaScript', 'Angular'];
// const namesLength = names.map((el) => el.length);
//
// // получили массив с длинами
// console.log(namesLength); // [4, 3, 10, 7]
//
// const namesInUpperCase = names.map((el) => el.toUpperCase());
//
// // получили массив с элементами в верхнем регистре
//
// console.log(namesInUpperCase);
// // ["HTML", "CSS", "JAVASCRIPT", "ANGULAR"]

// const arr = [1, -1, 2, -2, 3, -5, 7, 8, -6 , 12];
//
//
// const positiveArr = arr.filter((n) => n > 0);
//
// console.log(positiveArr); // [1, 2, 3, 7, 8]
//
//
// const evenArr = arr.filter((n) => n % 2 === 0 && n > 0 )
// console.log(evenArr)
//
// const unevenArr = arr.filter((n) => n % 2)
// console.log(unevenArr)
//
// const negativeArr = arr.filter((n) => n < 0);
//
// console.log(negativeArr); // [-1, -2, -5, -6]

//
// const arr = [1, -1, 2, -2, 3];
// const isPositive = (n) => n > 0;
// // every => все положительные?
// console.log(arr.every(isPositive) ); // false
// // some => хотя бы одно положительное?
// console.log(arr.some(isPositive) ); // true
//
// console.log('-------------')
// const arr2 = [-1, -1, -2, -2, -3];
// console.log(arr2.every(isPositive) ); // false
// console.log(arr2.some(isPositive) ); // false
//
// console.log('-------------')
// const arr3 = [1, 1, 2, 2, 3];
// console.log(arr3.every(isPositive) ); // true
// console.log(arr3.some(isPositive) ); // true
//
//
// if (arr3.every(isPositive) === true){
// 	arr.push(100);
// }
// console.log(arr3)

const arr = [1, 2, 3, 4, 5];

// для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее

//                      	0			1     =    1
//                      	1			2     =    3
//                      	3			3     =    6
//                      	6			4     =    10
//                      	10		5     =    15 => вернули
const res = arr.reduce((prev, curr) => prev + curr, 0);

console.log(res); // 15


