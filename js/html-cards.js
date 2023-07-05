import { html, render } from "lit-html";

const cardsContainer = document.querySelector(".cards");
const data = {
	chrome: 62,
	firefox: 55,
	opera: 46,
};
const capitalize = string => string[0].toUpperCase() + string.slice(1);

const cardTemplate = (name, version) => html`
	<div class="card grid-items-c">
		<div class="card__top">
			<svg class="card__img">
				<use href="/images/sprites/browsers.svg#logo-${name}"></use>
			</svg>
			<h3 class="ttl-sm">Add to ${capitalize(name)}</h3>
			<p class="txt-xs card__txt">Minimum version ${version}</p>
		</div>
		<img class="dots" src="/images/bg-dots.svg" alt="" />
		<button class="btn txt-xs btn--p-500">Add & Install Extension</button>
	</div>
`;

const cards = [];

for (const key in data) {
	const name = key;
	const version = data[key];
	const card = cardTemplate(name, version);
	cards.push(card);
}

render(cards, cardsContainer);
