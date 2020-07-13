/*
Exercice : informations sur un élément
*/

var style_cont = getComputedStyle(document.getElementById("contenu"));

var elt_ul = document.createElement("ul");

var elt_li_height = document.createElement("li");
elt_li_height.appendChild(document.createTextNode("Hauteur : " + style_cont.height));
elt_ul.appendChild(elt_li_height);

var elt_li_width = document.createElement("li");
elt_li_width.appendChild(document.createTextNode("Largeur : " + style_cont.width));
elt_ul.appendChild(elt_li_width);


document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément"));
document.getElementById("infos").appendChild(elt_ul);















































/*
var styleElement = getComputedStyle(document.getElementById("contenu"));
var listeElt = document.createElement("ul");
var longueurElt = document.createElement("li");
longueurElt.textContent = "Longueur : " + styleElement.width;
var hauteurElt = document.createElement("li");
hauteurElt.textContent = "Hauteur : " + styleElement.height;
listeElt.appendChild(hauteurElt);
listeElt.appendChild(longueurElt);
document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément"));
document.getElementById("infos").appendChild(listeElt);
*/