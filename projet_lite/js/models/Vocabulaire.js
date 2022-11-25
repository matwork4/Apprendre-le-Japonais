
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