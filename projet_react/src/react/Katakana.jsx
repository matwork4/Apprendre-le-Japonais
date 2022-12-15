import '../styles/hiragana.css';
import React from 'react';
import { Link } from "react-router-dom";

const Katakana = () => {


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
    <div class="main" id="hiragana_page">


      <div id="left">
        <h3 id="textRight">Syllabes simples</h3>

        <div class="lecon" onclick="">
          <div class="button">
            <h3>Leçon 7</h3>
            <Link to="../config" onClick={() => setChoixLecon(7)}>Jouer</Link>
          </div>
          <table>
            <tr>

          <td class="voc" onClick={() => openWriting('ア')} title="Cliquez">ア<br/>a</td>
          <td class="voc" onClick={() => openWriting('イ')} title="Cliquez">イ<br/>i</td>
          <td class="voc" onClick={() => openWriting('ウ')} title="Cliquez">ウ<br/>u</td>
          <td class="voc" onClick={() => openWriting('エ')} title="Cliquez">エ<br/>e</td>
          <td class="voc" onClick={() => openWriting('オ')} title="Cliquez">オ<br/>o</td>
          </tr>
          <tr>
          <td class="voc" onClick={() => openWriting('カ')} title="Cliquez">カ<br/>ka</td>
          <td class="voc" onClick={() => openWriting('キ')} title="Cliquez">キ<br/>ki</td>
          <td class="voc" onClick={() => openWriting('ク')} title="Cliquez">ク<br/>ku</td>
          <td class="voc" onClick={() => openWriting('ケ')} title="Cliquez">ケ<br/>ke</td>
          <td class="voc" onClick={() => openWriting('コ')} title="Cliquez">コ<br/>ko</td>
          </tr>
          <tr>
            <td class="voc" onClick={() => openWriting('サ')} title="Cliquez">サ<br/>sa</td>
          <td class="voc" onClick={() => openWriting('シ')} title="Cliquez">シ<br/>shi</td>
          <td class="voc" onClick={() => openWriting('ス')} title="Cliquez">ス<br/>su</td>
          <td class="voc" onClick={() => openWriting('セ')} title="Cliquez">セ<br/>se</td>
          <td class="voc" onClick={() => openWriting('ソ')} title="Cliquez">ソ<br/>so</td>
          </tr>
          </table>
        </div>
        <div class="lecon" onclick="">
          <div class="button">
            <h3>Leçon 8</h3>
            <Link to="../config" onClick={() => setChoixLecon(8)}>Jouer</Link>
          </div>
          <table>
            <tr>
          <td class="voc" onClick={() => openWriting('タ')} title="Cliquez">タ<br/>ta</td>
          <td class="voc" onClick={() => openWriting('チ')} title="Cliquez">チ<br/>chi</td>
          <td class="voc" onClick={() => openWriting('ツ')} title="Cliquez">ツ<br/>tsu</td>
          <td class="voc" onClick={() => openWriting('テ')} title="Cliquez">テ<br/>te</td>
          <td class="voc" onClick={() => openWriting('ト')} title="Cliquez">ト<br/>to</td>
          </tr>
          <tr>
          <td class="voc" onClick={() => openWriting('ナ')} title="Cliquez">ナ<br/>na</td>
          <td class="voc" onClick={() => openWriting('ニ')} title="Cliquez">ニ<br/>ni</td>
          <td class="voc" onClick={() => openWriting('ヌ')} title="Cliquez">ヌ<br/>nu</td>
          <td class="voc" onClick={() => openWriting('ネ')} title="Cliquez">ネ<br/>ne</td>
          <td class="voc" onClick={() => openWriting('ノ')} title="Cliquez">ノ<br/>no</td>
          </tr>
          <tr>
          <td class="voc" onClick={() => openWriting('ハ')} title="Cliquez">ハ<br/>ha</td>
          <td class="voc" onClick={() => openWriting('ヒ')} title="Cliquez">ヒ<br/>hi</td>
          <td class="voc" onClick={() => openWriting('フ')} title="Cliquez">フ<br/>fu</td>
          <td class="voc" onClick={() => openWriting('ヘ')} title="Cliquez">ヘ<br/>he</td>
          <td class="voc" onClick={() => openWriting('ホ')} title="Cliquez">ホ<br/>ho</td>
          </tr>
          </table>
        </div>
        <div class="lecon" onclick="">
          <div class="button">
            <h3>Leçon 9</h3>
            <Link to="../config" onClick={() => setChoixLecon(9)}>Jouer</Link>
          </div>
          <table>
            <tr>
          <td class="voc" onClick={() => openWriting('マ')} title="Cliquez">マ<br/>ma</td>
          <td class="voc" onClick={() => openWriting('ミ')} title="Cliquez">ミ<br/>mi</td>
          <td class="voc" onClick={() => openWriting('ム')} title="Cliquez">ム<br/>mu</td>
          <td class="voc" onClick={() => openWriting('メ')} title="Cliquez">メ<br/>me</td>
          <td class="voc" onClick={() => openWriting('モ')} title="Cliquez">モ<br/>mo</td>
          </tr>
          <tr>
          <td class="voc" onClick={() => openWriting('ヤ')} title="Cliquez">ヤ<br/>ya</td>
          <td></td>
          <td class="voc" onClick={() => openWriting('ユ')} title="Cliquez">ユ<br/>yu</td>
          <td></td>
          <td class="voc" onClick={() => openWriting('ヨ')} title="Cliquez">ヨ<br/>yo</td>
          </tr>
          <tr>
          <td class="voc" onClick={() => openWriting('ラ')} title="Cliquez">ラ<br/>ra</td>
          <td class="voc" onClick={() => openWriting('リ')} title="Cliquez">リ<br/>ri</td>
          <td class="voc" onClick={() => openWriting('ル')} title="Cliquez">ル<br/>ru</td>
          <td class="voc" onClick={() => openWriting('レ')} title="Cliquez">レ<br/>re</td>
          <td class="voc" onClick={() => openWriting('ロ')} title="Cliquez">ロ<br/>ro</td>
          </tr>
          <tr>
          <td class="voc" onClick={() => openWriting('ワ')} title="Cliquez">ワ<br/>wa</td>
          <td></td>
          <td></td>
          <td></td>
          <td class="voc" onClick={() => openWriting('ヲ')} title="Cliquez">ヲ<br/>wo</td>
          </tr>
          <tr>
            <td class="voc" onClick={() => openWriting('ン')} title="Cliquez">ン<br/>n</td>
          </tr>
          </table>
        </div>
      </div>

      <div id="right">
        <h3 id="textLeft">Syllabes additionnelles</h3>
        <div class="lecon" onclick="">
          <table>
            <tr>
          <td class="voc" onClick={() => openWriting('ガ')} title="Cliquez">ガ<br/>ga</td>
          <td class="voc" onClick={() => openWriting('ギ')} title="Cliquez">ギ<br/>gi</td>
          <td class="voc" onClick={() => openWriting('グ')} title="Cliquez">グ<br/>gu</td>
          <td class="voc" onClick={() => openWriting('ゲ')} title="Cliquez">ゲ<br/>ge</td>
          <td class="voc" onClick={() => openWriting('ゴ')} title="Cliquez">ゴ<br/>go</td>
          </tr>
          <tr>
          <td class="voc" onClick={() => openWriting('ザ')} title="Cliquez">ザ<br/>za</td>
          <td class="voc" onClick={() => openWriting('ジ')} title="Cliquez">ジ<br/>ji</td>
          <td class="voc" onClick={() => openWriting('ズ')} title="Cliquez">ズ<br/>zu</td>
          <td class="voc" onClick={() => openWriting('ゼ')} title="Cliquez">ゼ<br/>ze</td>
          <td class="voc" onClick={() => openWriting('ゾ')} title="Cliquez">ゾ<br/>zo</td>
          </tr>
          <tr>
          <td class="voc" onClick={() => openWriting('ダ')} title="Cliquez">ダ<br/>da</td>
          <td class="voc" onClick={() => openWriting('ヂ')} title="Cliquez">ヂ<br/>di</td>
          <td class="voc" onClick={() => openWriting('ヅ')} title="Cliquez">ヅ<br/>du</td>
          <td class="voc" onClick={() => openWriting('デ')} title="Cliquez">デ<br/>de</td>
          <td class="voc" onClick={() => openWriting('ド')} title="Cliquez">ド<br/>do</td>
          </tr>
          <tr>
          <td class="voc" onClick={() => openWriting('バ')} title="Cliquez">バ<br/>ba</td>
          <td class="voc" onClick={() => openWriting('ビ')} title="Cliquez">ビ<br/>bi</td>
          <td class="voc" onClick={() => openWriting('ブ')} title="Cliquez">ブ<br/>bu</td>
          <td class="voc" onClick={() => openWriting('ベ')} title="Cliquez">ベ<br/>be</td>
          <td class="voc" onClick={() => openWriting('ボ')} title="Cliquez">ボ<br/>bo</td>
          </tr>
          <tr>
          <td class="voc" onClick={() => openWriting('パ')} title="Cliquez">パ<br/>pa</td>
          <td class="voc" onClick={() => openWriting('ピ')} title="Cliquez">ピ<br/>pi</td>
          <td class="voc" onClick={() => openWriting('プ')} title="Cliquez">プ<br/>pu</td>
          <td class="voc" onClick={() => openWriting('ペ')} title="Cliquez">ペ<br/>pe</td>
          <td class="voc" onClick={() => openWriting('ポ')} title="Cliquez">ポ<br/>po</td>
          </tr>
          </table>
          <div class="button">
            <h3>Leçon 10</h3>
            <Link to="../config" onClick={() => setChoixLecon(10)}>Jouer</Link>
          </div>
        </div>
        <div class="lecon" onclick="">
          <table>
            <tr>
          <td class="voc" onClick={() => openWriting('キャ')} title="Cliquez">キャ<br/>kya</td>
          <td class="voc" onClick={() => openWriting('キュ')} title="Cliquez">キュ<br/>kyu</td>
          <td class="voc" onClick={() => openWriting('キョ')} title="Cliquez">キョ<br/>kyo</td>
          <td class="voc" onClick={() => openWriting('ギャ')} title="Cliquez">ギャ<br/>gya</td>
          <td class="voc" onClick={() => openWriting('ギュ')} title="Cliquez">ギュ<br/>gyu</td>
          <td class="voc" onClick={() => openWriting('ギョ')} title="Cliquez">ギョ<br/>gyo</td>
          </tr>
          <tr>
          <td class="voc" onClick={() => openWriting('ニャ')} title="Cliquez">ニャ<br/>nya</td>
          <td class="voc" onClick={() => openWriting('ニュ')} title="Cliquez">ニュ<br/>nyu</td>
          <td class="voc" onClick={() => openWriting('ニョ')} title="Cliquez">ニョ<br/>nyo</td>
          <td class="voc" onClick={() => openWriting('ヒャ')} title="Cliquez">ヒャ<br/>hya</td>
          <td class="voc" onClick={() => openWriting('ヒュ')} title="Cliquez">ヒュ<br/>hyu</td>
          <td class="voc" onClick={() => openWriting('ヒョ')} title="Cliquez">ヒョ<br/>hyo</td>
          </tr>
          <tr>
          <td class="voc" onClick={() => openWriting('ビャ')} title="Cliquez">ビャ<br/>bya</td>
          <td class="voc" onClick={() => openWriting('ビュ')} title="Cliquez">ビュ<br/>byu</td>
          <td class="voc" onClick={() => openWriting('ビョ')} title="Cliquez">ビョ<br/>byo</td>
          <td class="voc" onClick={() => openWriting('ピャ')} title="Cliquez">ピャ<br/>pya</td>
          <td class="voc" onClick={() => openWriting('ピュ')} title="Cliquez">ピュ<br/>pyu</td>
          <td class="voc" onClick={() => openWriting('ピョ')} title="Cliquez">ピョ<br/>pyo</td>
          </tr>
        </table>
        <div class="button">
            <h3>Leçon 11</h3>
            <Link to="../config" onClick={() => setChoixLecon(11)}>Jouer</Link>
          </div>
      </div>
      <div class="lecon" onclick="">
        <table>
          <tr>
          <td class="voc" onClick={() => openWriting('ミャ')} title="Cliquez">ミャ<br/>mya</td>
          <td class="voc" onClick={() => openWriting('ミュ')} title="Cliquez">ミュ<br/>myu</td>
          <td class="voc" onClick={() => openWriting('ミョ')} title="Cliquez">ミョ<br/>myo</td>
          <td class="voc" onClick={() => openWriting('リャ')} title="Cliquez">リャ<br/>rya</td>
          <td class="voc" onClick={() => openWriting('リュ')} title="Cliquez">リュ<br/>ryu</td>
          <td class="voc" onClick={() => openWriting('リョ')} title="Cliquez">リョ<br/>ryo</td>
          </tr>
          <tr>
          <td class="voc" onClick={() => openWriting('ジャ')} title="Cliquez">ジャ<br/>ja</td>
          <td class="voc" onClick={() => openWriting('ジュ')} title="Cliquez">ジュ<br/>ju</td>
          <td class="voc" onClick={() => openWriting('ジョ')} title="Cliquez">ジョ<br/>jo</td>
          <td class="voc" onClick={() => openWriting('チャ')} title="Cliquez">チャ<br/>cha</td>
          <td class="voc" onClick={() => openWriting('チュ')} title="Cliquez">チュ<br/>chu</td>
          <td class="voc" onClick={() => openWriting('チョ')} title="Cliquez">チョ<br/>cho</td>
          </tr>
          <tr>
          <td class="voc" onClick={() => openWriting('シャ')} title="Cliquez">シャ<br/>sha</td>
          <td class="voc" onClick={() => openWriting('シュ')} title="Cliquez">シュ<br/>shu</td>
          <td class="voc" onClick={() => openWriting('ショ')} title="Cliquez">ショ<br/>sho</td>
          </tr>
          </table>
          <div class="button">
            <h3>Leçon 12</h3>
            <Link to="../config" onClick={() => setChoixLecon(12)}>Jouer</Link>
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

export default Katakana;