import '../styles/hiragana.css';
import React from 'react';
import { Link } from "react-router-dom";

const Hiragana = () => {


//closeWriting();


//Ferme la fenêtre de caractère
function closeWriting(){
    var elem = document.getElementById("displayWriting");
    elem.style.display = "none";
}

//Ouvre la fenêtre d'un caractère
function openWriting(car){
    console.log("open "+car);
    var elem = document.getElementById("displayWriting");
    elem.style.display = "";
    var elem2 = document.getElementById("img");
    if(getChoixType()=="hiragana"){
        elem2.style.background = "url('../assets/writing/hiragana/"+car+".png')";
    }else{
        elem2.style.background = "url('../assets/writing/katakana/"+car+".png')";
    }
    elem2.style.backgroundSize = "cover";
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

const divStyle = {
  display: 'none',
};

    return (
        <div class="main">

          <div id="left">
            <h3 id="textRight">Syllabes simples</h3>
            <div class="lecon" >
              <div class="button">
                <h3>Leçon 1</h3>
                <Link to="../config" onClick={() => setChoixLecon(1)}>Jouer</Link>
              </div>
              <table>
                <tr>
                  <td class="voc" onClick={() => openWriting('あ')} title="Cliquez">あ<br/>a</td>
                  <td class="voc" onClick={() => openWriting('い')} title="Cliquez">い<br/>i</td>
                  <td class="voc" onClick={() => openWriting('う')} title="Cliquez">う<br/>u</td>
                  <td class="voc" onClick={() => openWriting('え')} title="Cliquez">え<br/>e</td>
                  <td class="voc" onClick={() => openWriting('お')} title="Cliquez">お<br/>o</td>
                </tr>
                <tr>
                  <td class="voc" onClick={() => openWriting('か')} title="Cliquez">か<br/>ka</td>
                  <td class="voc" onClick={() => openWriting('き')} title="Cliquez">き<br/>ki</td>
                  <td class="voc" onClick={() => openWriting('く')} title="Cliquez">く<br/>ku</td>
                  <td class="voc" onClick={() => openWriting('け')} title="Cliquez">け<br/>ke</td>
                  <td class="voc" onClick={() => openWriting('こ')} title="Cliquez">こ<br/>ko</td>
                </tr>
                <tr>
                  <td class="voc" onClick={() => openWriting('さ')} title="Cliquez">さ<br/>sa</td>
                  <td class="voc" onClick={() => openWriting('し')} title="Cliquez">し<br/>shi</td>
                  <td class="voc" onClick={() => openWriting('す')} title="Cliquez">す<br/>su</td>
                  <td class="voc" onClick={() => openWriting('せ')} title="Cliquez">せ<br/>se</td>
                  <td class="voc" onClick={() => openWriting('そ')} title="Cliquez">そ<br/>so</td>
                </tr>
              </table>
            </div>
            <div class="lecon" >
              <div class="button">
                <h3>Leçon 2</h3>
                <Link to="../config" onClick={() => setChoixLecon(2)}>Jouer</Link>
              </div>
              <table>
                <tr>
                  <td class="voc" onClick={() => openWriting('た')} title="Cliquez">た<br/>ta</td>
                  <td class="voc" onClick={() => openWriting('ち')} title="Cliquez">ち<br/>chi</td>
                  <td class="voc" onClick={() => openWriting('つ')} title="Cliquez">つ<br/>tsu</td>
                  <td class="voc" onClick={() => openWriting('て')} title="Cliquez">て<br/>te</td>
                  <td class="voc" onClick={() => openWriting('と')} title="Cliquez">と<br/>to</td>
                </tr>
                <tr>
                  <td class="voc" onClick={() => openWriting('な')} title="Cliquez">な<br/>na</td>
                  <td class="voc" onClick={() => openWriting('に')} title="Cliquez">に<br/>ni</td>
                  <td class="voc" onClick={() => openWriting('ぬ')} title="Cliquez">ぬ<br/>nu</td>
                  <td class="voc" onClick={() => openWriting('ね')} title="Cliquez">ね<br/>ne</td>
                  <td class="voc" onClick={() => openWriting('の')} title="Cliquez">の<br/>no</td>
                </tr>
                <tr>
                  <td class="voc" onClick={() => openWriting('は')} title="Cliquez">は<br/>ha</td>
                  <td class="voc" onClick={() => openWriting('ひ')} title="Cliquez">ひ<br/>hi</td>
                  <td class="voc" onClick={() => openWriting('ふ')} title="Cliquez">ふ<br/>fu</td>
                  <td class="voc" onClick={() => openWriting('へ')} title="Cliquez">へ<br/>he</td>
                  <td class="voc" onClick={() => openWriting('ほ')} title="Cliquez">ほ<br/>ho</td>
                </tr>
              </table>
            </div>
            <div class="lecon" >
              <div class="button">
                <h3>Leçon 3</h3>
                <Link to="../config" onClick={() => setChoixLecon(3)}>Jouer</Link>
              </div>
              <table>
                <tr>
                  <td class="voc" onClick={() => openWriting('ま')} title="Cliquez">ま<br/>ma</td>
                  <td class="voc" onClick={() => openWriting('み')} title="Cliquez">み<br/>mi</td>
                  <td class="voc" onClick={() => openWriting('む')} title="Cliquez">む<br/>mu</td>
                  <td class="voc" onClick={() => openWriting('め')} title="Cliquez">め<br/>me</td>
                  <td class="voc" onClick={() => openWriting('も')} title="Cliquez">も<br/>mo</td>
                </tr>
                <tr>
                  <td class="voc" onClick={() => openWriting('や')} title="Cliquez">や<br/>ya</td>
                  <td></td>
                  <td class="voc" onClick={() => openWriting('ゆ')} title="Cliquez">ゆ<br/>yu</td>
                  <td></td>
                  <td class="voc" onClick={() => openWriting('よ')} title="Cliquez">よ<br/>yo</td>
                </tr>
                <tr>
                  <td class="voc" onClick={() => openWriting('ら')} title="Cliquez">ら<br/>ra</td>
                  <td class="voc" onClick={() => openWriting('り')} title="Cliquez">り<br/>ri</td>
                  <td class="voc" onClick={() => openWriting('る')} title="Cliquez">る<br/>ru</td>
                  <td class="voc" onClick={() => openWriting('れ')} title="Cliquez">れ<br/>re</td>
                  <td class="voc" onClick={() => openWriting('ろ')} title="Cliquez">ろ<br/>ro</td>
                </tr>
                <tr>
                  <td class="voc" onClick={() => openWriting('わ')} title="Cliquez">わ<br/>wa</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td class="voc" onClick={() => openWriting('を')} title="Cliquez">を<br/>wo</td>
                </tr>
                <tr>
                  <td class="voc" onClick={() => openWriting('ん')} title="Cliquez">ん<br/>n</td>
                </tr>
              </table>
            </div>
          </div>

          <div id="right">
            <h3 id="textLeft">Syllabes additionnelles</h3>
            <div class="lecon" >
              <table>
                <tr>
                  <td class="voc" onClick={() => openWriting('が')} title="Cliquez">が<br/>ga</td>
                  <td class="voc" onClick={() => openWriting('ぎ')} title="Cliquez">ぎ<br/>gi</td>
                  <td class="voc" onClick={() => openWriting('ぐ')} title="Cliquez">ぐ<br/>gu</td>
                  <td class="voc" onClick={() => openWriting('げ')} title="Cliquez">げ<br/>ge</td>
                  <td class="voc" onClick={() => openWriting('ご')} title="Cliquez">ご<br/>go</td>
                </tr>
                <tr>
                  <td class="voc" onClick={() => openWriting('ざ')} title="Cliquez">ざ<br/>za</td>
                  <td class="voc" onClick={() => openWriting('じ')} title="Cliquez">じ<br/>ji</td>
                  <td class="voc" onClick={() => openWriting('ず')} title="Cliquez">ず<br/>zu</td>
                  <td class="voc" onClick={() => openWriting('ぜ')} title="Cliquez">ぜ<br/>ze</td>
                  <td class="voc" onClick={() => openWriting('ぞ')} title="Cliquez">ぞ<br/>zo</td>
                </tr>
                <tr>
                  <td class="voc" onClick={() => openWriting('だ')} title="Cliquez">だ<br/>da</td>
                  <td class="voc" onClick={() => openWriting('ぢ')} title="Cliquez">ぢ<br/>di</td>
                  <td class="voc" onClick={() => openWriting('づ')} title="Cliquez">づ<br/>du</td>
                  <td class="voc" onClick={() => openWriting('で')} title="Cliquez">で<br/>de</td>
                  <td class="voc" onClick={() => openWriting('ど')} title="Cliquez">ど<br/>do</td>
                </tr>
                <tr>
                  <td class="voc" onClick={() => openWriting('ば')} title="Cliquez">ば<br/>ba</td>
                  <td class="voc" onClick={() => openWriting('び')} title="Cliquez">び<br/>bi</td>
                  <td class="voc" onClick={() => openWriting('ぶ')} title="Cliquez">ぶ<br/>bu</td>
                  <td class="voc" onClick={() => openWriting('べ')} title="Cliquez">べ<br/>be</td>
                  <td class="voc" onClick={() => openWriting('ぼ')} title="Cliquez">ぼ<br/>bo</td>
                </tr>
                <tr>
                  <td class="voc" onClick={() => openWriting('ぱ')} title="Cliquez">ぱ<br/>pa</td>
                  <td class="voc" onClick={() => openWriting('ぴ')} title="Cliquez">ぴ<br/>pi</td>
                  <td class="voc" onClick={() => openWriting('ぷ')} title="Cliquez">ぷ<br/>pu</td>
                  <td class="voc" onClick={() => openWriting('ぺ')} title="Cliquez">ぺ<br/>pe</td>
                  <td class="voc" onClick={() => openWriting('ぽ')} title="Cliquez">ぽ<br/>po</td>
                </tr>
              </table>
              <div class="button">
                <h3>Leçon 4</h3>
                <Link to="../config" onClick={() => setChoixLecon(4)}>Jouer</Link>
              </div>
            </div>
            <div class="lecon" >
              <table>
                <tr>
                  <td class="voc" onClick={() => openWriting('きゃ')} title="Cliquez">きゃ<br/>kya</td>
                  <td class="voc" onClick={() => openWriting('きゅ')} title="Cliquez">きゅ<br/>kyu</td>
                  <td class="voc" onClick={() => openWriting('きょ')} title="Cliquez">きょ<br/>kyo</td>
                  <td class="voc" onClick={() => openWriting('ぎゃ')} title="Cliquez">ぎゃ<br/>gya</td>
                  <td class="voc" onClick={() => openWriting('ぎゅ')} title="Cliquez">ぎゅ<br/>gyu</td>
                  <td class="voc" onClick={() => openWriting('ぎょ')} title="Cliquez">ぎょ<br/>gyo</td>
                </tr>
                <tr>
                  <td class="voc" onClick={() => openWriting('にゃ')} title="Cliquez">にゃ<br/>nya</td>
                  <td class="voc" onClick={() => openWriting('にゅ')} title="Cliquez">にゅ<br/>nyu</td>
                  <td class="voc" onClick={() => openWriting('にょ')} title="Cliquez">にょ<br/>nyo</td>
                  <td class="voc" onClick={() => openWriting('ひゃ')} title="Cliquez">ひゃ<br/>hya</td>
                  <td class="voc" onClick={() => openWriting('ひゅ')} title="Cliquez">ひゅ<br/>hyu</td>
                  <td class="voc" onClick={() => openWriting('ひょ')} title="Cliquez">ひょ<br/>hyo</td>
                </tr>
                <tr>
                  <td class="voc" onClick={() => openWriting('びゃ')} title="Cliquez">びゃ<br/>bya</td>
                  <td class="voc" onClick={() => openWriting('びゅ')} title="Cliquez">びゅ<br/>byu</td>
                  <td class="voc" onClick={() => openWriting('びょ')} title="Cliquez">びょ<br/>byo</td>
                  <td class="voc" onClick={() => openWriting('ぴゃ')} title="Cliquez">ぴゃ<br/>pya</td>
                  <td class="voc" onClick={() => openWriting('ぴゅ')} title="Cliquez">ぴゅ<br/>pyu</td>
                  <td class="voc" onClick={() => openWriting('ぴょ')} title="Cliquez">ぴょ<br/>pyo</td>
                </tr>
              </table>
              <div class="button">
                <h3>Leçon 5</h3>
                <Link to="../config" onClick={() => setChoixLecon(5)}>Jouer</Link>
              </div>
            </div>
            <div class="lecon" >
              <table>
                <tr>
                  <td class="voc" onClick={() => openWriting('みゃ')} title="Cliquez">みゃ<br/>mya</td>
                  <td class="voc" onClick={() => openWriting('みゅ')} title="Cliquez">みゅ<br/>myu</td>
                  <td class="voc" onClick={() => openWriting('みょ')} title="Cliquez">みょ<br/>myo</td>
                  <td class="voc" onClick={() => openWriting('りゃ')} title="Cliquez">りゃ<br/>rya</td>
                  <td class="voc" onClick={() => openWriting('りゅ')} title="Cliquez">りゅ<br/>ryu</td>
                  <td class="voc" onClick={() => openWriting('りょ')} title="Cliquez">りょ<br/>ryo</td>
                </tr>
                <tr>
                  <td class="voc" onClick={() => openWriting('じゃ')} title="Cliquez">じゃ<br/>ja</td>
                  <td class="voc" onClick={() => openWriting('じゅ')} title="Cliquez">じゅ<br/>ju</td>
                  <td class="voc" onClick={() => openWriting('じょ')} title="Cliquez">じょ<br/>jo</td>
                  <td class="voc" onClick={() => openWriting('ちゃ')} title="Cliquez">ちゃ<br/>cha</td>
                  <td class="voc" onClick={() => openWriting('ちゅ')} title="Cliquez">ちゅ<br/>chu</td>
                  <td class="voc" onClick={() => openWriting('ちょ')} title="Cliquez">ちょ<br/>cho</td>
                </tr>
                <tr>
                  <td class="voc" onClick={() => openWriting('しゃ')} title="Cliquez">しゃ<br/>sha</td>
                  <td class="voc" onClick={() => openWriting('しゅ')} title="Cliquez">しゅ<br/>shu</td>
                  <td class="voc" onClick={() => openWriting('しょ')} title="Cliquez">しょ<br/>sho</td>
                </tr>
              </table>
              <div class="button">
                <h3>Leçon 6</h3>
                <Link to="../config" onClick={() => setChoixLecon(6)}>Jouer</Link>
              </div>
            </div>
          </div>

          <div id="displayWriting" style={divStyle}>
            <div id="img"></div>
            <div id="btn" onClick={() => closeWriting()}>Fermer</div>
          </div>
        </div>
    );
};



export default Hiragana;