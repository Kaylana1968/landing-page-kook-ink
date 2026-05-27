import CustomHeader from "./components/header/index.js";
import CustomMain from "./components/main.js";
import NoResult from "./components/header/no-result.js";
import ContactCard from "./components/contact-card.js";
import FaqCard from "./components/faq-card.js";
import PricingCard from "./components/pricing-card.js";

customElements.define("custom-header", CustomHeader);
customElements.define("custom-main", CustomMain);
customElements.define("no-result", NoResult);
customElements.define("contact-card", ContactCard);
customElements.define("faq-card", FaqCard);
customElements.define("pricing-card", PricingCard);

window.addEventListener("load", () => {
	const hash = window.location.hash;

	if (hash) {
		Promise.all([
			customElements.whenDefined("custom-header"),
			customElements.whenDefined("custom-main")
		]).then(() => {
			document.querySelector(hash)?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		});
	}
});
