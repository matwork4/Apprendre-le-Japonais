
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



