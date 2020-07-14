/*
Exercice : ballon rebondissant
*/
//parameter
var xMin = 0;
var vitesse = 10;



var ballon_direction = 1;
var ballon = document.getElementById("ballon");
var cadre = document.getElementById("cadre");
var animationId;
var largeurBallon = parseFloat(getComputedStyle(ballon).width);

document.getElementById("demarrer").addEventListener("click", function(e){
    document.getElementById("demarrer").disabled = true;
    document.getElementById("arreter").disabled = false;
    
    animationId = requestAnimationFrame(deplacerBallon);

})


document.getElementById("arreter").addEventListener("click", function(e){
    document.getElementById("demarrer").disabled = false;
    document.getElementById("arreter").disabled = true;

    cancelAnimationFrame(animationId);
})

function deplacerBallon(){
    var xBloc = parseFloat(getComputedStyle(ballon).left);
    var xMax = parseFloat(getComputedStyle(cadre).width);
    if((xBloc+largeurBallon>xMax) || (xBloc<xMin)) {
        ballon_direction = ballon_direction * (-1);
    }
    ballon.style.left = (xBloc + ballon_direction*vitesse) + "px";
    // Demande au navigateur d'appeler deplacerBloc dès que possible
    animationId = requestAnimationFrame(deplacerBallon);
}







/*

var cadre = document.getElementById("cadre");
var ballon = document.getElementById("ballon");
var vitesse = 7; // Valeur du déplacement en pixels
// Conversion en nombre du diamètre du ballon (valeur de la forme "XXpx")
var diametreBallon = parseFloat(getComputedStyle(ballon).width);
var animationId = null; // Identifiant de l'animation
var xMin = 0; // Position gauche minimale (bord gauche)
var direction = 1; // Sens de déplacement : 1 = droit, 2 = gauche

// Déplace le ballon vers la gauche ou la droite
function animerBallon() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xBallon = parseFloat(getComputedStyle(ballon).left);
    // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
    var xMax = parseFloat(getComputedStyle(cadre).width);
    // Si le ballon arrive à un bord du cadre
    if ((xBallon + diametreBallon > xMax) || (xBallon < xMin)) {
        // On inverse le sens de déplacement du ballon
        direction *= -1;
    }
    // Déplacement du ballon dans le sens actuel
    ballon.style.left = (xBallon + vitesse * direction) + "px";
    // Demande au navigateur d'appeler animerBallon dès que possible
    animationId = requestAnimationFrame(animerBallon);
}

var demarrerBtn = document.getElementById("demarrer");
var arreterBtn = document.getElementById("arreter");

demarrerBtn.addEventListener("click", function () {
    // Change l'état des boutons
    demarrerBtn.disabled = true;
    arreterBtn.disabled = false;
    // Démarre l'animation
    requestAnimationFrame(animerBallon);
});

arreterBtn.addEventListener("click", function () {
    // Change l'état des boutons
    demarrerBtn.disabled = false;
    arreterBtn.disabled = true;
    // Arrête l'animation
    cancelAnimationFrame(animationId);
});

*/