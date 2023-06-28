const tablist = document.querySelector("ul[role='tablist']");
const tabs = [...tablist.querySelectorAll("a")];
const panels = document.querySelectorAll("section[role='tabpanel']");

tabs.forEach((tab, i) => {
	tab.addEventListener("click", e => {
		e.preventDefault();
		const currentTab = tablist.querySelector("[aria-selected]");
		e.currentTarget !== currentTab && switchTab(currentTab, e.currentTarget);
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
				break;
			case "ArrowRight":
				e.preventDefault();
				tabs[index + 1] && switchTab(e.currentTarget, tabs[index + 1]);
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

	prevTab.removeAttribute("aria-selected");
	prevTab.setAttribute("tabindex", "-1");

	panels[tabs.indexOf(prevTab)].hidden = true;
	panels[tabs.indexOf(nextTab)].hidden = false;
};
