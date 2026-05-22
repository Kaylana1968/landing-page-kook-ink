class ContactCard extends HTMLElement {
	connectedCallback() {
		const icon = this.getAttribute("icon");
		const link = this.getAttribute("link");
		const value = this.getAttribute("value");

		this.innerHTML = `
      <div
        class="flex items-center bg-gray-200/50 p-2 rounded-lg gap-2 shadow-lg lg:block lg:relative lg:text-center"
      >
        <div
          class="bg-gray-50 p-2 rounded-full text-orange-500 shadow-lg lg:absolute lg:top-0 lg:left-1/2 lg:-translate-1/2 lg:border-8 lg:border-gray-200/50"
        >
          ${icon}
        </div>

        <a
          target="_blank"
          href="${link}"
          class="lg:block lg:mt-6"
        >
          ${value}
        </a>
      </div>
    `;
	}
}

export default ContactCard;
