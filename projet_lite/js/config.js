
hideChoixDifficulte();

function hideChoixDifficulte(){
	var elem = document.getElementById("choixDifficulte");
	elem.style.visibility = "hidden";
}

function afficheChoixDifficulte(){
	//console.log("affiche");
	var elem = document.getElementById("choixDifficulte");
	elem.style.visibility = "";
}


function choixJeu(num){
	setChoixJeu(num);
	afficheChoixDifficulte();
	unselectJeu();
	selectJeu(num);
}

function selectJeu(num){
	var elem = document.getElementById("jeu"+num);
	elem.style.background = "#296487";
	elem.style.color = "white";
	elem.style.boxShadow= "1px 1px 5px 1px black";
}

function unselectJeu(){
	var elem = document.getElementById("jeu1");
	elem.style.background = "lightgrey";
	elem.style.color = "black";
	elem.style.boxShadow= "";

	var elem2 = document.getElementById("jeu2");
	elem2.style.background = "lightgrey";
	elem2.style.color = "black";
	elem2.style.boxShadow= "";
}










