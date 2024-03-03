// let students = {
// 	js:[{
// 		name: 'Vasya',
// 		progress: 100,
// 	},{
// 		name: 'Petya',
// 		progress: 80,
// 	}],
// 	html:[{
// 		name: 'Anna',
// 		progress: 30
// 	},{
// 		name: 'Kate',
// 		progress: 20
// 	}],
// 	pro:[{
// 		name:'Sam',
// 		progress: 12
// 	}]
// }
//
// function getTotalProgressByIteration(data){
// 	let total = 0;
// 	let students = 0;
// 	for(let key of Object.values(data)){
// 		if (Array.isArray(key)){
// 			students += key.length
// 				for (let i = 0; i < key.length; i++){
// 					total += key[i].progress
// 				}
// 		}else {
// 			for(let key2 of Object.values(key)){
// 				students += key2.length
// 				for (let i = 0; i < key2.length; i++){
// 					total += key2[i].progress
// 				}
// 			}
// 		}
// 	}
// 	return total / students
// }
// // console.log(getTotalProgressByIteration(students))
//
// function getTotalProgressByRecursion(data) {
// 	if (Array.isArray(data)){
// 		let total = 0;
// 			for (let i = 0; i < data.length; i++){
// 				total += data[i].progress
// 		}
// 			return [total , data.length]
// 	}else{
// 		let total = [0,0]
// 			for (let subData of Object.values(data)){
// 				const subDataArr = getTotalProgressByRecursion(subData)
// 				total[0] += subData[0]
// 				total[1] += subData[1]
// 			}
// 			return total
// 	}
// }
// const result = getTotalProgressByRecursion(students)
// console.log(result[0] / result[1])

function factorial(n) {
	if (typeof(n) !== 'number' || !Number.isInteger(n)) {
		return "Ошибка, проверьте данные";
	}
	
	if (n >= 1) {
		return n * factorial(n - 1);
	} else {
		return 1;
	}
}

console.log(factorial(5))