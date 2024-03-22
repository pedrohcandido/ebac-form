var button = document.getElementById("button");

function onSubmit(event){
	event.preventDefault();
}
const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);

function send(){

	let fistName 	= document.getElementById("fistName").value;
	let lastName	= document.getElementById("lastName").value;
	let phone 		= document.getElementById("phone").value;
	let email 		= document.getElementById("email").value;
	let gender 		= document.querySelector('input[name="gender"]:checked').value;
	
	let birthDate = document.getElementById("birthDate").value;
	birthDate = new Date(birthDate).toLocaleDateString('pt-BR',{timeZone: 'UTC'})
	
	document.getElementById("answerFistName").innerHTML		= fistName;
	document.getElementById("answerlastName").innerHTML 	= lastName;
	document.getElementById("answerPhone").innerHTML 			= phone;
	document.getElementById("answerEmail").innerHTML 			= email;
	document.getElementById("answerGender").innerHTML 		= gender;
	document.getElementById("answerBirthDate").innerHTML 	= birthDate
}

button.addEventListener("click", () => {
	const loader = document.querySelector(".loader");

	loader.classList.add("loader-show");
	loader.classList.add("loader-hidden");

	loader.addEventListener("transitionend", () => {
		document.body.removeChild("loader");
	})
})
