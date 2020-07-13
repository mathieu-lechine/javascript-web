/*
Exercice : changer la couleur des divs
*/

var divs = document.getElementsByTagName("div")

function changeBgColor_for_divs(couleur){
    for(div of divs){
        div.style.backgroundColor = couleur;
    }
}

function colorBackground(e){
    var pressedKey = String.fromCharCode(e.charCode).toUpperCase();
    var couleur;
    switch (pressedKey) {
        case "R":
            couleur = "red";
            break;
        case "B":
            couleur = "white";
            break;
        case "J":
            couleur = "yellow";
            break;
        case "V":
            couleur = "green";
            break;
    }
    if (couleur !== undefined)
        changeBgColor_for_divs(couleur);
}
document.addEventListener("keypress", colorBackground);












/*
document.addEventListener("keypress", function (e) {
    var touche = String.fromCharCode(e.charCode); // Récupération de la touche pressée
    touche = touche.toUpperCase(); // Pour gérer indifféremment minuscules et majuscules
    var couleur = "";
    switch (touche) {
    case "B":
        couleur = "white";
        break;
    case "J":
        couleur = "yellow";
        break;
    case "V":
        couleur = "green";
        break;
    case "R":
        couleur = "red";
        break;
    default:
        console.log("Touche " + touche + " non gérée");
    }
    // Changement de couleur de fond pour toutes les divs
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = couleur;
    }
});
*/