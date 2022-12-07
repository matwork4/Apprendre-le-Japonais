/* -------------
 *   Variables
 * -------------
 */
var score = 0;
var page = 1;
var dejaJoue = false;
var idBonneReponse;
var idLecon = getChoixLecon();
var idJeu = getChoixJeu();
var difficulte = getChoixDifficulte();
var leconMelangee = initVocMelange(idLecon);
var nbReponses = 0;
var devinePrononciation;

if(difficulte == "facile"){
	nbReponses = 2;
}else if(difficulte == "normal"){
	nbReponses = 4;
}else if(difficulte == "difficile"){
	nbReponses = 6;
}else{
	console.log("Erreur difficulte : "+difficulte);
}

if(idJeu == 1){
	devinePrononciation = true;
}else{
	devinePrononciation = false;
}


hideTerminer();
hideSuivant();

function hideTerminer(){
	var elem = document.getElementById("terminer");
	elem.style.visibility = "hidden";
}
function afficheTerminer(){
	//console.log("affiche");
	var elem = document.getElementById("terminer");
	elem.style.visibility = "";
}

function hideSuivant(){
	var elem = document.getElementById("suivant");
	elem.style.visibility = "hidden";
}
function afficheSuivant(){
	//console.log("affiche");
	var elem = document.getElementById("suivant");
	elem.style.visibility = "";
}


/* Renvoie une liste de N reponses aleatoires avec 1 correcte
 *
 */
function genereteAnswers(){
	let l = [];
	let isB = false; //Il y a une bonne reponse
	let random = 0;
	//genere N reponses differentes
	for(let i=0;i<nbReponses;i++){
		random = getRandomInt(leconMelangee.length);
		if(devinePrononciation){
			l.push(leconMelangee[random].traduction);
		}else{
			l.push(leconMelangee[random].caractere);
		}
		if(random == page-1){
			isB = true;
		}
	}
	//Si il n'y a pas déjà une bonne réponse
	if(!isB){
		//choisit l'id de la bonne reponse
		let idB = getRandomInt(nbReponses);
		if(devinePrononciation){
			l[idB]=leconMelangee[page-1].traduction;
		}else{
			l[idB]=leconMelangee[page-1].caractere;
		}
	}
	return l;
}


if(devinePrononciation){
	addQuestionDOM(leconMelangee[page-1].caractere);
}else{
	addQuestionDOM(leconMelangee[page-1].traduction);
}
//var l = ['A','B','C','D'];
var l = genereteAnswers();
if(devinePrononciation){
	addReponsesDOM(l,leconMelangee[page-1].traduction);
}else{
	addReponsesDOM(l,leconMelangee[page-1].caractere);
}

/* Ajoute le caractère à deviner
 */
function addQuestionDOM(q){
	var elem = document.getElementById("caractere");
	elem.innerHTML = q;
}

/* Prend une liste de réponses en paramètre 
 * pour l'insérer dans la div réponses
 */
function addReponsesDOM(l,bonneReponse){

	var elem = document.getElementById("reponses");
	var r;

	for(let i=0;i<l.length;i++){
		//console.log("reponse "+l[i]);

		r = document.createElement("div");
		r.setAttribute("class","btn");
		r.setAttribute("id","r"+(i+1));
		if(l[i] == bonneReponse){
			r.setAttribute("onclick","repondre('r"+(i+1)+"',true)");
			idBonneReponse = "r"+(i+1);
		}else{
			r.setAttribute("onclick","repondre('r"+(i+1)+"')",false);
		}
		r.innerHTML = l[i];
		elem.appendChild(r);
	}
}

/* Retire la liste des réponses du DOM
 */
function removeReponsesDOM(){
	document.getElementById("reponses").innerHTML = "";
}


/* Fonction pour repondre 
*/
function repondre(id,isBonneReponse){

  if(!dejaJoue){
	if(isBonneReponse){
		bonneReponse();
		score++;
	}else{
		mauvaiseReponse(id);
		bonneReponse(idBonneReponse);
	}
	afficheSuivant();
	dejaJoue = true;
  }

}

//Modifie le css de la  bonne reponse
function bonneReponse(){
	var elem = document.getElementById(idBonneReponse);
	elem.style.background = "seagreen";
	elem.style.boxShadow = "1px 1px 5px 1px black";
	elem.style.color = "white";
}

//Modifie le css de la mauvaise reponse
function mauvaiseReponse(id){
	var elem = document.getElementById(id);
	elem.style.background = "#e66157";
	elem.style.boxShadow = "1px 1px 5px 1px black";
	elem.style.color = "white";
}


function initVocMelange(idL){
	if(idL == 1){
		return shuffle(L1.list);
	}else if(idL == 2){
		return shuffle(L2.list);
	}else if(idL == 3){
		return shuffle(L3.list);
	}else{
		console.log("Erreur idLecon : "+idL);
	}
	
}






/* ===================================
*  Fonction shuffle :
*  Melange un tableau (array) et retourne le tableau mélangé
*  ===================================
*/
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

  return array;
}

/* Renvoie une valeur aléatoire entre 0 et max-1
*/
function getRandomInt(max) {
  	return Math.floor(Math.random() * max);
}





