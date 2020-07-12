function infosLiens(){
	// var Elts = document.querySelectorAll("a[href]");
	var Elts = document.getElementsByTagName("a")
	var n = Elts.length;
	// affiche le nombre de lien
	console.log(n);
	// affiche le premier lien
	console.log(Elts[0].href);
	// affiche le dernier lien
	console.log(Elts[n-1].href);
}
infosLiens();



function possede(id, classe){
	var elt = document.getElementById(id);
	if (elt===null)
		console.error(`Aucun élément ne possede l'identifiant ${id}`);
	else
		console.log(elt.classList.contains(classe));
}

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur
