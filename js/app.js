const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");
const textArea = document.querySelector("textarea");
const error = document.querySelectorAll(".error");
const aboutPhoto = document.querySelector(".about img");
const mobileWidth = window.matchMedia("(max-width: 767px)");
const tabletWidth = window.matchMedia(
	"(min-width: 768px) and (max-width: 1024px)"
);
const desktopWidth = window.matchMedia("(min-width: 1025px)");

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
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	if (inputs[0].value === "") {
		inputs[0].style.borderColor = "hsl(7, 100%, 68%)";
		error[0].style.display = "inline-block";
		errors.push("Sorry, the field can't be empty");
	} else {
		inputs[0].style.borderColor = "hsl(0, 0%, 100%)";
		error[0].style.display = "none";
	}
	if (!inputs[1].value.match(re) || inputs[1].value === "") {
		inputs[1].style.borderColor = "hsl(7, 100%, 68%)";
		error[1].style.display = "inline-block";
		errors.push("Sorry, invalid format here");
	} else {
		inputs[1].style.borderColor = "hsl(0, 0%, 100%)";
		error[1].style.display = "none";
	}
	if (textArea.value === "") {
		textArea.style.borderColor = "hsl(7, 100%, 68%)";
		error[2].style.display = "inline-block";
		errors.push("Sorry, message can't be empty");
	} else {
		textArea.style.borderColor = "hsl(0, 0%, 100%)";
		error[2].style.display = "none";
	}
	if (errors.length === 0) {
		form.reset();
		inputs[0].style.borderColor = "hsl(0, 0%, 100%)";
		inputs[0].previousElementSibling.style.display = "inline";
		inputs[1].style.borderColor = "hsl(0, 0%, 100%)";
		inputs[1].previousElementSibling.style.display = "inline";
		textArea.style.borderColor = "hsl(0, 0%, 100%)";
		textArea.previousElementSibling.style.display = "inline";
		alert("Thank you for sending message!");
	}
});

console.log(aboutPhoto);

function screentChanges(e) {
	if (mobileWidth.matches) {
		aboutPhoto.src = "./assets/images/image-profile-mobile.webp";
	} else if (tabletWidth.matches) {
		aboutPhoto.src = "./assets/images/image-profile-tablet.webp";
	} else {
		aboutPhoto.src = "./assets/images/image-profile-desktop.webp";
		console.log("desktop");
	}
}

window.addEventListener("load", screentChanges);
window.addEventListener("resize", screentChanges);
