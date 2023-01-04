const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");
const textArea = document.querySelector("textarea");

window.onload = () => {
	form.reset();
};

inputs.forEach(function (elem) {
	elem.addEventListener("focus", function (e) {
		e.preventDefault();
		this.previousElementSibling.style.display = "none";
	});
});

inputs.forEach(function (elem) {
	elem.addEventListener("blur", function (e) {
		e.preventDefault();
		if (this.value === "") {
			this.previousElementSibling.style.display = "inline";
		} else {
			this.previousElementSibling.style.display = "none";
		}
	});
});

textArea.addEventListener("focus", function (e) {
	e.preventDefault();
	this.previousElementSibling.style.display = "none";
});

textArea.addEventListener("blur", function (e) {
	e.preventDefault();
	if (this.value === "") {
		this.previousElementSibling.style.display = "inline";
	} else {
		this.previousElementSibling.style.display = "none";
	}
});

form.addEventListener("submit", function (e) {
	e.preventDefault();
	let errors = [];
	let newErrName = document.createElement("p");
	let newErrMail = document.createElement("p");
	let newErrMessage = document.createElement("p");

	if (inputs[0].value === "") {
		inputs[0].style.borderColor = "hsl(7, 100%, 68%)";
		newErrName.classList.add("error");
		newErrName.innerText = "Sorry, the field can't be empty";
		inputs[0].parentElement.appendChild(newErrName);
		errors.push("Sorry, the field can't be empty");
	}
	if (inputs[1].value === "") {
		inputs[1].style.borderColor = "hsl(7, 100%, 68%)";
		newErrMail.classList.add("error");
		newErrMail.innerText = "Sorry, invalid format here";
		inputs[1].parentElement.appendChild(newErrMail);
		errors.push("Sorry, invalid format here");
	}
	if (textArea.value === "") {
		textArea.style.borderColor = "hsl(7, 100%, 68%)";
		newErrMessage.classList.add("error");
		newErrMessage.innerText = "Sorry, invalid format here";
		textArea.parentElement.appendChild(newErrMessage);
		errors.push("Sorry, message can't be empty");
	}
	if (errors.length === 0) {
		form.reset();
		inputs[0].style.borderColor = "hsl(0, 0%, 100%)";
		inputs[0].previousElementSibling.style.display = "inline";
		inputs[1].style.borderColor = "hsl(0, 0%, 100%)";
		inputs[1].previousElementSibling.style.display = "inline";
		textArea.style.borderColor = "hsl(0, 0%, 100%)";
		textArea.previousElementSibling.style.display = "inline";
		inputs[0].nextElementSibling.classList.remove("error");
		inputs[0].nextElementSibling.classList.add("hide");
		inputs[1].nextElementSibling.classList.remove("error");
		inputs[1].nextElementSibling.classList.add("hide");
		textArea.nextElementSibling.classList.remove("error");
		textArea.nextElementSibling.classList.add("hide");
		alert("Thank you for sending message!");
	}
});
