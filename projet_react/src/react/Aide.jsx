import React from 'react';
import '../styles/aide.css';
import { Link } from "react-router-dom";

const Aide = () => {
    return (
        <div class="main">
        <div class="aide">
            <h1>Page d'accueil (Apprendre le japonais)</h1>
            <p>Sur cette page, vous avez le choix de cliquer sur 2 boutons qui vous redirigeront sur les pages respectives des hiraganas ou des katakanas pour les apprendre.</p>
            <img src='../assets/aide/AideAcceuil.PNG' />
        </div>
        <div class="aide" id="aideHiragana">
            <h1>Page Hiragana / Katakana</h1>
            <p>Les pages Hiragana et Katakana se composent de la même manière. L'alphabet est réparti en 2 grandes parties, les syllabes simples et les syllabes additionnelles. Les syllabes additionnelles reprennent les syllabes simples en y ajoutant des tenten (〃 てんてん), le maru (〇 まる), ou des petits Ya Yu ou Yo (ゃゅょ).
            <br />
            <br />
            Sur cette page vous pouvez cliquer sur un caractère afin de le visualiser en plus grand pour apprendre à l'écrire et le mémoriser : 
            </p>

            <img src='../assets/aide/AideHiragana.PNG' />
            <p>
            Vous pouvez également cliquer sur le bouton "Jouer" afin de lancer un petit jeu sur la leçon souhaitée.
            <br />
            Sachant que les jeux contiennent les hiragana/katakana qui sont mis en avant lorsque vous passez votre souris sur la leçon, par exemple pour la leçon 1 :
            </p>
            <img src='../assets/aide/AideHiragana2.PNG' />
        </div>
        <div class="aide" id="aideConfig">
            <h1>Page de Configuration</h1>
            <p>Une fois une leçon choisie, vous pouvez choisir de deviner la traduction, c'est-à-dire de trouver la traduction d'un caractère en japonais.
            <br /> 
            Ou bien, à partir de la traduction, de deviner le caractère qui lui correspond.
            <br />
            <br /> 
            Lorsque vous cliquez, un nouveau choix s'offre à vous, vous pouvez cliquer sur la difficulté qui vous convient. 
            <br /> 
            <br /> 
            Vous aurez à trouver la bonne réponse parmi :
            <br /> 
            &nbsp - &nbsp 2 propositions pour le mode Facile <br /> 
            &nbsp - &nbsp 4 propositions pour le mode Normal <br />  
            &nbsp - &nbsp 6 propositions pour le mode Difficile
            </p>
            <img src='../assets/aide/AideConfiguration.PNG' />
        </div>

        <div class="aide" id="aideJeu">
            <h1>Page du jeu</h1>
            <p> Une fois un choix de réponse effectué, il y a : 
            <br /> 
            &nbsp - &nbsp En Vert : Bonne réponse <br />
            &nbsp - &nbsp En Rouge : Mauvais réponse, et la bonne réponse s'affiche en vert
            <br /> 
            <br />
            Alors, le bouton "suivant" apparaît pour passer à la question suivante.
            <br />
            </p>
            <img src='../assets/aide/AideJeu.PNG' />
            <p>
            Une fois la partie terminée, le score est affiché : 
            </p>
            <img src='../assets/aide/AideResultat.PNG' />
            <p>
            Note : si vous quittez la partie avant la fin le score ne s'affichera pas.
            </p>
        </div>
    </div>


    );
  };
  
  export default Aide;