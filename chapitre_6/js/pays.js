/*
Exercice : autocomplétion d'un pays
*/

// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

var suggs = document.getElementById("suggestions");
var paysElt = document.querySelector("input")
paysElt.addEventListener("input", function (e){
    var txt = paysElt.value;
    suggs.innerHTML = "";
    listePays.forEach(function (pays) {
        if (pays.indexOf(txt)>-1) {
            var elt = document.createElement("div");
            elt.textContent = pays;
            elt.classList.add("suggestion");
            elt.addEventListener("click", function(e){
                var clickedTxt = e.target.textContent;
                paysElt.value = clickedTxt;
                suggs.innerHTML = "";
            })
            suggs.appendChild(elt);
        }
    })
})



/*

var paysElt = document.querySelector("input");
var suggestionsElt = document.getElementById("suggestions");

// Gère le changement de valeur saisie
paysElt.addEventListener("input", function () {
    suggestionsElt.innerHTML = ""; // Vidage de la liste des suggestions
    listePays.forEach(function (pays) {
        // Si valeur en cours de saisie correspond au début du pays
        if (pays.indexOf(paysElt.value) === 0) {
            var suggestionElt = document.createElement("div");
            suggestionElt.classList.add("suggestion");
            suggestionElt.textContent = pays;
            // Gère le lic sur une suggestion
            suggestionElt.addEventListener("click", function (e) {
                // Remplacement de la valeur saisie par la suggestion
                paysElt.value = e.target.textContent;
                // Vidage de la liste des suggestions
                suggestionsElt.innerHTML = "";
            });
            suggestionsElt.appendChild(suggestionElt);
        }
    });
});

*/