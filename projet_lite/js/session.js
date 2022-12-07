



/* ===================================
*  Getter et setter choixJeu :
*  Permet de créer une variable session correspondante a l'ID d'un jeu
*  ===================================
*/
function setChoixJeu(num){
	sessionStorage.setItem('idJeu',num);
}
function getChoixJeu(){
	let a = sessionStorage.getItem('idJeu')
	//console.log("idJeu = "+a);
	return a;
}


function setChoixLecon(num){
	sessionStorage.setItem('idLecon',num);
}
function getChoixLecon(){
	let a = sessionStorage.getItem('idLecon')
	//console.log("idJeu = "+a);
	return a;
}

/* Difficulté : facile, normale, difficile
 *
 */
function setChoixDifficulte(s){
	sessionStorage.setItem('difficulte',s);
}
function getChoixDifficulte(){
	let a = sessionStorage.getItem('difficulte')
	//console.log("idJeu = "+a);
	return a;
}






