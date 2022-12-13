import React from 'react';
import '../styles/config.css';
import { Link } from "react-router-dom";

function Config() {

//hideChoixDifficulte();

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
	elem.style.background = "rgba(140, 80, 100, 0.85)";
	elem.style.color = "white";
	elem.style.boxShadow= "1px 1px 5px 1px black";
}

function unselectJeu(){
	var elem = document.getElementById("jeu1");
	elem.style.background = "rgba(255,255,255,0.85)";
	elem.style.color = "black";
	elem.style.boxShadow= "";

	var elem2 = document.getElementById("jeu2");
	elem2.style.background = "rgba(255,255,255,0.85)";
	elem2.style.color = "black";
	elem2.style.boxShadow= "";
}


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
	return parseInt(a);
}


function setChoixLecon(num){
	sessionStorage.setItem('idLecon',num);
}
function getChoixLecon(){
	let a = sessionStorage.getItem('idLecon')
	//console.log("idJeu = "+a);
	return parseInt(a);
}

/* Difficulté : facile, normale, difficile
 *
 */
function setChoixDifficulte(s){
	sessionStorage.setItem('difficulte',s);
}
function getChoixDifficulte(){
	let a = sessionStorage.getItem('difficulte')
	//console.log("difficulte = "+a);
	return a;
}

const divStyle = {
  visibility: 'hidden',
};


	return (
		<div class="main">

			<div id="choixJeu">
				<div id="jeu1" onClick={() => choixJeu(1)}>
					<p>Jeu 1 :</p>
					<p id="petit">Deviner la traduction</p>
				</div>
				<div id="jeu2" onClick={() => choixJeu(2)}>
					<p>Jeu 2 :</p>
					<p id="petit">Deviner le caractère</p>
				</div>
			</div>
			<div id="choixDifficulte" style={divStyle}>
				<p>Difficulté :</p>
				<Link to="../game" onClick={() => setChoixDifficulte('facile')} >Facile</Link>
				<Link to="../game" onClick={() => setChoixDifficulte('normal')} >Normal</Link>
				<Link to="../game" onClick={() => setChoixDifficulte('difficile')} >Difficile</Link>
			</div>
		</div>

	);
}


export default Config;