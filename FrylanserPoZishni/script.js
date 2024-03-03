const button = document.querySelector('.button');

// button.onclick = function() {
// 	alert('YOU CLICKED!!')
// }
// function showConsole() {
// 	alert('CLICK')
// }
// button.onclick = showConsole;
//
// button.addEventListener('click', function(e) {
// 	alert('CLICKED')
// })
// button.addEventListener('click', function(e) {
// 	alert('CLACKED')
// })


// const options = {
// 	'capture': false, // фаза на которой должен сработать обработчик
// 	'once' : false, // если TRUE - тогда обработчик будет удлален после выполнения === //removeEventListener
// 	'passive' : false // если TRUE - то указывает на то, что обработчик
// 	//никогда не вызовет preventDefault()
// }
//
//
// function showConsole() {
// 	alert('CLICKED!!!!!')
// }
//
// button.addEventListener('click', showConsole);
// button.removeEventListener('click', showConsole);


function showConsole(event) {
	//type - тип события
	console.log(event.type);
	//target - элемент, на котором произошло событие
	console.log(event.target);
	//currentTarget - элемент, на котором сработал обработчик
	console.log(event.currentTarget);
	//Положение курсора в окне по оси X
	console.log(event.clientX);
	//Положение курсора в окне по оси Y
	console.log(event.clientY);
}
button.addEventListener('click', showConsole);