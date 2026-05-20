class CustomMain extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
      <main class="px-2 sm:px-4 bg-gray-50 min-h-[calc(100dvh-3rem)] sm:min-h-[calc(100dvh-5rem)]">
        ${this.innerHTML}
      </main>
    `;
	}
}

export default CustomMain;
