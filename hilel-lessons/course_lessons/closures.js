// let b = 3 ;
//
// function calc(a){
// 	return a + b;
// }
// console.log(calc(1))

// var func = function () {
// 	var i = 10;
// 	return function () {
// 		return i;
// 	}
// };
// var anotherFunc = function () {
// 	var i = 20;
// 	console.log(func()()); // 10
// };
// // console.log(func()())
// anotherFunc();

let func = function (x , y){
	return function(){
		return x + y;
	}
}

let anotherFunc = function (){
	var c = 30;
	console.log(func(10,5)())
}

anotherFunc()