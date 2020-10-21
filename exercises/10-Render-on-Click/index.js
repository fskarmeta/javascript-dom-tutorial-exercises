let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let div = document.createElement("div");
	div.style.background = "yellow";
	div.innerHTML = "Hello World";
	document.body.appendChild(div);
});
