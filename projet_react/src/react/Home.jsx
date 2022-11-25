import React from 'react';
import '../styles/menu.css';
import { Link } from "react-router-dom";

function Home() {
    return (
 		    
		    <div class="main">
			    <p>Texte descriptif</p> 
				<Link to="/hiragana">Hiragana</Link>
			    <Link to="/Katakana">Katakana</Link>
		    </div>
		    
    
    );
  }
  
  export default Home;