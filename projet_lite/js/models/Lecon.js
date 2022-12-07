
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



