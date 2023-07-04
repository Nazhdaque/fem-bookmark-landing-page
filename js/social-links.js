import { html, render } from "lit-html";

const containers = [
	document.querySelector(".main-footer__group"),
	document.querySelector(".modal"),
];
const data = ["facebook", "twitter"];
const links = [];
const linkTemplate = name => html`
	<li>
		<a href="#" class="social-link logo-link">
			<svg class="logo-link__img">
				<use href="/images/sprites/social.svg#icon-${name}"></use>
			</svg>
		</a>
	</li>
`;
const componentTemplate = links =>
	html`<ul class="social-links">
		${links}
	</ul>`;

data.forEach(name => links.push(linkTemplate(name)));
containers.forEach(container => render(componentTemplate(links), container));
