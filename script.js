function onSearch(e) {
	console.log(e.target.value);
}

document.getElementById("search-input").addEventListener("input", onSearch);
