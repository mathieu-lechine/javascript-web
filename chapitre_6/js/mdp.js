/*
Exercice : vérification de mots de passe
*/

var form = document.querySelector("form");
var infoMdp = document.getElementById("infoMdp")

form.addEventListener("submit", function (e){
    var mdp1 = form.elements.mdp1.value;
    var mdp2 = form.elements.mdp2.value;
    var regex_mdp = /[0-9]/
    
    if (mdp1!==mdp2) {
        infoMdp.textContent = "Erreur: les deux mots de passe doivent être identiques"
        e.preventDefault(); // Annulation de l'envoi des données
    } else if (mdp1.length<6) {
        infoMdp.textContent = "Erreur: la longueur minimale du mot de passe est de 6 caractères"
        e.preventDefault(); // Annulation de l'envoi des données
    } else if (!regex_mdp.test(mdp1)) {
        infoMdp.textContent = "Erreur: le mot de passe doit contenir au moins un chiffre"
        e.preventDefault(); // Annulation de l'envoi des données
    } else
        infoMdp.textContent = ""

})






/*
var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    var mdp1 = form.elements.mdp1.value;
    var mdp2 = form.elements.mdp2.value;
    var message = "Mots de passe OK";
    if (mdp1 === mdp2) {
        if (mdp1.length >= 6) {
            var regexMdp = /\d+/;
            if (!regexMdp.test(mdp1)) {
                message = "Erreur : le mot de passe ne contient aucun chiffre";
            }
        } else {
            message = "Erreur : la longueur minimale du mot de passe est de 6 caractères";
        }
    } else {
        message = "Erreur : les mots de passe saisis sont différents";
    }
    document.getElementById("infoMdp").textContent = message;
    e.preventDefault();
});
*/