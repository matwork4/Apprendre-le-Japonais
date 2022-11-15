
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


