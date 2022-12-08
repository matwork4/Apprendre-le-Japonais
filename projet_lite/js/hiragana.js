

closeWriting();


//Ferme la fenêtre de caractère
function closeWriting(){
	var elem = document.getElementById("displayWriting");
	elem.style.display = "none";
}

//Ouvre la fenêtre d'un caractère
function openWriting(car){
	var elem = document.getElementById("displayWriting");
	elem.style.display = "";
	var elem2 = document.getElementById("img");
	if(getChoixType()=="hiragana"){
		elem2.style.background = "url('../assets/writing/hiragana/"+car+".png')";
	}else{
		elem2.style.background = "url('../assets/writing/katakana/"+car+".png')";
	}
	elem2.style.backgroundSize = "cover";
}









