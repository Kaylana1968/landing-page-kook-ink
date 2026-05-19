const searchElements = [
	{
		label: "Créer une recette",
		link: "recipe.html#create"
	},
	{
		label: "Créer un post",
		link: "post.html#create"
	}
];

const emptyElement = `
	<li class="p-2 flex items-center justify-center">
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-x-icon lucide-search-x">
			<path d="m13.5 8.5-5 5"/>
			<path d="m8.5 8.5 5 5"/><circle cx="11" cy="11" r="8"/>
			<path d="m21 21-4.3-4.3"/>
		</svg>
		<span>Aucun résultat</span>
	</li>
`;

function normalize(string) {
	return string
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase();
}

function getFilteredElements(searchValue) {
	const normalizedSearchValue = normalize(searchValue);

	return searchElements.filter(({ label }) => {
		const normalizedLabel = normalize(label);

		let elementIndex = 0;

		for (const char of normalizedSearchValue) {
			elementIndex = normalizedLabel.indexOf(char, elementIndex);

			if (elementIndex === -1) return false;
		}

		return true;
	});
}

function getListElement({ label, link }) {
	return `
		<li class="not-last:*:border-b *:border-b-gray-500">
			<a href="${link}" class="block p-2 cursor-pointer size-full">
				${label}
			</a>
		</li>
	`;
}

function onSearch(e) {
	const searchValue = e.target.value;
	const filteredElements = searchValue ? getFilteredElements(searchValue) : []; // empty list if no searchValue

	const searchResultElement = document.getElementById("search-result");
	searchResultElement.innerHTML =
		filteredElements.length === 0 ? emptyElement : filteredElements.map(getListElement).join("");
}

document.getElementById("search-input").addEventListener("input", onSearch);
