class FaqCard extends HTMLElement {
	connectedCallback() {
		const question = this.getAttribute("question");
		const answer = this.getAttribute("answer");

		const parentElement = document.createElement("div");
		parentElement.className =
			"rounded-lg overflow-hidden border border-gray-200 shadow-sm";

		const questionElement = document.createElement("div");
		questionElement.className =
			"z-20 relative flex items-center gap-2 justify-between bg-gray-100 p-2 cursor-pointer after:content-['▾']";
		questionElement.innerText = question;

		const collapseWrapper = document.createElement("div");
		collapseWrapper.dataset.inactive = "";
		collapseWrapper.className =
			"group grid transition-[grid-template-rows] duration-300 data-inactive:grid-rows-[0fr] grid-rows-[1fr]";

		const answerElement = document.createElement("div");
		answerElement.className =
			"overflow-hidden flex gap-2 transition-[border,padding] border-t border-t-gray-200 p-2 group-data-inactive:py-0 group-data-inactive:border-t-0 before:content-['↳']";
		answerElement.innerText = answer;

		collapseWrapper.appendChild(answerElement);

		questionElement.addEventListener("click", () => {
			const isInactive = "inactive" in collapseWrapper.dataset;
			if (isInactive) delete collapseWrapper.dataset.inactive;
			else collapseWrapper.dataset.inactive = "";
		});

		const additionnalClasses = {
			remove: ["cursor-pointer"],
			add: ["pointer-events-none", "cursor-not-allowed"]
		};

		collapseWrapper.addEventListener("transitionstart", () => {
			questionElement.classList.remove(...additionnalClasses.remove);
			questionElement.classList.add(...additionnalClasses.add);
		});

		collapseWrapper.addEventListener("transitionend", () => {
			questionElement.classList.remove(...additionnalClasses.add);
			questionElement.classList.add(...additionnalClasses.remove);
		});

		parentElement.appendChild(questionElement);
		parentElement.appendChild(collapseWrapper);
		this.appendChild(parentElement);
	}
}

export default FaqCard;
