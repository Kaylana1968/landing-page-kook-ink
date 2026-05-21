const searchElements = [
	{
		label: "Visualiser une recette",
		link: "recipe.html#view"
	},
	{
		label: "Créer une recette",
		link: "recipe.html#create"
	},
	{
		label: "Sauvegarder une recette",
		link: "recipe.html#save"
	},
	{
		label: "Visualiser un post",
		link: "post.html#view"
	},
	{
		label: "Créer un post",
		link: "post.html#create"
	},
	{
		label: "Sauvegarder un post",
		link: "post.html#save"
	},
	{
		label: "Nous contacter",
		link: "index.html#contact"
	}
];

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
		<li>
			<a
				href="${link}"
				class="block p-2 cursor-pointer size-full hover:bg-gray-100 focus:bg-gray-200 rounded transition-colors"
				onclick="document.getElementById('search-input').value = ''"
			>
				${label}
			</a>
		</li>
	`;
}

function onSearch(e, targetElement) {
	const searchValue = e.target.value;
	const filteredElements = searchValue ? getFilteredElements(searchValue) : []; // empty list if no searchValue

	targetElement.innerHTML =
		filteredElements.length === 0
			? "<li><no-result></no-result></li>"
			: filteredElements.slice(0, 5).map(getListElement).join(""); // limit of 5 elements
}

export default onSearch;
