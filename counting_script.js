const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");

increment.addEventListener('click', function() {
	const number = document.getElementById("number");
	let count = parseInt(number.textContent);
	count++;
	number.textContent = count;
})

decrement.addEventListener('click', function() {
	const number = document.getElementById("number");
	let count = parseInt(number.textContent);
	count--;
	number.textContent = count;
})


reset.addEventListener('click', function() {
	const number = document.getElementById("number");
	let count = parseInt(number.textContent);
	count = 0
	number.textContent = count;
})
