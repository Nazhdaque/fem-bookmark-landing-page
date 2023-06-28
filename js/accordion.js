import Accordion from "accordion-js";

new Accordion(".ac-container", {
	duration: 200,
	showMultiple: true,
});

const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
	toggle.classList.toggle("active");
});
