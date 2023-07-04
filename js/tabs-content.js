import { html, render } from "lit-html";
import { FetchWrapper } from "./fetchwrapper.js";

const tabpanelsContainer = document.querySelector(".cvp");
const tablistContainer = document.querySelector(".cvp__top-group");
const API = new FetchWrapper("");
const data = await API.get("tabs-data.json");
const tabpanels = [];
const tabs = [];
const tabTemplate = (index, tabName) => html`
	<li role="presentation">
		<a
			href="#section-${index + 1}"
			class="tab"
			role="tab"
			id="tab-${index + 1}"
			tabindex="${index === 0 ? 0 : -1}"
			aria-selected="${index === 0 ? true : false}"
			><span class="ellipsis">${tabName}</span></a
		>
	</li>
`;
const tabpanelTemplate = (index, title, text) => html`
	<section
		id="section-${index + 1}"
		role="tabpanel"
		aria-labelledby="tab-${index + 1}"
		tabindex="-1"
		aria-hidden="${index === 0 ? false : true}"
		?hidden="${index !== 0 && true}">
		<div class="tabpanel__content md--grid-temp-col-1">
			<picture class="tabpanel__pic img-bg md--place-items-c">
				<img
					class="tabpanel__img"
					src="/images/illustration-features-tab-${index + 1}.svg"
					alt="" />
			</picture>

			<div class="tabpanel__info md--place-items-c md--padding-0">
				<div class="info-block md--t-align-c">
					<h3 class="ttl-md">${title}</h3>
					<p>${text}</p>
					<button class="btn txt-xs btn--p-500 md--d-none">More Info</button>
				</div>
			</div>
		</div>
	</section>
`;
const tablistTemplate = tabs => html`
	<ul class="txt-rg tablist md--grid-temp-col-1" role="tablist">
		${tabs}
	</ul>
`;
const tablist = tablistTemplate(tabs);

data.forEach((entry, index) => {
	const { tab: tabName, title, text } = entry;
	const tab = tabTemplate(index, tabName);
	tabs.push(tab);
	const tabpanel = tabpanelTemplate(index, title, text);
	tabpanels.push(tabpanel);
});

render(tablist, tablistContainer);
render(tabpanels, tabpanelsContainer);
