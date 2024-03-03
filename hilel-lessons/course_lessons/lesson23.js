// let map = new Map();
// map.set('1', 'str1');
// map.set(1, 'num1');
// map.set(true, 'bool1');
//
//
// console.log(map.get(1))
// console.log(map.get('1'))
// console.log(map.get(true))
//
//
// console.log('==========')
// console.log(map)

// let set = new Set(["апельсины", "яблоки", "бананы"]);
//
// // то же, что: for(let value of set)
// set.forEach((value, valueAgain, set) => {
// 	console.log(value , set); // апельсины, затем яблоки, затем бананы
// });

let weakMap = new WeakMap();
// Створення об'єктів, які будуть використовуватися як ключі
let obj1 = { name: "Об'єкт 1" };
let obj2 = { name: "Об'єкт 2" };

// Додавання пар ключ-значення до WeakMap
weakMap.set(obj1, "Дані для Об'єкта 1");
weakMap.set(obj2, "Дані для Об'єкта 2");
// Отримання значення за ключем

console.log(weakMap.get(obj1)); // Виведе: "Дані для Об'єкта 1"
console.log(weakMap.get(obj2)); // Виведе: "Дані для Об'єкта 2"
// Видалення об'єкта з пам'яті
obj1 = null;




