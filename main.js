import "./css/main.css";
import "./js/cards-content.js";
import "./js/form-validation.js";
import "./js/social-links.js";
import { Modal } from "./js/modal.js";
await import("./js/tabs-content.js");
await import("./js/tabs.js");
await import("./js/accordion-content.js");
await import("./js/accordion.js");

const modal = new Modal();
modal.initOn(768);

// console.log(
// 	"%cCoded by ✨Nazhdaque✨\nhttps://www.frontendmentor.io/profile/Nazhdaque",
// 	"background: #222; color: chartreuse; font-size: 1.25rem"
// );
