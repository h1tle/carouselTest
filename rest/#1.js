// // var a = 20;
// // var msg = a < 18 ? 'young' : 'Old';
// // console.log(msg)
//
//
// // const name = {
// //   mail : 'Denys',
// //   second: 'Shukhat'
// // };
// //
// // for(let mail in name) {
// //   console.log(name[second] )
// // }
//
// // var age = 5;
// // var msg;
// //
// // msg = age < 18
// //   ? 'child'
// //     :age < 45
// //       ? 'Young'
// //       : ' Old'
// //
// // console.log(msg)
//
// function first(callback) {
//   console.log('first fnc')
//   callback();
// }
//
// function second( ) {
//   console.log('second fnc')
// }
//
// first(second);
function getMathResult(baze ,repeat) {
	if (repeat !== 'str' || repeat <= 0){
		return baze
	}
	else{
		return 'good'
	}
}

console.log(getMathResult(10 , 'str'))