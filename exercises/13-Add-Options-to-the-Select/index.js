import { create } from "domain";

window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
	let select = document.querySelector("#mySelect");

	for (let el of countries) {
		let option = document.createElement("option");
		option.innerHTML = el;
		option.value = el;
		select.appendChild(option);
	}

	select.addEventListener("change", e => {
		alert(e.target.value);
	});

	// your code here
};
