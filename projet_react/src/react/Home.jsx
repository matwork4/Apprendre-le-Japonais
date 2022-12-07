import React from 'react';
import '../styles/menu.css';

import { Link } from "react-router-dom";

function Home() {
	return (
		<>
			<div class="main">
				<p>
					L'alphabet japonais utilise différent deux types de caractères : Hiragana et Katakana. <br />
					Les Hiraganas sont utilisés pour représenter les sons japonais (les syllabes). Les Katakanas eux sont utilisés pour écrire les mots d'origine étrangère. <br />
					Vous pouvez choisir ici d'apprendre les Hiragana ou les Katakana.
				</p>
				<Link to="/hiragana">Hiragana</Link>
				<Link to="/Katakana">Katakana</Link>
			</div>
		</>

	);
}

export default Home;