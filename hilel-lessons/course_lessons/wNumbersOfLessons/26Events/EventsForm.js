function showError(container, errorMessage) {
	container.className = 'error'
	let msgElem = document.createElement('span')
	msgElem.className = 'error-message'
	msgElem.innerHTML = errorMessage
	container.appendChild(msgElem)
}

function resetError(container) {
	container.className = ''
	if (container.lastChild.className == 'error-message') container.removeChild(container.lastChild)
}

function validate(form) {
	let elems = form.elements
	resetError(elems.from.parentNode)
	if (!elems.from.value) showError(elems.from.parentNode, ' Вкажіть від кого.')
	resetError(elems.password.parentNode)
	if (!elems.password.value) showError(elems.password.parentNode, ' Вкажіть пароль.')
	else if (elems.password.value != elems.password2.value)
		showError(elems.password.parentNode, ' Паролі не співпадають.')
	resetError(elems.to.parentNode)
	if (!elems.to.value) showError(elems.to.parentNode, ' Вкажіть, куди.')
	resetError(elems.message.parentNode)
	if (!elems.message.value) showError(elems.message.parentNode, ' Відсутній текст.')
}
