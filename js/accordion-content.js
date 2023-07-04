import { html, render } from "lit-html";
import { FetchWrapper } from "./fetchwrapper.js";

const accContainer = document.querySelector(".ac-container");
const API = new FetchWrapper("");
const data = await API.get("accordion-data.json");
const accItems = [];
const accTemplate = (question, answer) => html`
	<div class="ac">
		<h3 class="txt-md">
			<button type="button" class="ac-trigger">
				<span class="ellipsis">${question}</span>
				<svg class="ac-arrow">
					<use href="/images/sprites/ac-arrow.svg#icon-arrow"></use>
				</svg>
			</button>
		</h3>

		<div class="ac-panel">
			<p class="ac-text txt-rg">${answer}</p>
		</div>
	</div>
`;

data.forEach(entry => {
	const { question, answer } = entry;
	const accItem = accTemplate(question, answer);
	accItems.push(accItem);
});

render(accItems, accContainer);
