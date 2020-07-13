/*
Exercice : modifier une liste
*/



function addDessertInList(e){
	var dessert_str = prompt("Entrez le nom du nouveau dessert :");
	if (dessert_str !== null){
		var elt_li = document.createElement("li");
		elt_li.textContent = dessert_str;
		elt_li.addEventListener("click", changeTextLi);
		document.getElementById("desserts").appendChild(elt_li);
	}
}

function changeTextLi(e){
	var new_name = prompt("Modifiez le nom du dessert :", e.target.textContent);
	if (new_name !== null){
		e.target.textContent =  new_name;
	}
}

document.getElementsByTagName("button")[0].addEventListener("click", addDessertInList);








/*
document.querySelector("button").addEventListener("click", function () {
    var nomDessert = prompt("Entrez le nom du nouveau dessert :");

    var dessertElt = document.createElement("li");
    dessertElt.textContent = nomDessert;
    dessertElt.addEventListener("click", function (e) {
        var nouveauNom = prompt("Modifiez le nom du dessert :", e.target.textContent);
        e.target.textContent = nouveauNom;
    });

    document.getElementById("desserts").appendChild(dessertElt);
});
*/