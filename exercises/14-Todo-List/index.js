// Your code here
let input = document.querySelector("#addToDo");
let list = document.querySelector("ul");

input.addEventListener("blur", e => {
	let li = document.createElement("li");
	let span = document.createElement("span");
	let icon = document.createElement("i");
	icon.classList.add("fa");
	icon.classList.add("fa-trash");
	let text = document.createTextNode(" " + e.target.value);
	span.appendChild(icon);
	li.appendChild(span);
	li.appendChild(text);
	li.addEventListener("click", e => {
		list.removeChild(e.target.parentNode.parentNode);
	});
	list.appendChild(li);
});

let trash = document.querySelectorAll(".fa-trash");

for (let el of trash) {
	el.addEventListener("click", e => {
		list.removeChild(e.target.parentNode.parentNode);
	});
}
