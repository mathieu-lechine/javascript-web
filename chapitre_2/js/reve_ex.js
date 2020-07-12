// TODO : écrire la fonction compterElements
function compterElements(css_selector){
	return document.querySelectorAll(css_selector).length
}


console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements(".adjectif")); // Doit afficher 3
console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2
