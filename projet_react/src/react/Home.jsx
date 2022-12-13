import React from 'react';
import '../styles/menu.css';

import { Link } from "react-router-dom";

function Home() {

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
			
			<p >L'alphabet japonais utilise deux types de caractères : Hiragana et Katakana. <br/>
			Les Hiraganas sont utilisés pour représenter les sons en japonais (c.a.d les syllabes), tandis que les Katakanas sont utilisés pour écrire les mots d'origine étrangère. <br/><br/>
			Vous pouvez choisir ici d'apprendre les Hiraganas ou les Katakanas.</p>
			<Link to="/hiragana" onClick={() => setChoixType('hiragana')}>Hiragana</Link>
			<Link to="/Katakana" onClick={() => setChoixType('katakana')}>Katakana</Link>
				
		</div>

	);
}

export default Home;