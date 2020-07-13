/*
Exercice : compter les clics
*/

var nbClicks = 0;
var activeComptClick = true;

function compteClicks(e){
	if (activeComptClick){
		nbClicks ++;
		document.getElementById("compteurClics").textContent = nbClicks;	
	}
}

function deactivateCompt(e){
	activeComptClick = !activeComptClick
}


document.getElementById("clic").addEventListener("click", compteClicks);
document.getElementById("desactiver").addEventListener("click", deactivateCompt);






/*
function clic() {
    compteurClics++;
    document.getElementById("compteurClics").textContent = compteurClics;
}

var compteurClics = 0;

document.getElementById("clic").addEventListener("click", clic);

document.getElementById("desactiver").addEventListener("click", function () {
    document.getElementById("clic").removeEventListener("click", clic);
});
*/