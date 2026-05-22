class ContactCard extends HTMLElement {
	connectedCallback() {
		const icon = this.getAttribute("icon");
		const link = this.getAttribute("link");
		const value = this.getAttribute("value");

		this.innerHTML = `
      <div
        class="flex items-center bg-gray-200/50 p-2 rounded-lg gap-2 sm:block sm:relative sm:text-center shadow-sm"
      >
        <div
          class="bg-gray-50 p-2 rounded-full text-orange-500 sm:absolute sm:top-0 sm:left-1/2 sm:-translate-1/2 sm:border-8 sm:border-gray-200/50 shadow-sm"
        >
          ${icon}
        </div>

        <a
          target="_blank"
          href="${link}"
          class="sm:block sm:mt-6"
        >
          ${value}
        </a>
      </div>
    `;
	}
}

export default ContactCard;
