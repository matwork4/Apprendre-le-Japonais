import '../styles/hiragana.css';
import React from 'react';
import { Link } from "react-router-dom";
import HiraganaGame from './HiraganaGame';

const Hiragana = () => {
    return (
        <div class="main">
            <div id="left">
                <h3 id="textRight">Syllabes simples</h3>
                <div class="lecon" onclick="">
                    <div class="button">
                        <h3>Leçon 1</h3>
                        <Link to="/HiraganaGame?1">Jouer</Link>
                    </div>
                    <table>
                        <tr>
                            <td class="voc" onclick="">あ<br />a</td>
                            <td class="voc">い<br />i</td>
                            <td class="voc">う<br />u</td>
                            <td class="voc">え<br />e</td>
                            <td class="voc">お<br />o</td>
                        </tr>
                        <tr>
                            <td class="voc">か<br />ka</td>
                            <td class="voc">き<br />ki</td>
                            <td class="voc">く<br />ku</td>
                            <td class="voc">け<br />ke</td>
                            <td class="voc">こ<br />ko</td>
                        </tr>
                        <tr>
                            <td class="voc">さ<br />sa</td>
                            <td class="voc">し<br />shi</td>
                            <td class="voc">す<br />su</td>
                            <td class="voc">せ<br />se</td>
                            <td class="voc">そ<br />so</td>
                        </tr>
                    </table>
                </div>
                <div class="lecon" onclick="">
                    <div class="button">
                        <h3>Leçon 2</h3>
                        <Link to="/HiraganaGame?2">Jouer</Link>
                    </div>
                    <table>
                        <tr>
                            <td class="voc">た<br />ta</td>
                            <td class="voc">ち<br />chi</td>
                            <td class="voc">つ<br />tsu</td>
                            <td class="voc">て<br />te</td>
                            <td class="voc">と<br />to</td>
                        </tr>
                        <tr>
                            <td class="voc">な<br />na</td>
                            <td class="voc">に<br />ni</td>
                            <td class="voc">ぬ<br />nu</td>
                            <td class="voc">ね<br />ne</td>
                            <td class="voc">の<br />no</td>
                        </tr>
                        <tr>
                            <td class="voc">は<br />ha</td>
                            <td class="voc">ひ<br />hi</td>
                            <td class="voc">ふ<br />fu</td>
                            <td class="voc">へ<br />he</td>
                            <td class="voc">ほ<br />ho</td>
                        </tr>
                    </table>
                </div>
                <div class="lecon" onclick="">
                    <div class="button">
                        <h3>Leçon 3</h3>
                        <Link to="/HiraganaGame?3">Jouer</Link>
                    </div>
                    <table>
                        <tr>
                            <td class="voc">ま<br />ma</td>
                            <td class="voc">み<br />mi</td>
                            <td class="voc">む<br />mu</td>
                            <td class="voc">め<br />me</td>
                            <td class="voc">も<br />mo</td>
                        </tr>
                        <tr>
                            <td class="voc">や<br />ya</td>
                            <td></td>
                            <td class="voc">ゆ<br />yu</td>
                            <td></td>
                            <td class="voc">よ<br />yo</td>
                        </tr>
                        <tr>
                            <td class="voc">ら<br />ra</td>
                            <td class="voc">り<br />ri</td>
                            <td class="voc">る<br />ru</td>
                            <td class="voc">れ<br />re</td>
                            <td class="voc">ろ<br />ro</td>
                        </tr>
                        <tr>
                            <td class="voc">わ<br />wa</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="voc">を<br />wo</td>
                        </tr>
                        <tr>
                            <td class="voc">ん<br />n</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div id="right">
                <h3 id="textLeft">Syllabes additionnelles</h3>
                <div class="lecon" onclick="">
                    <table>
                        <tr>
                            <td class="voc">が<br />ga</td>
                            <td class="voc">ぎ<br />gi</td>
                            <td class="voc">ぐ<br />gu</td>
                            <td class="voc">げ<br />ge</td>
                            <td class="voc">ご<br />go</td>
                        </tr>
                        <tr>
                            <td class="voc">ざ<br />za</td>
                            <td class="voc">じ<br />ji</td>
                            <td class="voc">ず<br />zu</td>
                            <td class="voc">ぜ<br />ze</td>
                            <td class="voc">ぞ<br />zo</td>
                        </tr>
                        <tr>
                            <td class="voc">だ<br />da</td>
                            <td class="voc">ぢ<br />di</td>
                            <td class="voc">づ<br />du</td>
                            <td class="voc">で<br />de</td>
                            <td class="voc">ど<br />do</td>
                        </tr>
                        <tr>
                            <td class="voc">ば<br />ba</td>
                            <td class="voc">び<br />bi</td>
                            <td class="voc">ぶ<br />bu</td>
                            <td class="voc">べ<br />be</td>
                            <td class="voc">ぼ<br />bo</td>
                        </tr>
                        <tr>
                            <td class="voc">ぱ<br />pa</td>
                            <td class="voc">ぴ<br />pi</td>
                            <td class="voc">ぷ<br />pu</td>
                            <td class="voc">ぺ<br />pe</td>
                            <td class="voc">ぽ<br />po</td>
                        </tr>
                    </table>
                    <div class="button">
                        <h3>Leçon 4</h3>
                        <Link to="/HiraganaGame?4">Jouer</Link>
                    </div>
                </div>
                <div class="lecon" onclick="">
                    <table>
                        <tr>
                            <td class="voc">きゃ<br />kya</td>
                            <td class="voc">きゅ<br />kyu</td>
                            <td class="voc">きょ<br />kyo</td>
                            <td class="voc">ぎゃ<br />gya</td>
                            <td class="voc">ぎゅ<br />gyu</td>
                            <td class="voc">ぎょ<br />gyo</td>
                        </tr>
                        <tr>
                            <td class="voc">にゃ<br />nya</td>
                            <td class="voc">にゅ<br />nyu</td>
                            <td class="voc">にょ<br />nyo</td>
                            <td class="voc">ひゃ<br />hya</td>
                            <td class="voc">ひゅ<br />hyu</td>
                            <td class="voc">ひょ<br />hyo</td>
                        </tr>
                        <tr>
                            <td class="voc">びゃ<br />bya</td>
                            <td class="voc">びゃ<br />byu</td>
                            <td class="voc">びょ<br />byo</td>
                            <td class="voc">ぴゃ<br />pya</td>
                            <td class="voc">ぴゅ<br />pyu</td>
                            <td class="voc">ぴょ<br />pyo</td>
                        </tr>
                    </table>
                    <div class="button">
                        <h3>Leçon 5</h3>
                        <Link to="/HiraganaGame?5">Jouer</Link>
                    </div>
                </div>
                <div class="lecon" onclick="">
                    <table>
                        <tr>
                            <td class="voc">みゃ<br />mya</td>
                            <td class="voc">みゅ<br />myu</td>
                            <td class="voc">みょ<br />myo</td>
                            <td class="voc">りゃ<br />rya</td>
                            <td class="voc">りゅ<br />ryu</td>
                            <td class="voc">りょ<br />ryo</td>
                        </tr>
                        <tr>
                            <td class="voc">じゃ<br />ja</td>
                            <td class="voc">じゅ<br />ju</td>
                            <td class="voc">じょ<br />jo</td>
                            <td class="voc">ちゃ<br />cha</td>
                            <td class="voc">ちゅ<br />chu</td>
                            <td class="voc">ちょ<br />cho</td>
                        </tr>
                        <tr>
                            <td class="voc">しゃ<br />sha</td>
                            <td class="voc">しゅ<br />shu</td>
                            <td class="voc">しょ<br />sho</td>
                        </tr>
                    </table>
                    <div class="button">
                        <h3>Leçon 6</h3>
                        <Link to="/HiraganaGame?6">Jouer</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hiragana;