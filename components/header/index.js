import onSearch from "./search.js";

class CustomHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
      <header class="sticky flex items-center top-0 left-0 h-12 sm:h-20 bg-white border-b border-b-gray-300 shadow-md z-10">
        <a href="index.html" class="flex items-center h-full w-min sm:pr-4 select-none">
          <div class="h-full aspect-square p-2 sm:p-4">
            <img src="images/logo.png" height="300" width="300" />
          </div>
          <span class="hidden sm:inline whitespace-nowrap text-orange-500 text-3xl"> Kook Ink </span>
        </a>

        <div class="relative ml-auto mr-6 ">
          <input
            type="search"
            autocomplete="off"
            placeholder="Rechercher..."
            class="peer outline-none placeholder:text-gray-400 border border-gray-300 py-1 px-2 rounded-lg hover:border-gray-400 transition-colors"
          />

          <div
            class="opacity-0 scale-y-75 pointer-events-none peer-focus:opacity-100 peer-focus:scale-y-100 peer-focus:pointer-events-auto hover:opacity-100 hover:scale-y-100 hover:pointer-events-auto focus-within:opacity-100 focus-within:scale-y-100 focus-within:pointer-events-auto transition-all duration-300 origin-top absolute top-[calc(100%+0.25rem)] left-0 w-full border border-gray-500 rounded-lg bg-white shadow-sm"
          >
            <ul class="p-1">
              <li class="p-2 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-search-x-icon lucide-search-x"
                >
                  <path d="m13.5 8.5-5 5" />
                  <path d="m8.5 8.5 5 5" />
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <span>Aucun résultat</span>
              </li>
            </ul>
          </div>
        </div>
      </header>
    `;

		const listElement = this.querySelector("ul");
		const inputElement = this.querySelector("input");

		inputElement.addEventListener("input", (e) => onSearch(e, listElement));
	}
}

export default CustomHeader;
