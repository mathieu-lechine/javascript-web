/*
Exercice : modifier les couleurs
*/

var couleurTexte = prompt("Entrez la couleur du texte :", "white");
var couleur = prompt("Please enter the background color", "red");

if (couleur != null) {
	var elts = document.getElementsByTagName("div");
	for (var i=0; i<elts.length; i++){
		elts[i].style.color = couleurTexte
		elts[i].style.backgroundColor = couleur
	}
}


















































/*
var couleurTexte = prompt("Entrez la couleur du texte :");
var couleurFond = prompt("Entrez la couleur du fond :");

var divsElts = document.getElementsByTagName("div");
for (var i = 0; i < divsElts.length; i++) {
    divsElts[i].style.color = couleurTexte;
    divsElts[i].style.backgroundColor = couleurFond;
}
*/