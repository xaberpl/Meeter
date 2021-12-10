const form = document.getElementById('form');
const firstName = document.getElementById('firstName');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const firstNameValue = firstName.value.trim();

	
	if(firstNameValue === '') {
		setErrorFor(firstName, 'Username cannot be blank');
	} else {
		setSuccessFor(firstName);
		
	}

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	form.submit();
}