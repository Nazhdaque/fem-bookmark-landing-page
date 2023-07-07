const tablist = document.querySelector("ul[role='tablist']");
const tabs = [...tablist.querySelectorAll("a")];
const panels = document.querySelectorAll("section[role='tabpanel']");

const moveUnderscore = (tabs, currentTab, targetTab) => {
	const indexNext = tabs.indexOf(targetTab);
	const indexPrev = tabs.indexOf(currentTab);
	const indexLast = tabs.length - 1;
	const firstLast = indexPrev === 0 && indexNext === indexLast;
	const lastFirst = indexNext === 0 && indexPrev === indexLast;

	if (indexNext > indexPrev) {
		if (firstLast) {
			currentTab.classList.replace("r", "l");
		} else {
			targetTab.classList.replace("r", "l");
			currentTab.classList.replace("l", "r");
		}
	} else {
		targetTab.classList.replace("l", "r");
		currentTab.classList.replace("r", "l");
		lastFirst && targetTab.classList.replace("r", "l");
		indexNext === 0 && tabs[indexLast].classList.replace("l", "r");
	}
};

tabs.forEach((tab, i) => {
	tab.addEventListener("click", e => {
		e.preventDefault();
		const currentTab = tablist.querySelector("[aria-selected='true']");
		const targetTab = e.currentTarget;

		targetTab !== currentTab && switchTab(currentTab, targetTab);

		moveUnderscore(tabs, currentTab, targetTab);
	});

	tab.addEventListener("keydown", e => {
		const index = tabs.indexOf(e.currentTarget);
		switch (e.code) {
			case "ArrowDown":
				e.preventDefault();
				panels[i].focus();
				break;
			case "ArrowLeft":
				e.preventDefault();
				tabs[index - 1] && switchTab(e.currentTarget, tabs[index - 1]);
				// --- underline
				index !== 0 && tabs[index - 1].classList.replace("l", "r");
				tabs[index].classList.replace("r", "l");
				break;
			case "ArrowRight":
				e.preventDefault();
				tabs[index + 1] && switchTab(e.currentTarget, tabs[index + 1]);
				// --- underline
				index !== tabs.length - 1 &&
					tabs[index + 1].classList.replace("r", "l");
				tabs[index].classList.replace("l", "r");
				break;
		}
	});
});

panels.forEach((panel, i) => {
	panel.addEventListener("keydown", e => {
		switch (e.code) {
			case "ArrowUp":
				e.preventDefault();
				tabs[i].focus();
				break;
		}
	});
});

const switchTab = (prevTab, nextTab) => {
	nextTab.focus();
	nextTab.removeAttribute("tabindex");
	nextTab.setAttribute("aria-selected", "true");

	prevTab.setAttribute("aria-selected", "false");
	prevTab.setAttribute("tabindex", "-1");

	panels[tabs.indexOf(prevTab)].hidden = true;
	panels[tabs.indexOf(prevTab)].removeAttribute("aria-hidden");
	panels[tabs.indexOf(nextTab)].hidden = false;
	panels[tabs.indexOf(nextTab)].setAttribute("aria-hidden", "false");
};
