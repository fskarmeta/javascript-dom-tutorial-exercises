let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let ul = document.querySelector("#myList");
	let li = document.createElement("li");
	li.innerHTML = "Fourth element";
	ul.appendChild(li);
});
