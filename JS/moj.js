const buttonOne = document.querySelector(".buttonOne");
const buttonTwo = document.querySelector(".buttonTwo");
const buttonThree = document.querySelector(".buttonThree");
const buttonFour = document.querySelector(".buttonFour");
let text = document.querySelector(".text");
const pictureOne = document.querySelector(".pictureOne");
const pictureTwo = document.querySelector(".pictureTwo");

let start = 14;

const upper = () => {
	if (start >= 30) {
		return;
	}
	start++;
	text.style.fontSize = start + "px";
};

const lower = () => {
	if (start <= 14) {
		return;
	}
	start--;
	text.style.fontSize = start + "px";
};

const color = () => {
	const a = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	const c = Math.floor(Math.random() * 255);
	text.style.fontWeight = "bold";
	text.style.color = `rgba(${a},${b},${c})`;
};
const add = () => {
	pictureOne.classList.toggle("dumplings");
	pictureTwo.classList.toggle("pizza");
};
buttonOne.addEventListener("click", upper);
buttonTwo.addEventListener("click", lower);
buttonThree.addEventListener("click", color);
buttonFour.addEventListener("click", add);
