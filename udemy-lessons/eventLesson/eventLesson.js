const btns = document.querySelectorAll('button')
const overlay = document.querySelector('.overlay')
// btn.onclick = function (){
// 	alert('YOU PRESSED ON ME!!')
// }


let i = 0;
const del = (e) => {
	// e.target.remove();
	console.log(e.currentTarget)
	console.log(e.type)
	// i++
	// if(i === 1){
	// 	btn.removeEventListener('click'  , del)
	//
	// }
}

btns.forEach(btn =>{
	btn.addEventListener('click' , del)
	// btn.addEventListener('click' , del , {once: true})
})

// btn.addEventListener('click' , del)
// overlay.addEventListener('click' , del)
//btn.removeEventListener('click' , del)
// btn.addEventListener('click' , (e) =>{
// 	// alert('YOU PRESSED ON ME!!')
// 	// console.log(e.target)
// });
