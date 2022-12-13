import React from 'react';
import '../styles/game.css';

import { Link } from "react-router-dom";

function Game() {

/* ===================================
*  Classe Vocabulaire :
*  caractere : le caractère en japonais
*  traduction : la traduction en français 
*  type : 1 -> hiragana, 
*		  2 -> katakana, 
*		  3 -> kanji,
*  ===================================
*/
class Vocabulaire{
	constructor(caractere,traduction,type){
		this.caractere = caractere;
		this.traduction = traduction;
		this.type = type;

		if(type < 1 || type > 3){
			console.log("Erreur type : "+type);
		}
	}
	affiche(){
		//La virgule ajoute un espace, le '+' non
		console.log("Caractere :",this.caractere+", Traduction :",this.traduction)
	}

}


/* ===================================
*  Classe Lecon :
*  id : id de la leçon
*  title : titre de la leçon
*  list : liste du vocabulaire de la leçon
*  ===================================
*/

class Lecon{
	constructor(idLecon, title){
		this.id = idLecon;
		this.title = title;
		this.list = [];
	}

	//Ajoute un mot de vocabulaire à une leçon
	addVoc(voc){
		this.list.push(voc);
	}

}

/* Tous les hiraganas : 
 * https://fr.wikipedia.org/wiki/Hiragana 
 * katakanas :
 * https://fr.wikipedia.org/wiki/Katakana
 */

let L1 = new Lecon("1","Hiragana AKS");

L1.addVoc(new Vocabulaire("あ","a",1));
L1.addVoc(new Vocabulaire("い","i",1));
L1.addVoc(new Vocabulaire("う","u",1));
L1.addVoc(new Vocabulaire("え","e",1));
L1.addVoc(new Vocabulaire("お","o",1));
L1.addVoc(new Vocabulaire("か","ka",1));
L1.addVoc(new Vocabulaire("き","ki",1));
L1.addVoc(new Vocabulaire("く","ku",1));
L1.addVoc(new Vocabulaire("け","ke",1));
L1.addVoc(new Vocabulaire("こ","ko",1));
L1.addVoc(new Vocabulaire("さ","sa",1));
L1.addVoc(new Vocabulaire("し","shi",1));
L1.addVoc(new Vocabulaire("す","su",1));
L1.addVoc(new Vocabulaire("せ","se",1));
L1.addVoc(new Vocabulaire("そ","so",1));


let L2 = new Lecon("1","Hiragana TNH");

L2.addVoc(new Vocabulaire("た","ta",1));
L2.addVoc(new Vocabulaire("ち","chi",1));
L2.addVoc(new Vocabulaire("つ","tsu",1));
L2.addVoc(new Vocabulaire("て","te",1));
L2.addVoc(new Vocabulaire("と","to",1));
L2.addVoc(new Vocabulaire("な","na",1));
L2.addVoc(new Vocabulaire("に","ni",1));
L2.addVoc(new Vocabulaire("ぬ","nu",1));
L2.addVoc(new Vocabulaire("ね","ne",1));
L2.addVoc(new Vocabulaire("の","no",1));
L2.addVoc(new Vocabulaire("は","ha",1));
L2.addVoc(new Vocabulaire("ひ","hi",1));
L2.addVoc(new Vocabulaire("ふ","fu",1));
L2.addVoc(new Vocabulaire("へ","he",1));
L2.addVoc(new Vocabulaire("ほ","ho",1));


let L3 = new Lecon("3","Hiragana MYRW");

L3.addVoc(new Vocabulaire("ま","ma",1));
L3.addVoc(new Vocabulaire("み","mi",1));
L3.addVoc(new Vocabulaire("む","mu",1));
L3.addVoc(new Vocabulaire("め","me",1));
L3.addVoc(new Vocabulaire("も","mo",1));
L3.addVoc(new Vocabulaire("や","ya",1));
L3.addVoc(new Vocabulaire("ゆ","yu",1));
L3.addVoc(new Vocabulaire("よ","yo",1));
L3.addVoc(new Vocabulaire("ら","ra",1));
L3.addVoc(new Vocabulaire("り","ri",1));
L3.addVoc(new Vocabulaire("る","ru",1));
L3.addVoc(new Vocabulaire("れ","re",1));
L3.addVoc(new Vocabulaire("ろ","ro",1));
L3.addVoc(new Vocabulaire("わ","wa",1));
L3.addVoc(new Vocabulaire("を","wo",1));
L3.addVoc(new Vocabulaire("ん","n",1));


let L4 = new Lecon("4","Hiragana GZDBP");

L4.addVoc(new Vocabulaire("が","ga",1));
L4.addVoc(new Vocabulaire("ぎ","gi",1));
L4.addVoc(new Vocabulaire("ぐ","gu",1));
L4.addVoc(new Vocabulaire("げ","ge",1));
L4.addVoc(new Vocabulaire("ご","go",1));
L4.addVoc(new Vocabulaire("ざ","za",1));
L4.addVoc(new Vocabulaire("じ","ji",1));
L4.addVoc(new Vocabulaire("ず","zu",1));
L4.addVoc(new Vocabulaire("ぜ","ze",1));
L4.addVoc(new Vocabulaire("ぞ","zo",1));
L4.addVoc(new Vocabulaire("だ","da",1));
L4.addVoc(new Vocabulaire("ぢ","di",1));
L4.addVoc(new Vocabulaire("づ","du",1));
L4.addVoc(new Vocabulaire("で","de",1));
L4.addVoc(new Vocabulaire("ど","do",1));
L4.addVoc(new Vocabulaire("ば","ba",1));
L4.addVoc(new Vocabulaire("び","bi",1));
L4.addVoc(new Vocabulaire("ぶ","bu",1));
L4.addVoc(new Vocabulaire("べ","be",1));
L4.addVoc(new Vocabulaire("ぼ","bo",1));


let L5 = new Lecon("5","Hiragana KNB");

L5.addVoc(new Vocabulaire("きゃ","kya",1));
L5.addVoc(new Vocabulaire("きゅ","kyu",1));
L5.addVoc(new Vocabulaire("きょ","kyo",1));
L5.addVoc(new Vocabulaire("ぎゃ","gya",1));
L5.addVoc(new Vocabulaire("ぎゅ","gyu",1));
L5.addVoc(new Vocabulaire("ぎょ","gyo",1));
L5.addVoc(new Vocabulaire("にゃ","nya",1));
L5.addVoc(new Vocabulaire("にゅ","nyu",1));
L5.addVoc(new Vocabulaire("にょ","nyo",1));
L5.addVoc(new Vocabulaire("ひゃ","hya",1));
L5.addVoc(new Vocabulaire("ひゅ","hyu",1));
L5.addVoc(new Vocabulaire("ひょ","hyo",1));
L5.addVoc(new Vocabulaire("びゃ","bya",1));
L5.addVoc(new Vocabulaire("びゅ","byu",1));
L5.addVoc(new Vocabulaire("びょ","byo",1));
L5.addVoc(new Vocabulaire("ぴゃ","pya",1));
L5.addVoc(new Vocabulaire("ぴゅ","pyu",1));
L5.addVoc(new Vocabulaire("ぴょ","pyo",1));


let L6 = new Lecon("6","Hiragana MRJCS");

L6.addVoc(new Vocabulaire("みゃ","mya",1));
L6.addVoc(new Vocabulaire("みゅ","myu",1));
L6.addVoc(new Vocabulaire("みょ","myo",1));
L6.addVoc(new Vocabulaire("りゃ","rya",1));
L6.addVoc(new Vocabulaire("りゅ","ryu",1));
L6.addVoc(new Vocabulaire("りょ","ryo",1));
L6.addVoc(new Vocabulaire("じゃ","ja",1));
L6.addVoc(new Vocabulaire("じゅ","ju",1));
L6.addVoc(new Vocabulaire("じょ","jo",1));
L6.addVoc(new Vocabulaire("ちゃ","cha",1));
L6.addVoc(new Vocabulaire("ちゅ","chu",1));
L6.addVoc(new Vocabulaire("ちょ","cho",1));
L6.addVoc(new Vocabulaire("しゃ","sha",1));
L6.addVoc(new Vocabulaire("しゅ","shu",1));
L6.addVoc(new Vocabulaire("しょ","sho",1));


let L7 = new Lecon("7","Katakana AKS");

L7.addVoc(new Vocabulaire("ア","a",2));
L7.addVoc(new Vocabulaire("イ","i",2));
L7.addVoc(new Vocabulaire("ウ","u",2));
L7.addVoc(new Vocabulaire("エ","e",2));
L7.addVoc(new Vocabulaire("オ","o",2));
L7.addVoc(new Vocabulaire("カ","ka",2));
L7.addVoc(new Vocabulaire("キ","ki",2));
L7.addVoc(new Vocabulaire("ク","ku",2));
L7.addVoc(new Vocabulaire("ケ","ke",2));
L7.addVoc(new Vocabulaire("コ","ko",2));
L7.addVoc(new Vocabulaire("サ","sa",2));
L7.addVoc(new Vocabulaire("シ","shi",2));
L7.addVoc(new Vocabulaire("ス","su",2));
L7.addVoc(new Vocabulaire("セ","se",2));
L7.addVoc(new Vocabulaire("ソ","so",2));


let L8 = new Lecon("8","Katakana TNH");

L8.addVoc(new Vocabulaire("タ","ta",2));
L8.addVoc(new Vocabulaire("チ","chi",2));
L8.addVoc(new Vocabulaire("ツ","tsu",2));
L8.addVoc(new Vocabulaire("テ","te",2));
L8.addVoc(new Vocabulaire("ト","to",2));
L8.addVoc(new Vocabulaire("ナ","na",2));
L8.addVoc(new Vocabulaire("ニ","ni",2));
L8.addVoc(new Vocabulaire("ヌ","nu",2));
L8.addVoc(new Vocabulaire("ネ","ne",2));
L8.addVoc(new Vocabulaire("ノ","no",2));
L8.addVoc(new Vocabulaire("ハ","ha",2));
L8.addVoc(new Vocabulaire("ヒ","hi",2));
L8.addVoc(new Vocabulaire("フ","fu",2));
L8.addVoc(new Vocabulaire("ヘ","he",2));
L8.addVoc(new Vocabulaire("ホ","ho",2));


let L9 = new Lecon("9","Katakana MYRW");

L9.addVoc(new Vocabulaire("マ","ma",2));
L9.addVoc(new Vocabulaire("ミ","mi",2));
L9.addVoc(new Vocabulaire("ム","mu",2));
L9.addVoc(new Vocabulaire("メ","me",2));
L9.addVoc(new Vocabulaire("モ","mo",2));
L9.addVoc(new Vocabulaire("ヤ","ya",2));
L9.addVoc(new Vocabulaire("ユ","yu",2));
L9.addVoc(new Vocabulaire("ヨ","yo",2));
L9.addVoc(new Vocabulaire("ラ","ra",2));
L9.addVoc(new Vocabulaire("リ","ri",2));
L9.addVoc(new Vocabulaire("ル","ru",2));
L9.addVoc(new Vocabulaire("レ","re",2));
L9.addVoc(new Vocabulaire("ロ","ro",2));
L9.addVoc(new Vocabulaire("ワ","wa",2));
L9.addVoc(new Vocabulaire("ヲ","wo",2));
L9.addVoc(new Vocabulaire("ン","n",2));


let L10 = new Lecon("10","Katakana ZDBP");

L10.addVoc(new Vocabulaire("ザ","za",2));
L10.addVoc(new Vocabulaire("ジ","ji",2));
L10.addVoc(new Vocabulaire("ズ","zu",2));
L10.addVoc(new Vocabulaire("ゼ","ze",2));
L10.addVoc(new Vocabulaire("ゾ","zo",2));
L10.addVoc(new Vocabulaire("ダ","da",2));
L10.addVoc(new Vocabulaire("ヂ","di",2));
L10.addVoc(new Vocabulaire("ヅ","du",2));
L10.addVoc(new Vocabulaire("デ","de",2));
L10.addVoc(new Vocabulaire("ド","do",2));
L10.addVoc(new Vocabulaire("バ","ba",2));
L10.addVoc(new Vocabulaire("ビ","bi",2));
L10.addVoc(new Vocabulaire("ブ","bu",2));
L10.addVoc(new Vocabulaire("ベ","be",2));
L10.addVoc(new Vocabulaire("ボ","bo",2));
L10.addVoc(new Vocabulaire("パ","pa",2));
L10.addVoc(new Vocabulaire("ピ","pi",2));
L10.addVoc(new Vocabulaire("プ","pu",2));
L10.addVoc(new Vocabulaire("ペ","pe",2));
L10.addVoc(new Vocabulaire("ポ","po",2));


let L11 = new Lecon("11","Katakana KGNHBP");

L11.addVoc(new Vocabulaire("キャ","kya",2));
L11.addVoc(new Vocabulaire("キュ","kyu",2));
L11.addVoc(new Vocabulaire("キョ","kyo",2));
L11.addVoc(new Vocabulaire("ギャ","gya",2));
L11.addVoc(new Vocabulaire("ギュ","gyu",2));
L11.addVoc(new Vocabulaire("ギョ","gyo",2));
L11.addVoc(new Vocabulaire("ニャ","nya",2));
L11.addVoc(new Vocabulaire("ニュ","nyu",2));
L11.addVoc(new Vocabulaire("ニョ","nyo",2));
L11.addVoc(new Vocabulaire("ヒャ","hya",2));
L11.addVoc(new Vocabulaire("ヒュ","hyu",2));
L11.addVoc(new Vocabulaire("ヒョ","hyo",2));
L11.addVoc(new Vocabulaire("ビャ","bya",2));
L11.addVoc(new Vocabulaire("ビュ","byu",2));
L11.addVoc(new Vocabulaire("ビョ","byo",2));
L11.addVoc(new Vocabulaire("ピャ","pya",2));
L11.addVoc(new Vocabulaire("ピュ","pyu",2));
L11.addVoc(new Vocabulaire("ピョ","pyo",2));


let L12 = new Lecon("12","Katakana MRJCS");

L12.addVoc(new Vocabulaire("ミャ","mya",2));
L12.addVoc(new Vocabulaire("ミュ","myu",2));
L12.addVoc(new Vocabulaire("ミョ","myo",2));
L12.addVoc(new Vocabulaire("リャ","rya",2));
L12.addVoc(new Vocabulaire("リュ","ryu",2));
L12.addVoc(new Vocabulaire("リョ","ryo",2));
L12.addVoc(new Vocabulaire("ジャ","ja",2));
L12.addVoc(new Vocabulaire("ジュ","ju",2));
L12.addVoc(new Vocabulaire("ジョ","jo",2));
L12.addVoc(new Vocabulaire("チャ","cha",2));
L12.addVoc(new Vocabulaire("チュ","chu",2));
L12.addVoc(new Vocabulaire("チョ","cho",2));
L12.addVoc(new Vocabulaire("シャ","sha",2));
L12.addVoc(new Vocabulaire("シュ","shu",2));
L12.addVoc(new Vocabulaire("ショ","sho",2));




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
var l;

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


//hideTerminer();
//hideSuivant();
//hideScore();
//genereDOM();

const divStyle = {
  visibility: 'hidden',
};

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

function hideScore(){
	var elem = document.getElementById("score_div");
	elem.style.visibility = "hidden";
}
function afficheScore(){
	//console.log("affiche");
	var elem = document.getElementById("score");
	elem.innerHTML = "Score : "+score+"/"+leconMelangee.length;
	
	var elem3 = document.getElementById("motivation");
	if(score<(leconMelangee.length/2)){
		elem3.innerHTML = "Tu feras mieux la prochaine fois 😉";
	}else if(score==leconMelangee.length){
		elem3.innerHTML = "🎆 C'est parfait, félicitations ! 🎆";
	}else if(score>((leconMelangee.length/4)*3)){
		elem3.innerHTML = "C'est presque parfait ! 👍";
	}else{
		elem3.innerHTML = "Continue l'entrainement 💪";
	}


	var elem2 = document.getElementById("score_div");
	elem2.style.visibility = "";
}

//change la page dans le dom
function updatePageDOM(){
	var elem = document.getElementById("page");
	elem.innerHTML = page+"/"+leconMelangee.length;
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

	/* idée : copier les réponses dans un nouveau tableau, 
	 * et a chaque tirage random la retirer du tableau 
	 *
	 */


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



//Genere tout le DOM
function genereDOM(){
	if(devinePrononciation){
		addQuestionDOM(leconMelangee[page-1].caractere);
	}else{
		addQuestionDOM(leconMelangee[page-1].traduction);
	}
	//var l = ['A','B','C','D'];
	l = genereteAnswers();
	if(devinePrononciation){
		addReponsesDOM(l,leconMelangee[page-1].traduction);
	}else{
		addReponsesDOM(l,leconMelangee[page-1].caractere);
	}
	updatePageDOM();
}

//Question suivante
function suivant(){
	page++;
	dejaJoue = false;
	hideSuivant();
	removeReponsesDOM();
	genereDOM();
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
	if(page==leconMelangee.length){
		afficheTerminer();
		afficheScore();
	}else{
		afficheSuivant();
	}
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



//Renvoie la liste de vocabulaire mélangée en fonction de l'id leçon
function initVocMelange(idL){
	if(idL == 1){
		return shuffle(L1.list);
	}else if(idL == 2){
		return shuffle(L2.list);
	}else if(idL == 3){
		return shuffle(L3.list);
	}else if(idL == 4){
		return shuffle(L4.list);
	}else if(idL == 5){
		return shuffle(L5.list);
	}else if(idL == 6){
		return shuffle(L6.list);
	}else if(idL == 7){
		return shuffle(L7.list);
	}else if(idL == 8){
		return shuffle(L8.list);
	}else if(idL == 9){
		return shuffle(L9.list);
	}else if(idL == 10){
		return shuffle(L10.list);
	}else if(idL == 11){
		return shuffle(L11.list);
	}else if(idL == 12){
		return shuffle(L12.list);
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

/* Type : hiragana ou katakana
 *
 */
function setChoixType(s){
	sessionStorage.setItem('type',s);
}
function getChoixType(){
	let a = sessionStorage.getItem('type')
	//console.log("type = "+a);
	return a;
}


function testJS(){
    console.log("test js");
}

	return (
		<div class="main">
			<div id="panel">
			  <div id="caractere">Vide</div>
			  <div id="reponses">
			  </div>
			</div>
			<div class="fleches">
				<Link to="../game" class="btn" id="terminer" style={divStyle}>Rejouer</Link>
			  	<p id="page">vide</p>
			  	<div class="btn" id="suivant" onClick={() => suivant()} style={divStyle}>Suivant</div>
			</div>
			<div id="score_div" style={divStyle}>
				<p id="score">Score : </p>
				<p id="motivation"></p>
			</div>
		</div>

	);
}

export default Game;